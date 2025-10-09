import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BaseStore } from "@moneypot/experience-react-sdk/store";
import { GameStore, GameStoreProvider } from "./GameStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// BaseStore is managed by @moneypot/experience-react-sdk and holds common data
// like loggedIn state, player balances, and the active hash chain
const baseStore = new BaseStore();

// GameStore is managed by us; it's where we keep our own state
const gameStore = new GameStore({ baseStore });

const queryClient = new QueryClient();

// Render the app
createRoot(document.getElementById("root")!).render(
  <GameStoreProvider value={gameStore}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </GameStoreProvider>
);
