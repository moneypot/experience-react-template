import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import {
  HubBalance,
  HubCurrency,
  HubExperience,
  HubSession,
  HubUser,
} from "../__generated__/graphql";

export class Store {
  loggedIn: LoggedIn | null = null;

  constructor() {
    makeAutoObservable(this);
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
}

interface LoggedIn {
  // Session info
  sessionKey: HubSession["key"];
  experienceId: HubExperience["id"];
  userId: HubUser["id"];
  uname: HubUser["uname"];

  // User info
  balances: {
    amount: HubBalance["amount"];
    currencyKey: HubCurrency["key"];
    displayUnitName: HubCurrency["displayUnitName"];
    displayUnitScale: HubCurrency["displayUnitScale"];
  }[];

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
