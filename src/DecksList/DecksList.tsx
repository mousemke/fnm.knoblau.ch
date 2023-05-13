import React from "react";
import StyledWindow from "../common/StyledWindow";
import RowLink from "../common/RowLink";
import useStyles from "./DecksList.styles";

import type { DecksListProps } from "./DecksList.types";

/**
 * The list of all decks
 */
const DecksList = (props: DecksListProps): JSX.Element => {
  const { data, setModal } = props;
  const decks = data.decks;

  const classes = useStyles();

  return (
    <StyledWindow className={classes.wrapperWindow}>
      <h2>Decks</h2>
      {Object.values(decks).map((deck, i) => {
        const onClick = () => setModal("deck", deck.slug);

        const deckEventCount = deck.events.length;

        return (
          <RowLink key={i} onClick={onClick}>
            <h3>{deck.name}</h3>
            <span>by {data.players[deck.pilotSlug].name}</span>
            <span>
              {deckEventCount} Event{deckEventCount !== 1 ? "s" : ""}
            </span>
          </RowLink>
        );
      })}
    </StyledWindow>
  );
};

export default DecksList;
