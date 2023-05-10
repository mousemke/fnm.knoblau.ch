import type { Players, Player, Deck, EventObject } from "../data";

export interface PlayersListProps {
  players: Players;
  setModal: (modalType: string | null, deck: Deck | null, event: EventObject | null, player: Player | null) => void;
}
