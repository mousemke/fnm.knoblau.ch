import React, { useCallback } from "react";
import RowLink from "../common/RowLink";
import ContentWindow from "../common/ContentWindow";
// import useStyles from "./DecksList.styles";

import type { Deck } from "../data";
import type { DecksListProps } from "./DecksList.types";

/**
 * The list of all decks
 */
const DecksList = (props: DecksListProps): JSX.Element => {
  const { data, setModal } = props;
  const decks = data.decks;

  // const classes = useStyles();
  const onClick = useCallback((deck: Deck) => () => setModal("deck", deck.slug), []);

  return (
    <ContentWindow>
      <h2>Decks</h2>
      {Object.values(decks).map((deck: Deck, i) => {

        const deckEventCount = deck.events.length;

        return (
          <RowLink key={i} onClick={onClick(deck)}>
            <h3>{deck.archetype}</h3>
            <span>by {data.players[deck.pilotSlug].name}</span>
            <span>
              {deckEventCount} Event{deckEventCount !== 1 ? "s" : ""}
            </span>
          </RowLink>
        );
      })}
    </ContentWindow>
  );
};

export default DecksList;
