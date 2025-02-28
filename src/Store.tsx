import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import { createContext, useContext } from "react";
import { ThemePreference, useTheme } from "./theme";

export class Store {
  loggedIn: LoggedIn | null = null;

  themePreference: ThemePreference = "auto";

  constructor() {
    makeAutoObservable(this);

    // Initialize theme preference from localStorage
    if (typeof window !== "undefined") {
      const savedPreference = localStorage.getItem("theme_preference");
      if (
        savedPreference === "light" ||
        savedPreference === "dark" ||
        savedPreference === "auto"
      ) {
        this.themePreference = savedPreference;
      }
    }
  }

  setThemePreference(preference: ThemePreference) {
    this.themePreference = preference;
    localStorage.setItem("theme_preference", preference);
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

export const StoreProvider = observer(
  ({ store, children }: { store: Store; children: React.ReactNode }) => {
    useTheme(store.themePreference);

    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
  }
);

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return store;
};
