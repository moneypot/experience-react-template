// Slots betting using the SDK's makeOutcomeBet helper
import { OutcomeBetKind, HubOutcomeInput } from "../__generated__/graphql";
import { GameStore } from "../GameStore";

export type BetInput = {
  wager: number;
  currency: string;
};

// Configuration for the slots game
const CONFIG = {
  symbols: ["🍒", "🍋", "🍇", "🔔", "🍀", "7️⃣"],
  match2Profit: 0.5, // pair wins 0.5x wager
};

// Derive match3Profit from match2Profit and houseEdge to maintain the desired edge
// EV equation: (tripleP * match3Profit) + (pairP * match2Profit) + (loseP * -1) = -houseEdge
function computeMatch3Profit(houseEdge: number): number {
  const n = CONFIG.symbols.length;
  const total = n * n * n;
  const tripleWeight = n;
  const pairWeight = n * 3 * (n - 1);
  const loseWeight = n * (n - 1) * (n - 2);

  const tripleP = tripleWeight / total;
  const pairP = pairWeight / total;
  const loseP = loseWeight / total;

  // tripleP * match3Profit + pairP * match2Profit + loseP * (-1) = -houseEdge
  // tripleP * match3Profit = -houseEdge - pairP * match2Profit + loseP
  // match3Profit = (-houseEdge - pairP * match2Profit + loseP) / tripleP
  return (-houseEdge - pairP * CONFIG.match2Profit + loseP) / tripleP;
}

// We must create outcomes that give the house the desired edge
// or better (for the house). Else the house will reject our bet.
export function computeSlotsOutcomes(houseEdge: number): HubOutcomeInput[] {
  const n = CONFIG.symbols.length;
  const tripleWeight = n;
  const pairWeight = n * 3 * (n - 1);
  const loseWeight = n * (n - 1) * (n - 2);
  const match3Profit = computeMatch3Profit(houseEdge);

  const outcomes: HubOutcomeInput[] = [
    { weight: tripleWeight, profit: match3Profit }, // index 0: triple
    { weight: pairWeight, profit: CONFIG.match2Profit }, // index 1: pair
    { weight: loseWeight, profit: -1 }, // index 2: lose
  ];
  return outcomes;
}

function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate symbols based on outcome index: 0=triple, 1=pair, 2=lose
function genSpinSymbols(outcomeIdx: number): [string, string, string] {
  const symbols = CONFIG.symbols;

  if (outcomeIdx === 0) {
    // Triple: all three match
    const s = randomChoice(symbols);
    return [s, s, s];
  }

  if (outcomeIdx === 1) {
    // Pair: exactly two match (random positions)
    const pairSymbol = randomChoice(symbols);
    const oddSymbol = randomChoice(symbols.filter((x) => x !== pairSymbol));
    const oddPosition = Math.floor(Math.random() * 3); // 0, 1, or 2

    if (oddPosition === 0) return [oddSymbol, pairSymbol, pairSymbol];
    if (oddPosition === 1) return [pairSymbol, oddSymbol, pairSymbol];
    return [pairSymbol, pairSymbol, oddSymbol];
  }

  // Lose: all different
  const shuffled = [...symbols].sort(() => Math.random() - 0.5);
  return [shuffled[0], shuffled[1], shuffled[2]];
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
    kind: OutcomeBetKind.General,
    outcomes,
  });

  // Generate visual symbols based on outcome index (0=triple, 1=pair, 2=lose)
  const symbols = genSpinSymbols(result.outcomeIdx!);

  // Add the bet to the game store with symbols
  gameStore.addSlotsBet({
    ...result,
    outcomeIdx: result.outcomeIdx!,
    symbols,
  });

  return result;
}
