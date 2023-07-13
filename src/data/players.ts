import type { DeckId, EventId } from "./index.types";

export interface Player {
  isTeamCFM: boolean;
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
    isTeamCFM: true,
    events: ["05-05-2023-FNM-with-Style"],
    decks: ["05-05-2023-Scam-Sadie-Braun"]
  },
  "Sean-Hamilton": {
    name: "Sean Hamilton",
    slug: "Sean-Hamilton",
    isTeamCFM: true,
    events: ["05-05-2023-FNM-with-Style"],
    decks: ["05-05-2023-Rhinos-Sean-Hamilton"]
  },
  "Golo-Stillger": {
    name: "Golo Stillger",
    slug: "Golo-Stillger",
    isTeamCFM: false,
    events: ["05-05-2023-FNM-with-Style"],
    decks: ["05-05-2023-Gruul-Shamans-Golo-Stillger"]
  },
  "David-Amadu": {
    name: "David Amadu",
    slug: "David-Amadu",
    isTeamCFM: true,
    events: ["05-05-2023-FNM-with-Style"],
    decks: ["05-05-2023-Grixis-Midrange-David-Amadu"]
  }
};
