import { GraphQLClient, RequestOptions, Variables } from "graphql-request";
import { Store } from "./store";
import { gql } from "./__generated__";
import { runInAction } from "mobx";

// This module contains our GraphQL documents and operations to talk to the @moneypot/caas GraphQL API.

export const AUTHENTICATE = gql(/* GraphQL */ `
  mutation Authenticate($casinoBaseUrl: String!, $userToken: String!) {
    caasAuthenticate(
      input: { casinoBaseUrl: $casinoBaseUrl, userToken: $userToken }
    ) {
      success {
        sessionKey
        uname
        experienceId
        userId
      }
      query {
        caasCurrentUser {
          caasBalancesByUserId {
            nodes {
              amount
              currencyKey
              caasCurrencyByCurrencyKeyAndCasinoId {
                displayUnitName
                displayUnitScale
              }
            }
          }
        }
      }
    }
  }
`);

export const GET_BALANCES = gql(/* GraphQL */ `
  query GetBalances {
    caasCurrentUser {
      caasBalancesByUserId {
        nodes {
          amount
          currencyKey
          caasCurrencyByCurrencyKeyAndCasinoId {
            displayUnitName
            displayUnitScale
          }
        }
      }
    }
  }
`);

export async function sendGraphQLRequest<T, V extends Variables = Variables>(
  store: Store,
  options: RequestOptions<V, T> & { sessionKey?: string }
): Promise<T> {
  const headers: HeadersInit = {};

  const sessionKey = store.loggedIn?.sessionKey ?? options.sessionKey;

  if (sessionKey) {
    headers.Authorization = `session:${sessionKey}`;
  }

  const url = import.meta.env.VITE_GRAPHQL_URL;

  if (!url) {
    throw new Error("VITE_GRAPHQL_URL is not set");
  }

  // TODO: Configurable endpoint
  const client = new GraphQLClient(url, {
    headers,
  });

  return client.request(options);
}

export async function fetchAndUpdateBalances(store: Store) {
  if (!store.loggedIn) {
    return;
  }

  sendGraphQLRequest(store, {
    document: GET_BALANCES,
  })
    .then((result) => {
      const balances = (
        result.caasCurrentUser?.caasBalancesByUserId.nodes ?? []
      )
        .flatMap((x) => (x ? [x] : []))
        .map((x) => ({
          amount: x.amount,
          currencyKey: x.currencyKey,
          displayUnitName:
            x.caasCurrencyByCurrencyKeyAndCasinoId!.displayUnitName,
          displayUnitScale:
            x.caasCurrencyByCurrencyKeyAndCasinoId!.displayUnitScale,
        }));
      runInAction(() => {
        if (store.loggedIn) {
          store.loggedIn.balances = balances;
          // If no currency is selected, default to the first incoming balance
          store.loggedIn.selectedCurrencyKey =
            store.loggedIn.selectedCurrencyKey ?? balances[0]?.currencyKey;
        }
      });
    })
    .catch((e) => {
      console.error(`Error fetching user balances:`, e);
    });
}
