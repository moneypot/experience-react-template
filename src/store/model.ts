import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";

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
  sessionKey: string;
  experienceId: string;
  userId: string;
  uname: string;

  // User info
  balances: {
    amount: number;
    currencyKey: string;
    displayUnitName: string;
    displayUnitScale: number;
  }[];

  // UI
  // It's often useful to globaly track which currency the user wants to use
  selectedCurrencyKey: null | string;
}

export const StoreContext = createContext<Store | null>(null);

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return store;
};
