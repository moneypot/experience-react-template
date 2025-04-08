import { useCallback, useEffect } from "react";
import { Store } from "./store";
import { createClient } from "graphql-ws";
import { fetchAndUpdateBalances } from "./graphql";

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

export const useSubscription = (store: Store) => {
  const handleBalanceChangeAlert = useCallback(() => {
    fetchAndUpdateBalances(store);
  }, [store]);

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

    const dispose = client.subscribe(
      {
        query: `
          subscription BalanceChangeAlert {
            hubBalanceAlert {
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
    store.loggedIn?.sessionKey,
    // Must be stable
    handleBalanceChangeAlert,
  ]);
};
