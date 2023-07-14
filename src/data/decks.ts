import type { DeckId, EventId } from "./index.types";

interface CardInDeck {
  amount: number;
  name: string;
}

export interface Deck {
  archetype: string;
  event: EventId;
  format: string;
  main: CardInDeck[];
  pilotSlug: string;
  side: CardInDeck[];
  slug: string;
}

export interface Decks {
  [index: DeckId]: Deck;
}

export const decks: Decks = {
  "05-05-2023-Scam-Sadie-Braun": {
    format: "modern",
    slug: "05-05-2023-Scam-Sadie-Braun",
    pilotSlug: "Sadie-Braun",
    archetype: "Scam",
    event: "05-05-2023-FNM-with-Style",
    main: [
      {
        amount: 3,
        name: "Blackcleave Cliffs"
      },
      {
        amount: 2,
        name: "Blood Crypt"
      },
      {
        amount: 4,
        name: "Bloodstained Mire"
      },
      {
        amount: 1,
        name: "Castle Locthwain"
      },
      {
        amount: 4,
        name: "Marsh Flats"
      },
      {
        amount: 1,
        name: "Mountain"
      },
      {
        amount: 3,
        name: "Swamp"
      },
      {
        amount: 1,
        name: "Takenuma, Abandoned Mire"
      },
      {
        amount: 2,
        name: "Bloodtithe Harvester"
      },
      {
        amount: 3,
        name: "Dauthi Voidwalker"
      },
      {
        amount: 4,
        name: "Fury"
      },
      {
        amount: 4,
        name: "Grief"
      },
      {
        amount: 4,
        name: "Ragavan, Nimble Pilferer"
      },
      {
        amount: 4,
        name: "Seasoned Pyromancer"
      },
      {
        amount: 3,
        name: "Blood Moon"
      },
      {
        amount: 2,
        name: "Fable of the Mirror-Breaker"
      },
      {
        amount: 2,
        name: "Feign Death"
      },
      {
        amount: 3,
        name: "Lightning Bolt"
      },
      {
        amount: 1,
        name: "Sheoldred's Edict"
      },
      {
        amount: 2,
        name: "Terminate"
      },
      {
        amount: 4,
        name: "Undying Malice"
      },
      {
        amount: 3,
        name: "Thoughtseize"
      }
    ],
    side: [
      {
        amount: 2,
        name: "Engineered Explosives"
      },
      {
        amount: 2,
        name: "Fatal Push"
      },
      {
        amount: 1,
        name: "Kolaghan's Command"
      },
      {
        amount: 1,
        name: "Magus of the Moon"
      },
      {
        amount: 2,
        name: "Necromentia"
      },
      {
        amount: 1,
        name: "Path of Peril"
      },
      {
        amount: 1,
        name: "Sheoldred, the Apocalypse"
      },
      {
        amount: 1,
        name: "The Filigree Sylex"
      },
      {
        amount: 2,
        name: "Tourach, Dread Cantor"
      },
      {
        amount: 2,
        name: "Unlicensed Hearse"
      }
    ]
  },
  "05-05-2023-Rhinos-Sean-Hamilton": {
    format: "modern",
    slug: "05-05-2023-Rhinos-Sean-Hamilton",
    pilotSlug: "Sean-Hamilton",
    archetype: "Rhinos",
    event: "05-05-2023-FNM-with-Style",
    main: [
      {
        amount: 4,
        name: "Arid Mesa"
      },
      {
        amount: 2,
        name: "Become Immense"
      },
      {
        amount: 1,
        name: "Boseiju, Who Endures"
      },
      {
        amount: 4,
        name: "Crashing Footfalls"
      },
      {
        amount: 3,
        name: "Dead // Gone"
      },
      {
        amount: 4,
        name: "Fire // Ice"
      },
      {
        amount: 4,
        name: "Force of Negation"
      },
      {
        amount: 1,
        name: "Forest"
      },
      {
        amount: 4,
        name: "Fury"
      },
      {
        amount: 2,
        name: "Gemstone Caverns"
      },
      {
        amount: 1,
        name: "Hallowed Fountain"
      },
      {
        amount: 1,
        name: "Indatha Triome"
      },
      {
        amount: 1,
        name: "Island"
      },
      {
        amount: 4,
        name: "Leyline Binding"
      },
      {
        amount: 2,
        name: "Misty Rainforest"
      },
      {
        amount: 1,
        name: "Mountain"
      },
      {
        amount: 1,
        name: "Otawara, Soaring City"
      },
      {
        amount: 1,
        name: "Raugrin Triome"
      },
      {
        amount: 4,
        name: "Scalding Tarn"
      },
      {
        amount: 4,
        name: "Shardless Agent"
      },
      {
        amount: 1,
        name: "Steam Vents"
      },
      {
        amount: 2,
        name: "Stomping Ground"
      },
      {
        amount: 3,
        name: "Teferi, Time Raveler"
      },
      {
        amount: 1,
        name: "Temple Garden"
      },
      {
        amount: 4,
        name: "Violent Outburst"
      }
    ],
    side: [
      {
        amount: 4,
        name: "Endurance"
      },
      {
        amount: 4,
        name: "Force of Vigor"
      },
      {
        amount: 1,
        name: "Keruga, the Macrosage"
      },
      {
        amount: 4,
        name: "Mystical Dispute"
      },
      {
        amount: 2,
        name: "Solitude"
      }
    ]
  },
  "05-05-2023-Gruul-Shamans-Golo-Stillger": {
    format: "modern",
    slug: "05-05-2023-Gruul-Shamans-Golo-Stillger",
    pilotSlug: "Golo-Stillger",
    archetype: "Gruul Shamans",
    event: "05-05-2023-FNM-with-Style",
    main: [
      {
        amount: 3,
        name: "Flamekin Harbinger"
      },
      {
        amount: 4,
        name: "Ignoble Hierach"
      },
      {
        amount: 4,
        name: "Lightning Bolt"
      },
      {
        amount: 3,
        name: "Harmonic Prodigy"
      },
      {
        amount: 3,
        name: "Goblin Anarchomancer"
      },
      {
        amount: 1,
        name: "Masked Vandal"
      },
      {
        amount: 4,
        name: "Elvish Visionary"
      },
      {
        amount: 4,
        name: "Burnig-Tree Emissary"
      },
      {
        amount: 4,
        name: "Rage Forger"
      },
      {
        amount: 3,
        name: "Seasoned Pyromacer"
      },
      {
        amount: 1,
        name: "Realmwalker"
      },
      {
        amount: 1,
        name: "Mul Daya Channelers"
      },
      {
        amount: 4,
        name: "Collected Company"
      },
      {
        amount: 4,
        name: "Stomping Ground"
      },
      {
        amount: 2,
        name: "Wooded Foothills"
      },
      {
        amount: 4,
        name: "Copperline Gorge"
      },
      {
        amount: 1,
        name: "Cavern of Souls"
      },
      {
        amount: 2,
        name: "Seclouded Courtyard"
      },
      {
        amount: 1,
        name: "Boseiju, Who Endures"
      },
      {
        amount: 4,
        name: "Cragcrown pathway // Timbercrown Pathway"
      },
      {
        amount: 2,
        name: "Forest"
      },
      {
        amount: 1,
        name: "Mountain"
      }
    ],
    side: [
      {
        amount: 3,
        name: "Magus of the Moon"
      },
      {
        amount: 2,
        name: "Dismember"
      },
      {
        amount: 2,
        name: "Reclamation Sage"
      },
      {
        amount: 1,
        name: "Klothys, god of Destiny"
      },
      {
        amount: 3,
        name: "Shapers Santuary"
      },
      {
        amount: 2,
        name: "Void Mirror"
      },
      {
        amount: 1,
        name: "Soulguide Lantern"
      },
      {
        amount: 1,
        name: "Scavenging Ooze"
      }
    ]
  },
  "05-05-2023-Grixis-Midrange-David-Amadu": {
    format: "modern",
    slug: "05-05-2023-Grixis-Midrange-David-Amadu",
    pilotSlug: "David-Amadu",
    archetype: "Grixis Midrange",
    event: "05-05-2023-FNM-with-Style",
    main: [
      {
        amount: 1,
        name: "Goldspan Dragon"
      },
      {
        amount: 4,
        name: "Bloodtithe Harvester"
      },
      {
        amount: 4,
        name: "Augur of Bolas"
      },
      {
        amount: 4,
        name: "Valki, God of Lies // Tibalt, Cosmic Impostor"
      },
      {
        amount: 3,
        name: "Corpse Appiaiser"
      },
      {
        amount: 3,
        name: "Graveyard Trespasser"
      },
      {
        amount: 1,
        name: "Pile On"
      },
      {
        amount: 4,
        name: "Kolaghan's Command"
      },
      {
        amount: 2,
        name: "Terminate"
      },
      {
        amount: 2,
        name: "Drown in the loch"
      },
      {
        amount: 2,
        name: "Mana Leak"
      },
      {
        amount: 4,
        name: "Lightning Bolt"
      },
      {
        amount: 2,
        name: "Cut Down"
      },
      {
        amount: 2,
        name: "Spell Pierce"
      },
      {
        amount: 3,
        name: "Fable of the Mirrorbreaker"
      },
      {
        amount: 2,
        name: "Crumbling Necropolis"
      },
      {
        amount: 1,
        name: "Bloodcrypt"
      },
      {
        amount: 2,
        name: "Dragonskall Summit"
      },
      {
        amount: 2,
        name: "Blackcleave Cliffs"
      },
      {
        amount: 1,
        name: "Field of Ruin"
      },
      {
        amount: 2,
        name: "Steam Vents"
      },
      {
        amount: 1,
        name: "Shivan Reef"
      },
      {
        amount: 1,
        name: "Clearwater Pathway // Murkwater Pathway"
      },
      {
        amount: 2,
        name: "Darkslick Shores"
      },
      {
        amount: 1,
        name: "Watery Grave"
      },
      {
        amount: 1,
        name: "Creaping Tar Pit"
      },
      {
        amount: 2,
        name: "Island"
      },
      {
        amount: 2,
        name: "Swamp"
      },
      {
        amount: 2,
        name: "Mountain"
      }
    ],
    side: [
      {
        amount: 2,
        name: "Extinction Event"
      },
      {
        amount: 2,
        name: "Rona's Vortex"
      },
      {
        amount: 2,
        name: "Sheoldred's Edict"
      },
      {
        amount: 1,
        name: "Field Ruin"
      },
      {
        amount: 1,
        name: "Spell Pierce"
      },
      {
        amount: 1,
        name: "Test of Talents"
      },
      {
        amount: 1,
        name: "Negate"
      },
      {
        amount: 1,
        name: "Dispel"
      },
      {
        amount: 1,
        name: "Stonebrain"
      },
      {
        amount: 1,
        name: "Pile On"
      },
      {
        amount: 1,
        name: "Lantern of the Lost"
      },
      {
        amount: 1,
        name: "Ashiok, Dream Render"
      }
    ]
  }
};
