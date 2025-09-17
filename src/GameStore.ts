import { BaseStore } from "@moneypot/experience-react-sdk/store";
import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";

export type BetResult = {
  id: string;
  wager: number;
  profit: number;
  currency: {
    key: string;
    displayUnitName: string;
    displayUnitScale: number;
  };
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
    return this.bets[this.bets.length - 1];
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
    // Ensure there are only 10 bets max
    if (this.bets.length >= 10) {
      this.bets.shift();
    }
    this.bets.push(bet);
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
