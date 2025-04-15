import { useState, useEffect } from "react";
import { Store } from "./store";
import { AUTHENTICATE, sendGraphQLRequest } from "./graphql";
import { runInAction } from "mobx";
import { formatError } from "./util";
import { postMessageToParent } from "./iframe-communication";

type AuthState =
  | { status: "loading" }
  | { status: "error"; error: string }
  | { status: "success" };

// Try getting parent window URL from different sources in order of preference
function getCasinoBaseUrl(): string | null {
  const possibleUrls = [
    // In dev mode, check #casinoBaseUrl=<url> from URL
    import.meta.env.DEV
      ? new URLSearchParams(window.location.hash.slice(1)).get("casinoBaseUrl")
      : null,

    // Check ancestor origins, not available in every browser
    document.location.ancestorOrigins?.[
      document.location.ancestorOrigins.length - 1
    ],

    // Check referrer if it's different from current origin
    document.referrer !== window.location.origin ? document.referrer : null,

    // In dev mode, check session storage
    import.meta.env.DEV ? sessionStorage.getItem("casinoBaseUrl") : null,
  ];

  const validUrl = possibleUrls.find((url) => url && URL.canParse(url));

  if (validUrl) {
    sessionStorage.setItem("casinoBaseUrl", validUrl);
    return new URL(validUrl).origin;
  }

  return null;
}

// Note: This runs once on initial mount. Doesn't do any retry logic.
// User will have to reload to try auth again.
export const useAuthenticate = (store: Store): AuthState => {
  const [state, setState] = useState<AuthState>({ status: "loading" });

  useEffect(() => {
    const authenticate = async () => {
      // Get #userToken from url
      const userToken = new URLSearchParams(window.location.hash.slice(1)).get(
        "userToken"
      );

      // Get baseCasinoUrl from iframe parent url or referrer
      const casinoBaseUrl = getCasinoBaseUrl();

      if (!userToken) {
        throw new Error("No userToken found in URL");
      }

      if (!casinoBaseUrl) {
        throw new Error("No baseCasinoUrl found in parent URL");
      }

      const result = await sendGraphQLRequest(store, {
        document: AUTHENTICATE,
        variables: {
          userToken,
          casinoBaseUrl,
        },
      });

      const success = result.hubAuthenticate?.success;
      const balances = (
        result.hubAuthenticate?.query?.hubCurrentUser?.hubBalancesByUserId
          ?.nodes ?? []
      )
        .flatMap((x) => (x ? [x] : []))
        .map((x) => ({
          amount: x.amount,
          currencyKey: x.currencyKey,
          displayUnitName:
            x.hubCurrencyByCurrencyKeyAndCasinoId!.displayUnitName,
          displayUnitScale:
            x.hubCurrencyByCurrencyKeyAndCasinoId!.displayUnitScale,
        }));
      if (success) {
        runInAction(() => {
          store.loggedIn = {
            sessionKey: success.sessionKey,
            experienceId: success.experienceId,
            userId: success.userId,
            uname: success.uname,
            selectedCurrencyKey: balances[0]?.currencyKey ?? null,
            balances,
          };
        });
        postMessageToParent({
          type: "playerBalances",
          balances: balances.reduce(
            (acc, b) => ({
              ...acc,
              [b.currencyKey]: b.amount,
            }),
            {}
          ),
        });
      } else {
        console.warn("Authentication failed due to empty response");
        throw new Error("Authentication failed");
      }
    };

    authenticate()
      // No matter what happens inside authenticate, we want to always post a 'status' message
      .then(
        () => {
          setState({ status: "success" });
          postMessageToParent({
            type: "status",
            status: "ready",
          });
        },
        (e) => {
          console.error("Authentication failed", e);
          setState({ status: "error", error: formatError(e) });
          postMessageToParent({
            type: "status",
            status: "fatal",
          });
        }
      );
  }, [store]); // Only run once on mount

  return state;
};
