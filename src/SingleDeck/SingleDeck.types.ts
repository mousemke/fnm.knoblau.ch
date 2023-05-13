import type { Deck, Player, EventObject, Data } from "../data";

export interface SingleDeckProps {
  activeDeck: Deck | null;
  data: Data;
  setModal: (modalType: string | null, slug: string | null) => void;
}
