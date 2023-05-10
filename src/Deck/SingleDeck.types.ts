import type { Deck, Player, EventObject } from "../data";

export interface SingleDeckProps {
  activeDeck: Deck | null;
  setModal: (modalType: string | null, deck: Deck | null, event: EventObject | null, player: Player | null) => void;
}
