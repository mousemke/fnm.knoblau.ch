export { decks } from "./decks";
export { players } from "./players";
export { events } from "./events";

import type { Deck, Decks } from "./decks";
import type { Player, Players } from "./players";
import type { EventObject, Events } from "./events";

export type { DateString, EventId, DeckId } from "./index.types";

export type { Deck, Decks, Player, Players, EventObject, Events };

export interface Data {
  decks: Decks;
  events: Events;
  players: Players;
}
