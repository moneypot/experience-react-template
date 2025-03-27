import { z } from "zod";
import { Store } from "./store";

// This module organizes code that deals with communication with the parent window over
// the postMessage API.
//
// Incoming messages:
//
// (The casino doesn't send any incoming messages yet, but here's boilerplate for when it does.)
//
// Outgoing messages:
//
// - { type: "setHeight", px: number }
//
//   Tell the parent window how tall our <iframe> should be to prevent scrolling.
//
// - { type: "playerBalances", balances: Record<string, number> }
//
//   Tell the parent window the player's balances and any time they change.
//
// - { type: "path", path: string }
//
//   Tell the parent window the current path of the iframe.
//   It will update #path={path} in the parent window such that if the user visits that
//   URL, path will get appended to our iframe URL.

// ===== INCOMING MESSAGES (from parent to iframe) =====

// Define schemas for incoming messages

// (The casino doesn't send any incoming messages yet, but here's boilerplate for when it does.)
export const DummySchema = z.object({
  type: z.literal("__dummy__"),
});

// Union type of all supported incoming message schemas
export const IncomingMessageSchema = z.discriminatedUnion("type", [
  DummySchema,
  // Add more message schemas here as needed
]);

// Type for all supported incoming messages
export type IncomingMessage = z.infer<typeof IncomingMessageSchema>;

// Incoming message handler map
export const incomingMessageHandlers: Record<
  IncomingMessage["type"],
  (store: Store, message: IncomingMessage) => void
> = {
  __dummy__: () => {},
};

export function handleIncomingMessage(store: Store, event: MessageEvent): void {
  const result = IncomingMessageSchema.safeParse(event.data);

  // If parsing fails, silently ignore the message
  if (!result.success) {
    console.debug("Ignoring unsupported incoming message:", event.data);
    return;
  }

  const message = result.data;

  // Handle the message based on its type
  switch (message.type) {
    case "__dummy__": {
      incomingMessageHandlers.__dummy__(store, message);
      break;
    }
  }
}

// ===== OUTGOING MESSAGES (from iframe to parent) =====

// Define schemas for outgoing messages
export const SetHeightSchema = z.object({
  type: z.literal("setHeight"),
  px: z.number(),
});

export const PlayerBalancesSchema = z.object({
  type: z.literal("playerBalances"),
  balances: z.record(z.string(), z.number()),
});

export const PathSchema = z.object({
  type: z.literal("path"),
  path: z.string(),
});

// Union type of all supported outgoing message schemas
export const OutgoingMessageSchema = z.discriminatedUnion("type", [
  SetHeightSchema,
  PlayerBalancesSchema,
  PathSchema,
]);

// Type for all supported outgoing messages
export type OutgoingMessage = z.infer<typeof OutgoingMessageSchema>;

// Type-safe function to send messages to parent
export function postMessageToParent(message: OutgoingMessage): void {
  window.parent.postMessage(message, "*");
}
