import { BaseStore } from "@moneypot/experience-react-sdk/store";
import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";

// /src/GameStore.ts
export type BetResult = {
  id: string;
  wager: number;
  profit: number;
  currency: {
    key: string;
    displayUnitName: string;
    displayUnitScale: number;
  };
  symbols?: [string, string, string]; // NEW
};

export class GameStore {
  // Hold the SDK's internal BaseStore for easy access
  baseStore: BaseStore;

  // We can track additional state custom to our game here
  bets: BetResult[] = [];

  constructor({ baseStore }: { baseStore: BaseStore }) {
    makeAutoObservable(this);
    this.baseStore = baseStore;
  }

  // REACTIVE GETTERS

  get latestBet() {
    return this.bets[0];
  }

  // forward to baseStore
  get loggedIn() {
    return this.baseStore.loggedIn;
  }

  // helper that reaches into baseStore to get the selected currency obj
  get selectedCurrency() {
    return this.baseStore.loggedIn?.balances.find(
      (balance) =>
        balance.currencyKey === this.baseStore.loggedIn?.selectedCurrencyKey
    );
  }

  // ACTIONS

  addBet(bet: BetResult) {
    this.bets.unshift(bet);
    // Ensure we only keep the last N bets
    this.bets.splice(20);
  }
}

const GameStoreContext = createContext<GameStore | null>(null);

export const GameStoreProvider = GameStoreContext.Provider;

export const useGameStore = () => {
  const gameStore = useContext(GameStoreContext);
  if (!gameStore) {
    throw new Error("GameStore not found");
  }
  return gameStore;
};
