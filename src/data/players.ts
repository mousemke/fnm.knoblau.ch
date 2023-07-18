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
    events: [
      "2023-05-05-FNM-with-Style",
      "2023-07-14-FNM-with-Style"
    ],
    decks: [
      "2023-05-05-Scam-Sadie-Braun",
      "2023-07-14-Scam-Sadie-Braun"
    ]
  },
  "Sean-Hamilton": {
    name: "Sean Hamilton",
    slug: "Sean-Hamilton",
    isTeamCFM: true,
    events: [
      "2023-05-05-FNM-with-Style",
      "2023-07-14-FNM-with-Style"
    ],
    decks: [
      "2023-05-05-Rhinos-Sean-Hamilton",
      "2023-07-14-Rhinos-Sean-Hamilton"
    ]
  },
  "Golo-Stillger": {
    name: "Golo Stillger",
    slug: "Golo-Stillger",
    isTeamCFM: false,
    events: ["2023-05-05-FNM-with-Style"],
    decks: ["2023-05-05-Gruul-Shamans-Golo-Stillger"]
  },
  "David-Amadu": {
    name: "David Amadu",
    slug: "David-Amadu",
    isTeamCFM: true,
    events: ["2023-05-05-FNM-with-Style"],
    decks: ["2023-05-05-Grixis-Midrange-David-Amadu"]
  },
  "Alex-Humphreys": {
    name: "Alex Humphreys",
    slug: "Alex-Humphreys",
    isTeamCFM: true,
    events: ["2023-07-14-FNM-with-Style"],
    decks: ["2023-07-14-Esper-Blink-Alex-Humphreys"]
  },
  "Magda-Szymaniec": {
    name: "Magda Szymaniec",
    slug: "Magda-Szymaniec",
    isTeamCFM: true,
    events: ["2023-07-14-FNM-with-Style"],
    decks: ["2023-07-14-Angels-Magda-Szymaniec"]
  },
  "Anthony-Hernandez": {
    name: "Anthony Hernandez",
    slug: "Anthony-Hernandez",
    isTeamCFM: true,
    events: ["2023-07-14-FNM-with-Style"],
    decks: ["2023-07-14-Living-End-Anthony-Hernandez"]
  },
  "Aubrey-Browne": {
    name: "Aubrey Browne",
    slug: "Aubrey-Browne",
    isTeamCFM: false,
    events: ["2023-07-14-FNM-with-Style"],
    decks: ["2023-07-14-Green-Tron-Aubrey-Browne"]
  }
};
