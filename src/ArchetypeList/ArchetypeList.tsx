import React, { useCallback, useMemo } from "react";
import RowLink from "../common/RowLink";
import ContentWindow from "../common/ContentWindow";
// import useStyles from "./ArchetypeList.styles";

import type { Deck } from "../data";
import type { ArchetypeListProps, DecksByArchetype } from "./ArchetypeList.types";


/**
 * The list of all archetypes
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

  return (
    <ContentWindow>
      <h2>Deck Archtypes</h2>
      {Object.keys(decksByArchetype).map((archetype, i) => (
        <RowLink key={i} onClick={onClick(archetype)}>
          <h3>{archetype}</h3>
          <span>{decksByArchetype[archetype].length} deck{decksByArchetype[archetype].length === 1 ? "" : "s"}</span>
        </RowLink>
      ))}
    </ContentWindow>
  );
};

export default ArchetypeList;
