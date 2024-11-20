import { GraphQLClient, RequestOptions, Variables } from "graphql-request";
import { Store } from "./Store";
import { gql } from "./__generated__";
import { runInAction } from "mobx";

// This module contains our GraphQL documents and operations to talk to the @moneypot/caas GraphQL API.

export const AUTHENTICATE = gql(/* GraphQL */ `
  mutation Authenticate($casinoBaseUrl: String!, $userToken: String!) {
    caasAuthenticate(
      input: { casinoBaseUrl: $casinoBaseUrl, userToken: $userToken }
    ) {
      success {
        sessionId
        uname
        experienceId
        userId
      }
      query {
        caasCurrentUser {
          balances {
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
`);

export const GET_BALANCES = gql(/* GraphQL */ `
  query GetBalances {
    caasCurrentUser {
      balances {
        amount
        currencyKey
        caasCurrencyByCurrencyKeyAndCasinoId {
          key
          displayUnitScale
          displayUnitName
        }
      }
    }
  }
`);

export const WITHDRAW = gql(/* GraphQL */ `
  mutation Withdraw($amount: Float!, $currencyKey: String!) {
    caasWithdraw(input: { amount: $amount, currency: $currencyKey }) {
      withdrawal {
        id
      }
    }
  }
`);

export async function sendGraphQLRequest<T, V extends Variables = Variables>(
  store: Store,
  options: RequestOptions<V, T> & { sessionId?: string }
): Promise<T> {
  const headers: HeadersInit = {};

  const sessionId = store.loggedIn?.sessionId ?? options.sessionId;

  if (sessionId) {
    headers.Authorization = `session:${sessionId}`;
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
      const balances = (result.caasCurrentUser?.balances ?? [])
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
