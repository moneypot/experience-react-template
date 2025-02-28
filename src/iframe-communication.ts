import { z } from "zod";
import { Store } from "./Store";
import { ThemePreference } from "./theme";

// This module organizes code that deals with communication with the parent window over
// the postMessage API.
//
// Incoming messages:
//
// - { type: "setTheme", theme: "light" | "dark" | "auto" }
//
//   The user has changed their color theme preference.
//   If your game only supports one theme, you can ignore this message.
//
// Outgoing messages:
//
// - { type: "setHeight", px: number }
//
//   Tell the parent window how tall our <iframe> should be to prevent scrolling.

// ===== INCOMING MESSAGES (from parent to iframe) =====

// Define schemas for incoming messages
export const SetThemeSchema = z.object({
  type: z.literal("setTheme"),
  theme: z.enum(["light", "dark", "auto"]),
});

// Union type of all supported incoming message schemas
export const IncomingMessageSchema = z.discriminatedUnion("type", [
  SetThemeSchema,
  // Add more message schemas here as needed
]);

// Type for all supported incoming messages
export type IncomingMessage = z.infer<typeof IncomingMessageSchema>;

// Incoming message handler map
export const incomingMessageHandlers = {
  setTheme: (store: Store, theme: ThemePreference) => {
    store.setThemePreference(theme);
  },
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
    case "setTheme": {
      incomingMessageHandlers.setTheme(store, message.theme);
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

// Union type of all supported outgoing message schemas
export const OutgoingMessageSchema = z.discriminatedUnion("type", [
  SetHeightSchema,
  // Add more message schemas here as needed
]);

// Type for all supported outgoing messages
export type OutgoingMessage = z.infer<typeof OutgoingMessageSchema>;

// Type-safe function to send messages to parent
export function postMessageToParent(message: OutgoingMessage): void {
  window.parent.postMessage(message, "*");
}
