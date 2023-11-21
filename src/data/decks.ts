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
  "2023-05-05-Scam-Sadie-Braun": {
    format: "modern",
    slug: "2023-05-05-Scam-Sadie-Braun",
    pilotSlug: "Sadie-Braun",
    archetype: "Scam",
    event: "2023-05-05-FNM-with-Style",
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
  "2023-05-05-4c-Rhinos-Kaia-Hamilton": {
    format: "modern",
    slug: "2023-05-05-4c-Rhinos-Kaia-Hamilton",
    pilotSlug: "Kaia-Hamilton",
    archetype: "4c Rhinos",
    event: "2023-05-05-FNM-with-Style",
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
  "2023-05-05-Gruul-Shamans-Golo-Stillger": {
    format: "modern",
    slug: "2023-05-05-Gruul-Shamans-Golo-Stillger",
    pilotSlug: "Golo-Stillger",
    archetype: "Gruul Shamans",
    event: "2023-05-05-FNM-with-Style",
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
  "2023-05-05-Grixis-Midrange-David-Amadu": {
    format: "modern",
    slug: "2023-05-05-Grixis-Midrange-David-Amadu",
    pilotSlug: "David-Amadu",
    archetype: "Grixis Midrange",
    event: "2023-05-05-FNM-with-Style",
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
  },
  "2023-07-14-Scam-Sadie-Braun": {
    format: "modern",
    slug: "2023-07-14-Scam-Sadie-Braun",
    pilotSlug: "Sadie-Braun",
    archetype: "Scam",
    event: "2023-07-14-FNM-with-Style",
    main: [
      {
        amount: 3,
        name: "Blackcleave Cliffs"
      },
      {
        amount: 3,
        name: "Blood Crypt"
      },
      {
        amount: 2,
        name: "Blood Moon"
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
        name: "Dauthi Voidwalker"
      },
      {
        amount: 2,
        name: "Fatal Push"
      },
      {
        amount: 2,
        name: "Feign Death"
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
        name: "Marsh Flats"
      },
      {
        amount: 4,
        name: "Orcish Bowmasters"
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
        name: "Swamp"
      },
      {
        amount: 3,
        name: "Terminate"
      },
      {
        amount: 3,
        name: "Thoughtseize"
      },
      {
        amount: 4,
        name: "Undying Malice"
      },
      {
        amount: 2,
        name: "Verdant Catacombs"
      },
    ],
    side: [
      {
        amount: 1,
        name: "Blood Moon"
      },
      {
        amount: 3,
        name: "Chalice of the Void"
      },
      {
        amount: 2,
        name: "Engineered Explosives"
      },
      {
        amount: 2,
        name: "Fable of the Mirror-Breaker"
      },
      {
        amount: 2,
        name: "Nihil Spellbomb"
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
        amount: 1,
        name: "Thoughtseize"
      },
      {
        amount: 2,
        name: "Unlicensed Hearse"
      },
    ]
  },
  "2023-07-14-Esper-Blink-Alex-Humphreys": {
    format: "modern",
    slug: "2023-07-14-Esper-Blink-Alex-Humphreys",
    pilotSlug: "Alex-Humphreys",
    archetype: "Esper Blink",
    event: "2023-07-14-FNM-with-Style",
    main: [
      {
        amount: 3,
        name: "Aether Channeler"
      },
      {
        amount: 2,
        name: "Can't Stay Away"
      },
      {
        amount: 3,
        name: "Charming Prince"
      },
      {
        amount: 4,
        name: "Ephemerate"
      },
      {
        amount: 2,
        name: "Flooded Strand"
      },
      {
        amount: 2,
        name: "Godless Shrine"
      },
      {
        amount: 1,
        name: "Graceful Restoration"
      },
      {
        amount: 4,
        name: "Grief"
      },
      {
        amount: 2,
        name: "Hallowed Fountain"
      },
      {
        amount: 3,
        name: "Halo Forager"
      },
      {
        amount: 1,
        name: "Island"
      },
      {
        amount: 3,
        name: "Marsh Flats"
      },
      {
        amount: 2,
        name: "Plains"
      },
      {
        amount: 3,
        name: "Polluted Delta"
      },
      {
        amount: 2,
        name: "Profane Tutor"
      },
      {
        amount: 1,
        name: "Raffine's Tower"
      },
      {
        amount: 1,
        name: "Seachrome Coast"
      },
      {
        amount: 4,
        name: "Solitude"
      },
      {
        amount: 4,
        name: "Soulherder"
      },
      {
        amount: 1,
        name: "Swamp"
      },
      {
        amount: 3,
        name: "Touch the Spirit Realm"
      },
      {
        amount: 4,
        name: "Undying Malice"
      },
      {
        amount: 2,
        name: "Vanishing Verse"
      },
      {
        amount: 1,
        name: "Vesuvan Duplimancy"
      },
      {
        amount: 2,
        name: "Watery Grave"
      },
    ],
    side: [
      {
        amount: 2,
        name: "Chalice of the Void"
      },
      {
        amount: 1,
        name: "Dovin's Veto"
      },
      {
        amount: 1,
        name: "Drannith Magistrate"
      },
      {
        amount: 1,
        name: "Elesh Norn, Mother of Machines"
      },
      {
        amount: 1,
        name: "Grafdigger's Cage"
      },
      {
        amount: 1,
        name: "Phyrexian Metamorph"
      },
      {
        amount: 2,
        name: "Pithing Needle"
      },
      {
        amount: 1,
        name: "Prismatic Ending"
      },
      {
        amount: 1,
        name: "Relic of Progenitus"
      },
      {
        amount: 2,
        name: "Subtlety"
      },
      {
        amount: 2,
        name: "Teferi, Time Raveler"
      },
    ]
  },
  "2023-07-14-Mono-W-Angels-Magda-Szymaniec": {
    format: "modern",
    slug: "2023-07-14-Mono-W-Angels-Magda-Szymaniec",
    pilotSlug: "Magda-Szymaniec",
    archetype: "Mono W Angels",
    event: "2023-07-14-FNM-with-Style",
    main: [
      {
        amount: 2,
        name: "Archangel Elspeth"
      },
      {
        amount: 1,
        name: "Archangel of Thune"
      },
      {
        amount: 1,
        name: "Banishing Light"
      },
      {
        amount: 4,
        name: "Bishop of Wings"
      },
      {
        amount: 1,
        name: "Borrowed Time"
      },
      {
        amount: 2,
        name: "Castle Ardenvale"
      },
      {
        amount: 2,
        name: "Cave of the Frost Dragon"
      },
      {
        amount: 2,
        name: "Cavern of Souls"
      },
      {
        amount: 1,
        name: "Eiganjo, Seat of the Empire"
      },
      {
        amount: 2,
        name: "Elspeth Resplendent"
      },
      {
        amount: 2,
        name: "Giada, Font of Hope"
      },
      {
        amount: 2,
        name: "Heliod, Sun-Crowned"
      },
      {
        amount: 2,
        name: "Metropolis Reformer"
      },
      {
        amount: 1,
        name: "Oblivion Ring"
      },
      {
        amount: 1,
        name: "Ossification"
      },
      {
        amount: 1,
        name: "Path to Exile"
      },
      {
        amount: 1,
        name: " Plains"
      },
      {
        amount: 4,
        name: "Righteous Valkyrie"
      },
      {
        amount: 1,
        name: "Segovian Angel"
      },
      {
        amount: 4,
        name: "Seraph Sanctuary"
      },
      {
        amount: 2,
        name: "Serra Paragon"
      },
      {
        amount: 2,
        name: "Serra the Benevolent"
      },
      {
        amount: 2,
        name: "Soul Warden"
      },
      {
        amount: 2,
        name: "Speaker of the Heavens"
      },
      {
        amount: 2,
        name: "The Book of Exalted Deeds"
      },
      {
        amount: 2,
        name: "Youthful Valkyrie"
      },
    ],
    side: [
      {
        amount: 1,
        name: "Borrowed Time"
      },
      {
        amount: 1,
        name: "Giada, Font of Hope"
      },
      {
        amount: 2,
        name: "Inspiring Overseer"
      },
      {
        amount: 1,
        name: "Resplendent Angel"
      },
      {
        amount: 2,
        name: "Sanctify"
      },
      {
        amount: 1,
        name: "Segovian Angel"
      },
      {
        amount: 1,
        name: "Sephara, Sky's Blade"
      },
      {
        amount: 1,
        name: "Soul Warden"
      },
      {
        amount: 1,
        name: "Tormod's Crypt"
      },
      {
        amount: 2,
        name: "Traveling Minister"
      },
      {
        amount: 1,
        name: "Youthful Valkyrie"
      },
    ]
  },
  "2023-07-14-4c-Rhinos-Kaia-Hamilton": {
    format: "modern",
    slug: "2023-07-14-4c-Rhinos-Kaia-Hamilton",
    pilotSlug: "Kaia-Hamilton",
    archetype: "4c Rhinos",
    event: "2023-07-14-FNM-with-Style",
    main: [
      {
        amount: 2,
        name: "Teferi, Time Raveler"
      },
      {
        amount: 4,
        name: "Shardless Agent"
      },
      {
        amount: 2,
        name: "Fury"
      },
      {
        amount: 2,
        name: "The One Ring"
      },
      {
        amount: 4,
        name: "Force of Negation"
      },
      {
        amount: 2,
        name: "Mystical Dispute"
      },
      {
        amount: 4,
        name: "Violent Outburst"
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
        name: "Crashing Footfalls"
      },
      {
        amount: 4,
        name: "Leyline Binding"
      },
      {
        amount: 4,
        name: "Arid Mesa"
      },
      {
        amount: 2,
        name: "Boseiju, Who Endures"
      },
      {
        amount: 1,
        name: "Forest"
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
        amount: 2,
        name: "Island"
      },
      {
        amount: 2,
        name: "Misty Rainforest"
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
        amount: 1,
        name: "Steam Vents"
      },
      {
        amount: 2,
        name: "Stomping Ground"
      },
      {
        amount: 1,
        name: "Temple Garden"
      },
    ],
    side: [
      {
        amount: 2,
        name: "Chalice of the Void"
      },
      {
        amount: 4,
        name: "Endurance"
      },
      {
        amount: 2,
        name: "Mystical Dispute"
      },
      {
        amount: 4,
        name: "Force of Vigor"
      },
      {
        amount: 1,
        name: "Subtlety"
      },
      {
        amount: 2,
        name: "Fury"
      },
    ]
  },
  "2023-07-14-Living-End-Anthony-Hernandez": {
    format: "modern",
    slug: "2023-07-14-Living-End-Anthony-Hernandez",
    pilotSlug: "Anthony-Hernandez",
    event: "2023-07-14-FNM-with-Style",
    archetype: "Living End",
    main: [
      {
        amount: 1,
        name: "Island"
      },
      {
        amount: 1,
        name: "Sunken Ruins"
      },
      {
        amount: 4,
        name: "Architects of Will"
      },
      {
        amount: 4,
        name: "Violent Outburst"
      },
      {
        amount: 1,
        name: "Forest"
      },
      {
        amount: 2,
        name: "Steam Vents"
      },
      {
        amount: 2,
        name: "Breeding Pool"
      },
      {
        amount: 1,
        name: "Stomping Ground"
      },
      {
        amount: 4,
        name: "Street Wraith"
      },
      {
        amount: 4,
        name: "Shardless Agent"
      },
      {
        amount: 2,
        name: "Botanical Sanctum"
      },
      {
        amount: 4,
        name: "Misty Rainforest"
      },
      {
        amount: 4,
        name: "Curator of Mysteries"
      },
      {
        amount: 4,
        name: "Striped Riverwinder"
      },
      {
        amount: 4,
        name: "Force of Negation"
      },
      {
        amount: 3,
        name: "Waker of Waves"
      },
      {
        amount: 4,
        name: "Living End"
      },
      {
        amount: 4,
        name: "Grief"
      },
      {
        amount: 1,
        name: "Otawara, Soaring City"
      },
      {
        amount: 2,
        name: "Oliphaunt"
      },
      {
        amount: 4,
        name: "Generous Ent"
      },
    ],
    side: [
      {
        amount: 2,
        name: "Force of Vigor"
      },
      {
        amount: 3,
        name: "Leyline of Sanctity"
      },
      {
        amount: 1,
        name: "Mystical Dispute"
      },
      {
        amount: 4,
        name: "Subtlety"
      },
      {
        amount: 3,
        name: "Endurance"
      },
      {
        amount: 2,
        name: "Foundation Breaker"
      },
    ]
  },
  "2023-07-14-Mono-G-Tron-Aubrey-Browne": {
    format: "modern",
    slug: "2023-07-14-Mono-G-Tron-Aubrey-Browne",
    pilotSlug: "Aubrey-Browne",
    archetype: "Mono G Tron",
    event: "2023-07-14-FNM-with-Style",
    main: [
      {
        amount: 4,
        name: "Urza's Tower"
      },
      {
        amount: 4,
        name: "Urza's Power Plant"
      },
      {
        amount: 4,
        name: "Urza's Mine"
      },
      {
        amount: 3,
        name: "Forest"
      },
      {
        amount: 1,
        name: "Blast Zone"
      },
      {
        amount: 1,
        name: "Boseiju, Who Endures"
      },
      {
        amount: 1,
        name: "Sanctum of Ugin"
      },
      {
        amount: 4,
        name: "Expedition Map"
      },
      {
        amount: 4,
        name: "Sylvan Scrying"
      },
      {
        amount: 4,
        name: "Ancient Stirrings"
      },
      {
        amount: 4,
        name: "Chromatic Sphere"
      },
      {
        amount: 4,
        name: "Chromatic Star"
      },
      {
        amount: 3,
        name: "Oblivion Stone"
      },
      {
        amount: 1,
        name: "Ugin, the Spirit Dragon"
      },
      {
        amount: 4,
        name: "Karn, the Great Creator"
      },
      {
        amount: 1,
        name: "Wurmcoil Engine"
      },
      {
        amount: 1,
        name: "Cityscape Leveler"
      },
      {
        amount: 1,
        name: "Sundering Titan"
      },
      {
        amount: 1,
        name: "Ulamog, the Ceaseless Hunger"
      },
      {
        amount: 1,
        name: "Kozilek, Butcher of Truth"
      },
      {
        amount: 3,
        name: "The One Ring"
      },
      {
        amount: 3,
        name: "Relic of Progenitus"
      },
      {
        amount: 2,
        name: "Warping Wail"
      },
      {
        amount: 1,
        name: "Emrakul, the Promised End"
      },
    ],
    side: [
      {
        amount: 3,
        name: "Haywire Mite"
      },
      {
        amount: 1,
        name: "Walking Ballista"
      },
      {
        amount: 1,
        name: "Chalice of the Void"
      },
      {
        amount: 1,
        name: "Tormod's Crypt"
      },
      {
        amount: 1,
        name: "Ensnaring Bridge"
      },
      {
        amount: 1,
        name: "Jegantha, the Wellspring"
      },
      {
        amount: 1,
        name: "Boulderbranch Golem"
      },
      {
        amount: 1,
        name: "Sundering Titan"
      },
      {
        amount: 1,
        name: "The Stone Brain"
      },
      {
        amount: 1,
        name: "Engineered Explosives"
      },
      {
        amount: 1,
        name: "The One Ring"
      },
      {
        amount: 1,
        name: "Liquimetal Coating"
      },
      {
        amount: 1,
        name: "Soulless Jailer"
      },
    ]
  },
  "2023-11-17-Scam-Sadie-Braun": {
    format: "modern",
    slug: "2023-11-17-Scam-Sadie-Braun",
    pilotSlug: "Sadie-Braun",
    archetype: "Scam",
    event: "2023-11-17-FNM-with-Style",
    main: [
      {
        amount: 3,
        name: "Blackcleave Cliffs"
      },
      {
        amount: 3,
        name: "Blood Crypt"
      },
      {
        amount: 1,
        name: "Blood Moon"
      },
      {
        amount: 4,
        name: "Bloodstained Mire"
      },
      {
        amount: 4,
        name: "Dauthi Voidwalker"
      },
      {
        amount: 4,
        name: "Fable of the Mirror-Breaker"
      },
      {
        amount: 4,
        name: "Fury"
      },
      {
        amount: 1,
        name: "Godless Shrine"
      },
      {
        amount: 4,
        name: "Grief"
      },
      {
        amount: 2,
        name: "Lightning Bolt"
      },
      {
        amount: 3,
        name: "Marsh Flats"
      },
      {
        amount: 1,
        name: "Mount Doom"
      },
      {
        amount: 4,
        name: "Not Dead After All"
      },
      {
        amount: 4,
        name: "Orcish Bowmasters"
      },
      {
        amount: 4,
        name: "Ragavan, Nimble Pilferer"
      },
      {
        amount: 1,
        name: "Sheoldred, the Apocalypse"
      },
      {
        amount: 3,
        name: "Swamp"
      },
      {
        amount: 1,
        name: "Terminate"
      },
      {
        amount: 2,
        name: "Molten Collapse"
      },
      {
        amount: 3,
        name: "Thoughtseize"
      },
      {
        amount: 2,
        name: "Undying Evil"
      },
      {
        amount: 2,
        name: "Verdant Catacombs"
      },
    ],
    side: [
      {
        amount: 2,
        name: "Blood Moon"
      },
      {
        amount: 2,
        name: "Brotherhood's End"
      },
      {
        amount: 3,
        name: "Chalice of the Void"
      },
      {
        amount: 2,
        name: "Engineered Explosives"
      },
      {
        amount: 3,
        name: "Leyline of the Void"
      },
      {
        amount: 1,
        name: "Sheoldred, the Apocalypse"
      },
      {
        amount: 2,
        name: "Wear // Tear"
      },
    ]
  },
  "2023-11-17-Golgari-Yawgmoth-Kaia-Hamilton": {
    format: "modern",
    slug: "2023-11-17-Golgari-Yawgmoth-Kaia-Hamilton",
    pilotSlug: "Kaia-Hamilton",
    archetype: "Golgari Yawgmoth",
    event: "2023-11-17-FNM-with-Style",
    main: [
      {
        amount: 4,
        name: "Grist, the Hunger Tide"
      },
      {
        amount: 1,
        name: "Walking Ballista"
      },
      {
        amount: 4,
        name: "Delighted Halfling"
      },
      {
        amount: 4,
        name: "Young Wolf"
      },
      {
        amount: 1,
        name: "Blood Artist"
      },
      {
        amount: 1,
        name: "Hapatra, Vizier of Poisons"
      },
      {
        amount: 4,
        name: "Orcish Bowmasters"
      },
      {
        amount: 1,
        name: "Prosperous Innkeeper"
      },
      {
        amount: 1,
        name: "Strangleroot Geist"
      },
      {
        amount: 4,
        name: "Wall of Roots"
      },
      {
        amount: 1,
        name: "Sheoldred, the Apocalypse"
      },
      {
        amount: 4,
        name: "Yawgmoth, Thran Physician"
      },
      {
        amount: 2,
        name: "Agatha's Soul Cauldron"
      },
      {
        amount: 2,
        name: "The One Ring"
      },
      {
        amount: 4,
        name: "Chord of Calling"
      },
      {
        amount: 3,
        name: "Blooming Marsh"
      },
      {
        amount: 2,
        name: "Boseiju, Who Endures"
      },
      {
        amount: 2,
        name: "Forest"
      },
      {
        amount: 1,
        name: "Khalni Garden"
      },
      {
        amount: 1,
        name: "Misty Rainforest"
      },
      {
        amount: 2,
        name: "Nurturing Peatland"
      },
      {
        amount: 2,
        name: "Overgrown Tomb"
      },
      {
        amount: 1,
        name: "Pendelhaven"
      },
      {
        amount: 1,
        name: "Swamp"
      },
      {
        amount: 1,
        name: "Takenuma, Abandoned Mire"
      },
      {
        amount: 2,
        name: "Twilight Mire"
      },
      {
        amount: 4,
        name: "Verdant Catacombs"
      },
    ],
    side: [
      {
        amount: 1,
        name: "Fatal Push"
      },
      {
        amount: 1,
        name: "Haywire Mite"
      },
      {
        amount: 1,
        name: "Legion's End"
      },
      {
        amount: 1,
        name: "Soulless Jailer"
      },
      {
        amount: 1,
        name: "Tear Asunder"
      },
      {
        amount: 2,
        name: "Void Mirror"
      },
      {
        amount: 1,
        name: "Endurance"
      },
      {
        amount: 1,
        name: "Fulminator Mage"
      },
      {
        amount: 1,
        name: "Spike Feeder"
      },
      {
        amount: 2,
        name: "Elven Chorus"
      },
      {
        amount: 2,
        name: "Force of Vigor"
      },
      {
        amount: 1,
        name: "The End"
      },
    ]
  },
  "2023-11-17-Jeskai-Boomshine-Hanna-Neubauer": {
    format: "modern",
    slug: "2023-11-17-Jeskai-Boomshine-Hanna-Neubauer",
    pilotSlug: "Hanna-Neubauer",
    archetype: "Jeskai Boomshine",
    event: "2023-11-17-FNM-with-Style",
    main: [
      {
        amount: 4,
        name: "Boom // Bust"
      },
      {
        amount: 4,
        name: "Cleansing Wildfire"
      },
      {
        amount: 2,
        name: "Darksteel Citadel"
      },
      {
        amount: 2,
        name: "Darksteel Relic"
      },
      {
        amount: 3,
        name: "Ensoul Artifact"
      },
      {
        amount: 4,
        name: "Expressive Iteration"
      },
      {
        amount: 4,
        name: "Galvanic Blast"
      },
      {
        amount: 2,
        name: "Hindering Light"
      },
      {
        amount: 2,
        name: "Island"
      },
      {
        amount: 4,
        name: "Lightning Bolt"
      },
      {
        amount: 1,
        name: "Mountain"
      },
      {
        amount: 3,
        name: "Narset, Parter of Veils"
      },
      {
        amount: 1,
        name: "Plains"
      },
      {
        amount: 3,
        name: "Razortide Bridge"
      },
      {
        amount: 3,
        name: "Rise and Shine"
      },
      {
        amount: 3,
        name: "Rustvale Bridge"
      },
      {
        amount: 2,
        name: "Seachrome Coast"
      },
      {
        amount: 4,
        name: "Shivan Reef"
      },
      {
        amount: 4,
        name: "Silverbluff Bridge"
      },
      {
        amount: 2,
        name: "Stubborn Denial"
      },
      {
        amount: 1,
        name: "Tezzeret, Betrayer of Flesh"
      },
      {
        amount: 2,
        name: "The Blackstaff of Waterdeep"
      },
    ],
    side: [
      {
        amount: 2,
        name: "Crumble to Dust"
      },
      {
        amount: 1,
        name: "Day's Undoing"
      },
      {
        amount: 2,
        name: "Dispatch"
      },
      {
        amount: 3,
        name: "Prismatic Ending"
      },
      {
        amount: 3,
        name: "Rest in Peace"
      },
      {
        amount: 2,
        name: "Stubborn Denial"
      },
      {
        amount: 2,
        name: "Supreme Verdict"
      },
    ]
  },
  "2023-11-17-Mono-W-Hammer-Maximilian-Sache": {
    format: "modern",
    slug: "2023-11-17-Mono-W-Hammer-Maximilian-Sache",
    pilotSlug: "Maximilian-Sache",
    archetype: "Mono W Hammer",
    event: "2023-11-17-FNM-with-Style",
    main: [
      {
        amount: 4,
        name: "Colossus Hammer"
      },
      {
        amount: 4,
        name: "Emeria's Call // Emeria, Shattered Skyclave 4 Esper Sentinel"
      },
      {
        amount: 2,
        name: "Forge Anew"
      },
      {
        amount: 1,
        name: "Gingerbrute"
      },
      {
        amount: 2,
        name: "Giver of Runes"
      },
      {
        amount: 1,
        name: "Horizon Canopy"
      },
      {
        amount: 3,
        name: "Inkmoth Nexus"
      },
      {
        amount: 1,
        name: "Kaldra Compleat"
      },
      {
        amount: 3,
        name: "Ornithopter"
      },
      {
        amount: 1,
        name: "Paradise Mantle"
      },
      {
        amount: 10,
        name: "Plains"
      },
      {
        amount: 4,
        name: "Puresteel Paladin"
      },
      {
        amount: 1,
        name: "Shadowspear"
      },
      {
        amount: 4,
        name: "Sigarda's Aid"
      },
      {
        amount: 2,
        name: "Solitude"
      },
      {
        amount: 2,
        name: "Springleaf Drum"
      },
      {
        amount: 4,
        name: "Stoneforge Mystic"
      },
      {
        amount: 3,
        name: "Surge of Salvation"
      },
      {
        amount: 4,
        name: "Urza's Saga"
      },
    ],
    side: [
      {
        amount: 2,
        name: "Drannith Magistrate"
      },
      {
        amount: 2,
        name: "Hushbringer"
      },
      {
        amount: 2,
        name: "March of Otherworldly Light"
      },
      {
        amount: 1,
        name: "Pithing Needle"
      },
      {
        amount: 1,
        name: "Relic of Progenitus"
      },
      {
        amount: 4,
        name: "Sanctifier en-Vec"
      },
      {
        amount: 2,
        name: "Solitude"
      },
      {
        amount: 1,
        name: "Surge of Salvation"
      },
    ]
  }
};
