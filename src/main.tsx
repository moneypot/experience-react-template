import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Store, StoreProvider } from "./Store.tsx";

// Tell parent to set our iframe height to some amount larger
// than our content height to avoid scrollbars.
window.parent.postMessage({ type: "setHeight", px: 1500 }, "*");

const store = new Store();

createRoot(document.getElementById("root")!).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
