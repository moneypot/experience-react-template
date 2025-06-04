import { useState, useEffect } from "react";
import { Store } from "./store";
import { AUTHENTICATE, sendGraphQLRequest } from "./graphql";
import { runInAction } from "mobx";
import {
  formatError,
  getCasinoBaseUrl,
  postMessageToParent,
} from "@moneypot/frontend-utils";

type AuthState =
  | { status: "loading" }
  | { status: "error"; error: string }
  | { status: "success" };

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
            features: [
              // If we opt in to this feature flag, we MUST post putSuccess events
              // to the parent window when our hub server broadcasts successful puts.
              "putSuccess",
            ],
          });
        },
        (e) => {
          console.error("Authentication failed", e);
          setState({
            status: "error",
            error: formatError(e) || "Unknown error",
          });
          postMessageToParent({
            type: "status",
            status: "fatal",
          });
        }
      );
  }, [store]); // Only run once on mount

  return state;
};
