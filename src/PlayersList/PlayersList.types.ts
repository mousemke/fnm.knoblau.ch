import type { Players, Player, Deck, EventObject } from "../data";

export interface PlayersListProps {
  players: Players;
  setModal: (modalType: string | null, modalData: Player | Deck | EventObject | null) => void;
}
