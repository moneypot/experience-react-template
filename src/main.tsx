import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BaseStore } from "@moneypot/experience-react-sdk/store";
import { GameStore, GameStoreProvider } from "./GameStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
  useNavigate,
  useParams,
} from "@tanstack/react-router";
import {
  HashChainModal,
  ProvablyFairModal,
} from "@moneypot/experience-react-sdk/component";
import { observer } from "mobx-react-lite";
import { NotFoundModal } from "./components/NotFoundModal";
import { SoundPlayerProvider } from "./sound.tsx";

// BaseStore is managed by @moneypot/experience-react-sdk and holds common data
// like loggedIn state, player balances, and the active hash chain
const baseStore = new BaseStore({
  // We must enumerate the kinds of bets (as defined by the hub server) that we will bet against
  // hub1.moneypot.com offers the "GENERAL" bet that will take any bet as long as
  // the outcomes favor the house. We'll submit GENERAL bets in this template.
  gameKinds: ["GENERAL"],
});

// GameStore is managed by us; it's where we keep our own state
const gameStore = new GameStore({ baseStore });

// @tanstack/react-query needs a QueryClient instance
const queryClient = new QueryClient();

// Routing

const rootRoute = createRootRoute({
  component: App,
  notFoundComponent: NotFoundModal,
});

const indexRoute = createRoute({
  path: "/",
  getParentRoute: () => rootRoute,
  component: () => null,
});

const provablyFairRoute = createRoute({
  path: "/provably-fair",
  getParentRoute: () => rootRoute,
  component: observer(() => {
    const navigate = useNavigate();
    return (
      <ProvablyFairModal
        baseStore={gameStore.baseStore}
        onClose={() => navigate({ to: "/" })}
        onViewHashChain={(id) =>
          navigate({ to: `/provably-fair/chains/${id}` })
        }
      />
    );
  }),
});

const hashChainRoute = createRoute({
  path: "/provably-fair/chains/$hashChainId",
  getParentRoute: () => rootRoute,
  component: observer(() => {
    const { hashChainId } = useParams({ strict: false });
    const navigate = useNavigate();
    return (
      <HashChainModal
        baseStore={gameStore.baseStore}
        hashChainId={hashChainId}
        onClose={() => navigate({ to: "/" })}
      />
    );
  }),
});

const router = createRouter({
  routeTree: rootRoute.addChildren([
    indexRoute,
    provablyFairRoute,
    hashChainRoute,
  ]),
});

createRoot(document.getElementById("root")!).render(
  <GameStoreProvider value={gameStore}>
    <QueryClientProvider client={queryClient}>
      <SoundPlayerProvider>
        <RouterProvider router={router} />
      </SoundPlayerProvider>
    </QueryClientProvider>
  </GameStoreProvider>,
);
