// Here's an example of how to make a bet

import { gql } from "../__generated__";
import { BetKind, HubOutcomeInput } from "../__generated__/graphql";
import { sendGraphQLRequest } from "../graphql";
import { Store } from "../store";
import { createHashChain } from "./hash-chain";

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

export default async function makeCoinflipBet(
  store: Store,
  input: BetInput,
  retryOnBadHashChain: boolean = true
) {
  if (input.hashChainId === null) {
    const hashChainId = await createHashChain(store);
    return makeCoinflipBet(store, {
      ...input,
      hashChainId,
    });
  }

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

  const result = await sendGraphQLRequest(store, {
    document: MAKE_COINFLIP_BET,
    variables: {
      input: {
        kind: BetKind.Coinflip,
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
      if (!retryOnBadHashChain) {
        throw new Error("Bad hash chain");
      }

      const hashChainId = await createHashChain(store);
      return makeCoinflipBet(
        store,
        {
          ...input,
          hashChainId,
        },
        false
      );
    }
    case "HubMakeOutcomeBetSuccess": {
      const bet = result.hubMakeOutcomeBet!.result!.bet!;
      store.addBet({
        id: bet.id,
        coinSide: bet.profit > 0 ? "heads" : "tails",
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
