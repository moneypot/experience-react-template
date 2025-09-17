import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BaseStore } from "@moneypot/experience-react-sdk/store";
import { GameStore, GameStoreProvider } from "./GameStore.ts";

const baseStore = new BaseStore();
const gameStore = new GameStore({ baseStore });

// Render the app
createRoot(document.getElementById("root")!).render(
  <GameStoreProvider value={gameStore}>
    <App />
  </GameStoreProvider>
);
