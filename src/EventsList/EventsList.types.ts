import type { Events, Player, Deck, EventObject } from "../data";

export interface EventsListProps {
  events: Events;
  setModal: (modalType: string | null, deck: Deck | null, event: EventObject | null, player: Player | null) => void;
}
