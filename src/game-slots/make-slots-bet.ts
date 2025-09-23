// /src/game/make-slots-bet.ts
import { gql } from "../__generated__";
import { BetKind, HubOutcomeInput } from "../__generated__/graphql";
import {
  createHashChain,
  sendGraphQLRequest,
} from "@moneypot/experience-react-sdk/graphql";
import { GameStore } from "../GameStore";

// GraphQL kept the same shape as coinflip
const MAKE_SLOTS_BET = gql(/* GraphQL */ `
  mutation MakeSlotsBet($input: HubMakeOutcomeBetInput!) {
    hubMakeOutcomeBet(input: $input) {
      result {
        __typename
        ... on HubBadHashChainError {
          message
        }
        ... on HubMakeOutcomeBetSuccess {
          __typename
          bet {
            id
            wager
            profit
            hubCurrencyByCurrencyKeyAndCasinoId {
              key
              displayUnitName
              displayUnitScale
            }
          }
        }
      }
    }
  }
`);

export type BetInput = {
  wager: number;
  currency: string;
  hashChainId: string | null;
  clientSeed: string;
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
function buildOutcomes(houseEdge: number): {
  outcomes: HubOutcomeInput[];
  pWin: number;
} {
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
  console.log("outcomes", outcomes);
  return { outcomes, pWin };
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
  retryOnBadHashChain = true,
  houseEdge = 0.01, // 1% edge
}: {
  gameStore: GameStore;
  input: BetInput;
  retryOnBadHashChain?: boolean;
  houseEdge?: number;
}) {
  if (input.hashChainId === null) {
    const hashChainId = await createHashChain(gameStore.baseStore);
    return makeSlotsBet({
      gameStore,
      input: { ...input, hashChainId },
      retryOnBadHashChain,
      houseEdge,
    });
  }

  const { outcomes } = buildOutcomes(houseEdge);

  const result = await sendGraphQLRequest(gameStore.baseStore, {
    document: MAKE_SLOTS_BET,
    variables: {
      input: {
        kind: BetKind.General,
        wager: input.wager,
        currency: input.currency,
        outcomes,
        hashChainId: input.hashChainId,
        clientSeed: input.clientSeed,
      },
    },
  });

  const __typename = result.hubMakeOutcomeBet?.result?.__typename;
  switch (__typename) {
    case undefined:
      throw new Error("No result from makeSlotsBet");
    case "HubBadHashChainError": {
      if (!retryOnBadHashChain) throw new Error("Bad hash chain");
      const hashChainId = await createHashChain(gameStore.baseStore);
      return makeSlotsBet({
        gameStore,
        input: { ...input, hashChainId },
        retryOnBadHashChain: false,
        houseEdge,
      });
    }
    case "HubMakeOutcomeBetSuccess": {
      const bet = result.hubMakeOutcomeBet!.result!.bet!;
      const won = bet.profit > 0;
      const symbols = genSpinSymbols(won);
      gameStore.addSlotsBet({
        id: bet.id,
        wager: bet.wager,
        profit: bet.profit,
        currency: {
          key: bet.hubCurrencyByCurrencyKeyAndCasinoId!.key,
          displayUnitName:
            bet.hubCurrencyByCurrencyKeyAndCasinoId!.displayUnitName,
          displayUnitScale:
            bet.hubCurrencyByCurrencyKeyAndCasinoId!.displayUnitScale,
        },
        symbols,
      });
      return result.hubMakeOutcomeBet?.result;
    }
    default: {
      const _exhaustiveCheck: never = __typename;
      throw new Error(`Unhandled result type: ${_exhaustiveCheck}`);
    }
  }
}
