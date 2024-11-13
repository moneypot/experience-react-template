import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";

export class Store {
  loggedIn: LoggedIn | null = null;

  constructor() {
    makeAutoObservable(this);
  }
}

interface LoggedIn {
  // Session info

  sessionId: string;
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

const StoreContext = createContext<Store | null>(null);

export const StoreProvider = ({
  store,
  children,
}: {
  store: Store;
  children: React.ReactNode;
}) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return store;
};
