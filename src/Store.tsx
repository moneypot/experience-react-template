import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import { createContext, useContext, useEffect, useState } from "react";

export type ThemePreference =
  | "light"
  | "dark"
  // determined by prefers-color-scheme
  | "auto";

export type Theme = "light" | "dark";

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

function getSystemIsDark(): boolean {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export const StoreProvider = observer(
  ({ store, children }: { store: Store; children: React.ReactNode }) => {
    // This ensures the component re-renders when system theme changes
    const [systemTheme, setSystemTheme] = useState<Theme>(
      getSystemIsDark() ? "dark" : "light"
    );

    const derivedTheme =
      store.themePreference === "auto" ? systemTheme : store.themePreference;

    useEffect(() => {
      // The theme is applied via <html data-bs-theme={"light" | "dark"}>
      document.documentElement.dataset.bsTheme = derivedTheme;

      // Listen for system theme changes
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      const handleThemeChange = (e: MediaQueryListEvent) => {
        setSystemTheme(e.matches ? "dark" : "light");
      };

      darkModeMediaQuery.addEventListener("change", handleThemeChange);
      return () => {
        darkModeMediaQuery.removeEventListener("change", handleThemeChange);
      };
    }, [derivedTheme, store.themePreference]);

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
