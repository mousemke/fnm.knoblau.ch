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
      "2023-07-14-FNM-with-Style",
      "2023-11-17-FNM-with-Style",
      "2023-12-15-FNM-with-Style"
    ],
    decks: [
      "2023-05-05-Scam-Sadie-Braun",
      "2023-07-14-Scam-Sadie-Braun",
      "2023-11-17-Scam-Sadie-Braun",
      "2023-12-15-Scam-Sadie-Braun"
    ]
  },
  "Kaia-Hamilton": {
    name: "Kaia Hamilton",
    slug: "Kaia-Hamilton",
    isTeamCFM: true,
    events: [
      "2023-05-05-FNM-with-Style",
      "2023-07-14-FNM-with-Style",
      "2023-11-17-FNM-with-Style",
      "2023-12-15-FNM-with-Style"
    ],
    decks: [
      "2023-05-05-4c-Rhinos-Kaia-Hamilton",
      "2023-07-14-4c-Rhinos-Kaia-Hamilton",
      "2023-11-17-Golgari-Yawgmoth-Kaia-Hamilton",
      "2023-12-15-Golgari-Yawgmoth-Kaia-Hamilton"
    ]
  },
  "Golo-Stillger": {
    name: "Golo Stillger",
    slug: "Golo-Stillger",
    isTeamCFM: true,
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
    events: [
      "2023-07-14-FNM-with-Style",
      "2023-12-15-FNM-with-Style"
    ],
    decks: [
      "2023-07-14-Esper-Blink-Alex-Humphreys",
      "2023-12-15-Time-Travel-Eldrazi-Alex-Humphreys"
    ]
  },
  "Magda-Szymaniec": {
    name: "Magda Szymaniec",
    slug: "Magda-Szymaniec",
    isTeamCFM: true,
    events: ["2023-07-14-FNM-with-Style"],
    decks: ["2023-07-14-Mono-W-Angels-Magda-Szymaniec"]
  },
  "Anthony-Hernandez": {
    name: "Anthony Hernandez",
    slug: "Anthony-Hernandez",
    isTeamCFM: false,
    events: ["2023-07-14-FNM-with-Style"],
    decks: ["2023-07-14-Living-End-Anthony-Hernandez"]
  },
  "Aubrey-Browne": {
    name: "Aubrey Browne",
    slug: "Aubrey-Browne",
    isTeamCFM: false,
    events: ["2023-07-14-FNM-with-Style"],
    decks: ["2023-07-14-Mono-G-Tron-Aubrey-Browne"]
  },
  "Hanna-Neubauer": {
    name: "Hanna Neubauer",
    slug: "Hanna-Neubauer",
    isTeamCFM: true,
    events: [
      "2023-11-17-FNM-with-Style",
      "2023-12-15-FNM-with-Style"
    ],
    decks: [
      "2023-11-17-Jeskai-Boomshine-Hanna-Neubauer",
      "2023-12-15-Jeskai-Boomshine-Hanna-Neubauer"
    ]
  },
  "Maximilian-Sache": {
    name: "Maximilian Sache",
    slug: "Maximilian-Sache",
    isTeamCFM: true,
    events: ["2023-11-17-FNM-with-Style"],
    decks: ["2023-11-17-Mono-W-Hammer-Maximilian-Sache"]
  }
};
