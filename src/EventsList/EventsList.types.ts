import type { Events, Player, Deck, EventObject } from "../data";

export interface EventsListProps {
  events: Events;
  setModal: (modalType: string | null, modalData: Player | Deck | EventObject | null) => void;
}
