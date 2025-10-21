import { BaseStore } from "@moneypot/experience-react-sdk/store";
import { makeAutoObservable, observable } from "mobx";
import { createContext, useContext } from "react";

// /src/GameStore.ts
export type DiceBetResult = {
  id: string;
  wager: number;
  profit: number;
  currency: {
    key: string;
    displayUnitName: string;
    displayUnitScale: number;
  };
};

export type SlotsBetResult = {
  id: string;
  wager: number;
  profit: number;
  currency: {
    key: string;
    displayUnitName: string;
    displayUnitScale: number;
  };
  symbols: [string, string, string];
};

export class GameStore {
  // Hold the SDK's internal BaseStore for easy access
  baseStore: BaseStore;

  soundEnabled = true;

  // We can track additional state custom to our game here
  diceBets: DiceBetResult[] = [];
  slotsBets: SlotsBetResult[] = [];

  constructor({ baseStore }: { baseStore: BaseStore }) {
    this.baseStore = baseStore;
    makeAutoObservable(
      this,
      {
        // don't wrap baseStore in mobx proxy; only track when reference changes
        baseStore: observable.ref,
      },
      {
        // lets us do stuff like `onClick={store.someMethod}` without
        // having to do `onClick={() => store.someMethod()}` or `onClick={store.someMethod.bind(store)}`
        autoBind: true,
      }
    );
  }

  // REACTIVE GETTERS

  get latestDiceBet() {
    return this.diceBets[0];
  }

  get latestSlotsBet() {
    return this.slotsBets[0];
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

  // ACTIONS - These are implicitly run inside mobx's runInAction due to makeAutoObservable

  setSoundEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
  }

  addDiceBet(bet: DiceBetResult) {
    this.diceBets.unshift(bet);
    // Ensure we only keep the last N bets
    this.diceBets.splice(20);
  }

  addSlotsBet(bet: SlotsBetResult) {
    this.slotsBets.unshift(bet);
    // Ensure we only keep the last N bets
    this.slotsBets.splice(20);
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
