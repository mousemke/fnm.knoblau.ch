import type { Decks, Deck, Player, EventObject } from "../data";

export interface DecksListProps {
  decks: Decks;
  setModal: (modalType: string | null, deck: Deck | null, event: EventObject | null, player: Player | null) => void;
}
