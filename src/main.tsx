import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Store, StoreProvider } from "./store";
import { handleIncomingMessage } from "./iframe-communication";

const store = new Store();

window.addEventListener("message", (event) => {
  handleIncomingMessage(store, event);
});

// Render the app
createRoot(document.getElementById("root")!).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
