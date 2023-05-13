import type { Data } from "../data";

export interface DecksListProps {
  data: Data;
  setModal: (modalType: string | null, slug: string | null) => void;
}
