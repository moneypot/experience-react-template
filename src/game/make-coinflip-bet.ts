// Here's an example of how to make a bet

import { gql } from "../__generated__";
import { BetKind, HubOutcomeInput } from "../__generated__/graphql";
import {
  createHashChain,
  sendGraphQLRequest,
} from "@moneypot/experience-react-sdk/graphql";
import { GameStore } from "../GameStore";

const MAKE_COINFLIP_BET = gql(/* GraphQL */ `
  mutation MakeCoinflipBet($input: HubMakeOutcomeBetInput!) {
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
  // Let us submit a bet with no hash chain so can create it
  // lazily on bet submit
  hashChainId: string | null;
  clientSeed: string;
};

export default async function makeCoinflipBet({
  gameStore,
  input,
  retryOnBadHashChain = true,
}: {
  gameStore: GameStore;
  input: BetInput;
  retryOnBadHashChain?: boolean;
}) {
  // If we have no active hash chain id, then first create one
  if (input.hashChainId === null) {
    const hashChainId = await createHashChain(gameStore.baseStore);
    return makeCoinflipBet({
      gameStore,
      input: {
        ...input,
        hashChainId,
      },
      retryOnBadHashChain,
    });
  }

  // Generalize our game into a list of outcomes
  const houseEdge = 0.01;
  const profitOnWin = (1 - houseEdge) / 0.5 - 1; // 0.98 when houseEdge = 0.01
  const outcomes: HubOutcomeInput[] = [
    // Heads = win
    {
      weight: 1,
      profit: profitOnWin,
    },
    // Tails = lose
    {
      weight: 1,
      profit: -1, // Lose 100% of wager
    },
  ];
  console.log("outcomes", outcomes);

  // Send the outcome bet to the hub server
  const result = await sendGraphQLRequest(gameStore.baseStore, {
    document: MAKE_COINFLIP_BET,
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
    case undefined: {
      throw new Error("No result from makeCoinflipBet");
    }
    case "HubBadHashChainError": {
      // If the hash chain is bad (e.g. expired), then request a new one and try the bet again
      if (!retryOnBadHashChain) {
        throw new Error("Bad hash chain");
      }

      const hashChainId = await createHashChain(gameStore.baseStore);
      return makeCoinflipBet({
        gameStore,
        input: {
          ...input,
          hashChainId,
        },
        // Retry bet with the new hash chain,
        // but if it fails again, don't retry.
        retryOnBadHashChain: false,
      });
    }
    case "HubMakeOutcomeBetSuccess": {
      const bet = result.hubMakeOutcomeBet!.result!.bet!;
      gameStore.addBet({
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
      });
      return result.hubMakeOutcomeBet?.result;
    }
    default: {
      const _exhaustiveCheck: never = __typename;
      throw new Error(`Unhandled result type: ${_exhaustiveCheck}`);
    }
  }
}
