import { useCallback, useEffect } from "react";
import { Store } from "./store";
import { createClient } from "graphql-ws";
import { fetchAndUpdateBalances } from "./graphql";
import { postMessageToParent } from "./iframe-communication";
import { gql } from "./__generated__";
import { print } from "graphql";
import {
  BalanceChangeAlertSubscription,
  PutAlertSubscription,
} from "./__generated__/graphql";

// Swap url protocol from http(s) to ws(s)
// Throws if url is not valid
function httpToWs(url: string): string {
  const parsedUrl = new URL(url);

  if (parsedUrl.protocol === "http:") {
    parsedUrl.protocol = "ws:";
  } else if (parsedUrl.protocol === "https:") {
    parsedUrl.protocol = "wss:";
  }

  return parsedUrl.toString();
}

const PUT_ALERT_SUBSCRIPTION = gql(/* GraphQL */ `
  subscription PutAlert {
    hubPutAlert {
      mpTransferId
    }
  }
`);

const BALANCE_CHANGE_ALERT_SUBSCRIPTION = gql(/* GraphQL */ `
  subscription BalanceChangeAlert {
    hubBalanceAlert {
      currencyKey
    }
  }
`);

export const useSubscription = (store: Store) => {
  const handleBalanceChangeAlert = useCallback(() => {
    fetchAndUpdateBalances(store);
  }, [store]);

  const handlePutSuccessAlert = useCallback((mpTransferId: string) => {
    postMessageToParent({
      type: "putSuccess",
      mpTransferId,
    });
  }, []);

  useEffect(() => {
    const sessionKey = store.loggedIn?.sessionKey;
    if (!sessionKey) {
      return;
    }
    const httpUrl = import.meta.env.VITE_GRAPHQL_URL;
    if (!httpUrl) {
      console.error("VITE_GRAPHQL_URL is not set");
      return;
    }

    let wsUrl: string;
    try {
      wsUrl = httpToWs(httpUrl);
    } catch (error) {
      console.error("Failed to convert HTTP URL to WS URL", error);
      return;
    }

    const client = createClient({
      url: wsUrl,
      connectionParams: {
        authorization: `session:${sessionKey}`,
      },
      retryAttempts: Infinity,
      shouldRetry: () => {
        // Without this, the client only retries on errors, not close events
        return true;
      },
      keepAlive: 12_000,
    });

    const disposePutAlert = client.subscribe<PutAlertSubscription>(
      {
        query: print(PUT_ALERT_SUBSCRIPTION),
      },
      {
        next: (thing) => {
          if (thing.data?.hubPutAlert?.mpTransferId) {
            handlePutSuccessAlert(thing.data.hubPutAlert.mpTransferId);
          }
        },
        error: (error) => {
          console.error("Error during WebSocket subscription:", error);
        },
        complete: () => {
          console.log("Subscription complete");
        },
      }
    );

    const disposeBalanceAlert =
      client.subscribe<BalanceChangeAlertSubscription>(
        {
          query: print(BALANCE_CHANGE_ALERT_SUBSCRIPTION),
        },
        {
          next: () => {
            handleBalanceChangeAlert();
          },
          error: (error) => {
            console.error("Error during WebSocket subscription:", error);
          },
          complete: () => {
            console.log("Subscription complete");
          },
        }
      );

    return () => {
      disposePutAlert();
      disposeBalanceAlert();
      client.dispose();
    };
  }, [
    // Very important to do a deep dependency since we only want websocket to connect
    // on initial sessionId=(undefined -> string) transition
    store.loggedIn?.sessionKey,
    // Must be stable
    handleBalanceChangeAlert,
  ]);
};
