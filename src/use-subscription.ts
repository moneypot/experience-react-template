import { useCallback, useEffect } from "react";
import { Store } from "./store";
import { createClient } from "graphql-ws";
import { fetchAndUpdateBalances } from "./graphql";

// Swap url protocol from http(s) to ws(s)
function httpToWs(url: string): string {
  const parsedUrl = new URL(url);

  if (parsedUrl.protocol === "http:") {
    parsedUrl.protocol = "ws:";
  } else if (parsedUrl.protocol === "https:") {
    parsedUrl.protocol = "wss:";
  }

  return parsedUrl.toString();
}

export const useSubscription = (store: Store) => {
  const handleBalanceChangeAlert = useCallback(() => {
    fetchAndUpdateBalances(store);
  }, [store]);

  useEffect(() => {
    if (!store.loggedIn?.sessionId) return;
    const httpUrl = import.meta.env.VITE_GRAPHQL_URL;
    if (!httpUrl) return;

    const client = createClient({
      url: httpToWs(httpUrl),
      connectionParams: {
        authorization: `session:${store.loggedIn.sessionId}`,
      },
    });

    const dispose = client.subscribe(
      {
        query: `
          subscription BalanceChangeAlert {
            caasBalanceAlert {
              currencyKey
            }
          }
        `,
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
      dispose();
      client.dispose();
    };
  }, [
    // Very important to do a deep dependency since we only want websocket to connect
    // on initial sessionId=(undefined -> string) transition
    store.loggedIn?.sessionId,
    // Must be stable
    handleBalanceChangeAlert,
  ]);
};
