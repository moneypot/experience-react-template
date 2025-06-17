import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import {
  HubBalance,
  HubCurrency,
  HubExperience,
  HubHashChain,
  HubOutcomeBet,
  HubSession,
  HubUser,
} from "../__generated__/graphql";

export class Store {
  loggedIn: LoggedIn | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  // REACTIVE GETTERS

  get latestBet(): BetResult | null {
    return this.loggedIn?.bets[0] ?? null;
  }

  // MOBX ACTIONS
  //
  // When you use these, you don't need to use runInAction because
  // `makeAutoObservable` wraps these in `runInAction` for us.

  setSelectedCurrencyKey(currencyKey: string) {
    if (this.loggedIn) {
      this.loggedIn.selectedCurrencyKey = currencyKey;
    }
  }

  setActiveHashChainId(hashChainId: string) {
    if (this.loggedIn) {
      this.loggedIn.activeHashChainId = hashChainId;
    }
  }

  setClientSeed(clientSeed: string) {
    if (this.loggedIn) {
      this.loggedIn.clientSeed = clientSeed;
    }
  }

  // Only keep the latest 25 bets
  addBet(bet: BetResult) {
    if (this.loggedIn) {
      const newBets = [bet, ...this.loggedIn.bets].slice(0, 25);
      this.loggedIn.bets = newBets;
    }
  }
}

type StoreBalance = {
  amount: HubBalance["amount"];
  currencyKey: HubCurrency["key"];
  displayUnitName: HubCurrency["displayUnitName"];
  displayUnitScale: HubCurrency["displayUnitScale"];
};

export type BetResult = {
  id: HubOutcomeBet["id"];
  coinSide: "heads" | "tails";
  wager: HubOutcomeBet["wager"];
  profit: HubOutcomeBet["profit"];
  currency: Pick<HubCurrency, "key" | "displayUnitName" | "displayUnitScale">;
};

interface LoggedIn {
  // Session info
  sessionKey: HubSession["key"];
  experienceId: HubExperience["id"];
  userId: HubUser["id"];
  uname: HubUser["uname"];

  // User info
  balances: StoreBalance[];

  // Provably fair
  activeHashChainId: HubHashChain["id"] | null;
  clientSeed: string;

  // Show the last bet in the UI
  bets: BetResult[];

  // UI
  // It's often useful to globaly track which currency the user wants to use
  selectedCurrencyKey: null | HubCurrency["key"];
}

export const StoreContext = createContext<Store | null>(null);

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return store;
};
