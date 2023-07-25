import React, { useCallback, useMemo } from "react";
import RowLink from "../common/RowLink";
import ContentWindow from "../common/ContentWindow";
// import useStyles from "./ArchetypeList.styles";

import type { Deck } from "../data";
import type { ArchetypeListProps, DecksByArchetype } from "./ArchetypeList.types";


/**
 * The list of all decks
 */
const ArchetypeList = (props: ArchetypeListProps): JSX.Element => {
  const { data, setModal } = props;
  const decks = data.decks;

  // const classes = useStyles();

  const onClick = useCallback((archetype: string) => () => setModal("deckslist", archetype), []);

  const decksByArchetype = useMemo(() => {
    const decksObject: DecksByArchetype = {};

    Object.values(decks).forEach((d: Deck) => {
      if (decksObject[d.archetype]) {
        decksObject[d.archetype].push(d);
      } else {
        decksObject[d.archetype] = [d];
      }
    });

    return decksObject;
  }, [decks]);

   const deckArchetypeKeys = useMemo(() => Object.keys(decksByArchetype).sort((a: string, b: string) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }), [decksByArchetype]);

  return (
    <ContentWindow>
      <h2>Deck Archtypes</h2>
      {deckArchetypeKeys.map((archetype, i) => (
        <RowLink key={i} onClick={onClick(archetype)}>
          <h3>{archetype}</h3>
          <span>{decksByArchetype[archetype].length} deck{decksByArchetype[archetype].length === 1 ? "" : "s"}</span>
        </RowLink>
      ))}
    </ContentWindow>
  );
};

export default ArchetypeList;
