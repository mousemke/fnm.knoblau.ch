import type { Decks, Deck, Player, EventObject } from "../data";

export interface DecksListProps {
  decks: Decks;
  setModal: (modalType: string | null, modalData: Player | Deck | EventObject | null) => void;
}
