import type { DeckId, EventId } from "./index.types"

interface Player {
  events: EventId[];
  decks: DeckId[]
}

interface Players {
  [id: string]: Player;
}

export const players: Players = {
  "Sadie Braun": {
    events: [
      "05-05-2023-FNM-with-Style"
    ],
    decks: [

    ]
  },
  "Sean Hamilton": {
    events: [
      "05-05-2023-FNM-with-Style"
    ],
    decks: [
      "05-05-2023-Rhinos-Sean-Hamilton"
    ]
  },
  "Golo Stillger": {
    events: [
      "05-05-2023-FNM-with-Style"
    ],
    decks: [
      "05-05-2023-Gruul-Shamans-Golo-Stillger"
    ]
  },
  "David Amadu": {
    events: [
      "05-05-2023-FNM-with-Style"
    ],
    decks: [
      "05-05-2023-Grixis-Midrange-David-Amadu"
    ]
  }
};
