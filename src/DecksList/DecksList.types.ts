import type { Decks } from "../data";

export interface DecksListProps {
  decks: Decks;
  setModal: (modalType: string | null, slug: string | null) => void;
}
