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
  result: `${number}-${number}-${number}`;
}
export interface EventObject {
  finished: boolean;
  format: string;
  slug: string;
  name: string;
  venue: string;
  venueSlug: string;
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
    finished: true,
    format: "modern",
    slug: "05-05-2023-FNM-with-Style",
    name: "FNM with Style",
    venue: "Cafe Style",
    venueSlug: "Cafe-Style",
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
        result: "2-1-0"
      },
      {
        slug: "David-Amadu",
        result: "2-1-0"
      },
      {
        slug: "Golo-Stillger",
        result: "2-1-0"
      },
      {
        slug: "Sadie-Braun",
        result: "0-3-0"
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
  },
  "14-07-2023-FNM-with-Style": {
    finished: true,
    format: "modern",
    slug: "14-07-2023-FNM-with-Style",
    name: "FNM with Style",
    venue: "Cafe Style",
    venueSlug: "Cafe-Style",
    date: "14-07-2023",
    players: {
      "Sadie-Braun": "14-07-2023-Scam-Sadie-Braun",
      "Sean-Hamilton": "14-07-2023-Rhinos-Sean-Hamilton",
      "Alex-Humphreys": "14-07-2023-Esper-Blink-Alex-Humphreys",
      "Magda-Szymaniec": "14-07-2023-Angels-Magda-Szymaniec",
      "Anthony-Hernandez": "14-07-2023-Living-End-Anthony-Hernandez",
      "Aubrey-Browne": "14-07-2023-Green-Tron-Aubrey-Browne"
    },
    final: [
      {
        slug: "Aubrey-Browne",
        result: "2-0-1",
      },
      {
        slug: "Sadie-Braun",
        result: "2-1-0",
      },
      {
        slug: "Alex-Humphreys",
        result: "2-1-0",
      },
      {
        slug: "Sean-Hamilton",
        result: "2-1-0",
      },
      {
        slug: "Magda-Szymaniec",
        result: "0-2-1",
      },
      {
        slug: "Anthony-Hernandez",
        result: "0-3-0",
      },
    ],
    rounds: [
      {
        results: [
          {
            "Sean-Hamilton": 0,
            "Alex-Humphreys": 2
          },
          {
            "Magda-Szymaniec": 1,
            "Aubrey-Browne": 1
          },
          {
            "Sadie-Braun": 2,
            "Anthony-Hernandez": 1
          }
        ]
      },
      {
        results: [
          {
            "Anthony-Hernandez": 1,
            "Aubrey-Browne": 2
          },
          {
            "Alex-Humphreys": 1,
            "Sadie-Braun": 2
          },
          {
            "Sean-Hamilton": 2,
            "Magda-Szymaniec": 0
          }
        ]
      },
      {
        results: [
          {
            "Alex-Humphreys": 2,
            "Magda-Szymaniec": 0
          },
          {
            "Sean-Hamilton": 2,
            "Anthony-Hernandez": 1
          },
          {
            "Sadie-Braun": 0,
            "Aubrey-Browne": 2
          }
        ]
      }
    ]
  }
};
