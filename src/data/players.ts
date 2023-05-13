import type { DeckId, EventId } from "./index.types";

export interface Player {
  name: string;
  slug: string;
  events: EventId[];
  decks: DeckId[];
}

export interface Players {
  [id: string]: Player;
}

export const players: Players = {
  "Sadie-Braun": {
    name: "Sadie Braun",
    slug: "Sadie-Braun",
    events: ["05-05-2023-FNM-with-Style"],
    decks: ["Scam!-Sadie-Braun"]
  },
  "Sean-Hamilton": {
    name: "Sean Hamilton",
    slug: "Sean-Hamilton",
    events: ["05-05-2023-FNM-with-Style"],
    decks: ["Rhinos-Sean-Hamilton"]
  },
  "Golo-Stillger": {
    name: "Golo Stillger",
    slug: "Golo-Stillger",
    events: ["05-05-2023-FNM-with-Style"],
    decks: ["Gruul-Shamans-Golo-Stillger"]
  },
  "David-Amadu": {
    name: "David Amadu",
    slug: "David-Amadu",
    events: ["05-05-2023-FNM-with-Style"],
    decks: ["Grixis-Midrange-David-Amadu"]
  }
};
