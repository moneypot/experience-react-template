import { useState, useEffect } from "react";
import { Store } from "./Store";
import { AUTHENTICATE, sendGraphQLRequest } from "./graphql";
import { runInAction } from "mobx";
import { formatError } from "./util";

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
      try {
        // Get #userToken from url
        const userToken = new URLSearchParams(
          window.location.hash.slice(1)
        ).get("userToken");

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

        const success = result.caasAuthenticate?.success;
        const balances = (
          result.caasAuthenticate?.query?.caasCurrentUser?.balances ?? []
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
        if (success) {
          runInAction(() => {
            store.loggedIn = {
              sessionId: success.sessionId,
              experienceId: success.experienceId,
              userId: success.userId,
              uname: success.uname,
              selectedCurrencyKey: balances[0]?.currencyKey ?? null,
              balances,
            };
          });
          setState({ status: "success" });
        } else {
          throw new Error("Authentication failed due to empty response");
        }
      } catch (e) {
        setState({ status: "error", error: formatError(e) });
      }
    };

    authenticate();
  }, []); // Only run once on mount

  return state;
};
