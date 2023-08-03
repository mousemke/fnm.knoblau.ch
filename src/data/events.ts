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
  "2023-05-05-FNM-with-Style": {
    finished: true,
    format: "modern",
    slug: "2023-05-05-FNM-with-Style",
    name: "FNM with Style",
    venue: "Cafe Style",
    venueSlug: "Cafe-Style",
    date: "2023-05-05",
    players: {
      "Sadie-Braun": "2023-05-05-Scam-Sadie-Braun",
      "Sean-Hamilton": "2023-05-05-Rhinos-Sean-Hamilton",
      "Golo-Stillger": "2023-05-05-Gruul-Shamans-Golo-Stillger",
      "David-Amadu": "2023-05-05-Grixis-Midrange-David-Amadu"
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
  "2023-07-14-FNM-with-Style": {
    finished: true,
    format: "modern",
    slug: "2023-07-14-FNM-with-Style",
    name: "FNM with Style",
    venue: "Cafe Style",
    venueSlug: "Cafe-Style",
    date: "2023-07-14",
    players: {
      "Sadie-Braun": "2023-07-14-Scam-Sadie-Braun",
      "Sean-Hamilton": "2023-07-14-Rhinos-Sean-Hamilton",
      "Alex-Humphreys": "2023-07-14-Esper-Blink-Alex-Humphreys",
      "Magda-Szymaniec": "2023-07-14-Angels-Magda-Szymaniec",
      "Anthony-Hernandez": "2023-07-14-Living-End-Anthony-Hernandez",
      "Aubrey-Browne": "2023-07-14-Green-Tron-Aubrey-Browne"
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
  },
  "2023-08-11-FNM-with-Style": {
    finished: false,
    format: "modern",
    slug: "2023-08-11-FNM-with-Style",
    name: "FNM with Style",
    venue: "Cafe Style",
    venueSlug: "Cafe-Style",
    date: "2023-08-11",
    players: {
    },
    final: [
    ],
    rounds: [
    ]
  }
};
