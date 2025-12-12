# Experience Frontend Template

A starting point for building casino games on MoneyPot. Uses `@moneypot/experience-react-sdk` to handle platform integration so you can focus on game UI and bet logic.

Two example games (Dice and Slots) are included for reference. Delete one and modify the other, or start fresh.

## Quick Start

```bash
pnpm install
cp .env.template .env
pnpm dev
```

Type checking: `pnpm check`

## Project Structure

```
src/
├── main.tsx              # App bootstrap, providers, routing
├── App.tsx               # Main layout with game components
├── GameStore.ts          # MobX store for game-specific state
├── sound.tsx             # Sound effects
├── components/           # Shared UI components
├── game-dice/            # Example game
│   ├── BetBox.tsx        # Bet form UI
│   ├── GameBox.tsx       # Game result display
│   └── make-coinflip-bet.ts
├── game-slots/           # Example game
│   ├── BetBox.tsx
│   ├── GameBox.tsx
│   └── make-slots-bet.ts
└── __generated__/        # GraphQL codegen (don't edit)
```

## Creating a Game

Create a `src/game-{name}/` folder with three files:

1. **BetBox.tsx** - Bet form UI
2. **GameBox.tsx** - Game display and results
3. **make-{name}-bet.ts** - Bet logic using `baseStore.makeOutcomeBet()`

Then add your bet result type to `GameStore.ts` and render the components in `App.tsx`.

### Outcome Bets

Define weighted outcomes for probability-based games:

```typescript
const result = await gameStore.baseStore.makeOutcomeBet({
  wager: 1000, // base units (not display units!)
  currency: "HOUSE",
  kind: OutcomeBetKind.General,
  outcomes: [
    { weight: 1, profit: 0.98 }, // 50% chance, profit 98% of wager
    { weight: 1, profit: -1 }, // 50% chance, lose wager
  ],
});
// result.outcomeIdx tells you which outcome was selected
```

### Currency Handling

The hub API uses **base units** (integers). Convert for display:

```typescript
// Display → base (before betting)
const baseWager = Math.floor(displayWager * currency.displayUnitScale);

// Base → display (for UI)
import { formatCurrency } from "@moneypot/frontend-utils";
formatCurrency(baseAmount, currency);
```

## Tech Stack

React 19, Vite 7, MobX, React Bootstrap (dark theme), TanStack Router + Query, react-hook-form + Zod, GraphQL

## SDK Reference

The SDK (`@moneypot/experience-react-sdk`) handles:

- **Authentication** - `useAuthenticate()` extracts userToken from URL hash
- **Subscriptions** - `useSubscription()` maintains WebSocket for balance updates
- **Betting** - `baseStore.makeOutcomeBet()` handles hash chains, retries, GraphQL

**BaseStore** (SDK): Logged-in state, balances, selected currency, hash chain. Access via `gameStore.baseStore`.

**GameStore** (yours): Extends BaseStore with game-specific state like bet history.

## Notes

**Sounds:** Add MP3s to `public/sounds/`, register in `src/sound.tsx`, use `useSoundPlayer()` hook.

**Environment:** `VITE_GRAPHQL_URL` sets the hub endpoint (default: `https://hub1.moneypot.com/graphql`).

**Source code reference:** If you need more context, you are welcome to git clone any relevant libraries like `@moneypot/experience-react-sdk` into `./references/` for local reference.
