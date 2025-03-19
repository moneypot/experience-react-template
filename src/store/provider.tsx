import { observer } from "mobx-react-lite";
import { Store, StoreContext } from "./model";

// This file only exports the StoreProvider component to comply with Fast Refresh
export const StoreProvider = observer(
  ({ store, children }: { store: Store; children: React.ReactNode }) => {
    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
  }
);
