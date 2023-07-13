import type { DeckId, EventId } from "./index.types";

interface EventResult {
  [name: string]: number;
}

interface EventRound {
  results: EventResult[];
  notes?: string;
}

interface FinalRecord {
  slug: string;
  result: `${number}-${number}`;
}
export interface EventObject {
  format: string;
  slug: string;
  name: string;
  location: string;
  date: string;
  players: {
    [name: string]: DeckId;
  };
  final: FinalRecord[];
  rounds: EventRound[];
}

export interface Events {
  [date: EventId]: EventObject;
}

export const events: Events = {
  "05-05-2023-FNM-with-Style": {
    format: "modern",
    slug: "05-05-2023-FNM-with-Style",
    name: "FNM with Style",
    location: "Cafe Style",
    date: "05-05-2023",
    players: {
      "Sadie-Braun": "05-05-2023-Scam-Sadie-Braun",
      "Sean-Hamilton": "05-05-2023-Rhinos-Sean-Hamilton",
      "Golo-Stillger": "05-05-2023-Gruul-Shamans-Golo-Stillger",
      "David-Amadu": "05-05-2023-Grixis-Midrange-David-Amadu"
    },
    final: [
      {
        slug: "Sean-Hamilton",
        result: "2-1"
      },
      {
        slug: "David-Amadu",
        result: "2-1"
      },
      {
        slug: "Golo-Stillger",
        result: "2-1"
      },
      {
        slug: "Sadie-Braun",
        result: "0-3"
      },
    ],
    rounds: [
      {
        results: [
          {
            "Sadie-Braun": 0,
            "Sean-Hamilton": 2
          },
          {
            "Golo-Stillger": 0,
            "David-Amadu": 2
          }
        ]
      },
      {
        results: [
          {
            "Golo-Stillger": 2,
            "Sadie-Braun": 1
          },
          {
            "Sean-Hamilton": 2,
            "David-Amadu": 1
          }
        ]
      },
      {
        results: [
          {
            "Golo-Stillger": 2,
            "Sean-Hamilton": 1
          },
          {
            "David-Amadu": 2,
            "Sadie-Braun": 1
          }
        ]
      }
    ]
  }
};
