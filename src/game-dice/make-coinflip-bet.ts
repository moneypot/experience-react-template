// Here's an example of how to make a bet using the SDK's makeOutcomeBet helper

import { BetKind, HubOutcomeInput } from "../__generated__/graphql";
import { GameStore } from "../GameStore";

export type BetInput = {
  wager: number;
  currency: string;
};

export function computeCoinflipOutcomes(houseEdge: number): HubOutcomeInput[] {
  const profitOnWin = (1 - houseEdge) / 0.5 - 1; // 0.98 when houseEdge = 0.01
  return [
    { weight: 1, profit: profitOnWin }, // heads = win
    { weight: 1, profit: -1 }, // tails = lose
  ];
}

export default async function makeCoinflipBet({
  gameStore,
  input,
  houseEdge,
}: {
  gameStore: GameStore;
  input: BetInput;
  houseEdge: number;
}) {
  // Generalize our game into a list of outcomes
  const outcomes = computeCoinflipOutcomes(houseEdge);

  // Use the SDK's makeOutcomeBet method which handles:
  // - Hash chain creation/retrieval
  // - Retry logic on bad hash chain
  // - GraphQL request
  // - Result extraction
  const result = await gameStore.baseStore.makeOutcomeBet({
    wager: input.wager,
    currency: input.currency,
    kind: BetKind.General,
    outcomes,
  });

  // Add the bet to the game store
  gameStore.addDiceBet(result);

  return result;
}
