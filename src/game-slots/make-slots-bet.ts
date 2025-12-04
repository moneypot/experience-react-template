// Slots betting using the SDK's makeOutcomeBet helper
import { BetKind, HubOutcomeInput } from "../__generated__/graphql";
import { GameStore } from "../GameStore";

export type BetInput = {
  wager: number;
  currency: string;
};

// simple 3-reel symbols (uniform). Increase/decrease for different win prob.
const SYMBOLS = ["🍒", "🍋", "🍇", "🔔", "🍀", "7️⃣"]; // n = 6 => p(win)=1/n^2 = 1/36

// Given p(win) and a house edge h, solve profit_on_win so EV = -h:
// p*profitWin + (1-p)*(-1) = -h  => profitWin = (1 - p - h)/p
function computeProfitOnWin({
  pWin,
  houseEdge,
}: {
  pWin: number;
  houseEdge: number;
}) {
  return (1 - pWin - houseEdge) / pWin;
}

// We must create outcomes that give the house the desired edge
// or better (for the house). Else the house will reject our bet.
export function computeSlotsOutcomes(houseEdge: number): HubOutcomeInput[] {
  const n = SYMBOLS.length;
  const pWin = 1 / (n * n); // both reel2 and reel3 must match reel1
  const profitOnWin = computeProfitOnWin({ pWin, houseEdge }); // ~34.28 with n=6, h=0.02
  // Compress to two weighted outcomes to match these probabilities:
  // weights: win=1, lose=(1-p)/p = n^2 - 1
  const loseWeight = n * n - 1;

  const outcomes: HubOutcomeInput[] = [
    { weight: 1, profit: profitOnWin },
    { weight: loseWeight, profit: -1 },
  ];
  return outcomes;
}

function randomChoice<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function genSpinSymbols(won: boolean): [string, string, string] {
  if (won) {
    const s = randomChoice(SYMBOLS);
    return [s, s, s];
  }
  // Force a non-triple
  const a = randomChoice(SYMBOLS);
  const b = randomChoice(SYMBOLS);
  let c = randomChoice(SYMBOLS);
  // Ensure not all equal; allow pairs, just not triple
  if (b === a && c === a) {
    // n>=3 here; bump c to a different symbol
    c = randomChoice(SYMBOLS.filter((x) => x !== a));
  }
  return [a, b, c];
}

export default async function makeSlotsBet({
  gameStore,
  input,
  houseEdge,
}: {
  gameStore: GameStore;
  input: BetInput;
  houseEdge: number;
}) {
  const outcomes = computeSlotsOutcomes(houseEdge);

  // Use the SDK's makeOutcomeBet method which handles:
  // - Hash chain creation/retrieval
  // - Retry logic on bad hash chain
  // - GraphQL request
  // - Result extraction
  const result = await gameStore.baseStore.makeOutcomeBet({
    wager: input.wager,
    currency: input.currency,
    kind: BetKind.General,
    outcomes,
  });

  // Generate visual symbols based on win/loss
  const won = result.profit > 0;
  const symbols = genSpinSymbols(won);

  // Add the bet to the game store with symbols
  gameStore.addSlotsBet({
    ...result,
    symbols,
  });

  return result;
}
