import React, { useCallback, useMemo } from "react";
import StyledWindow from "../common/StyledWindow";
import RowLink from "../common/RowLink";
import Separator from "../common/Separator";

import useStyles from "./SinglePlayer.styles";

import type { SinglePlayerProps } from "./SinglePlayer.types";
import type { DeckId, EventId } from "../data";

/**
 * A single deck
 */
const SinglePlayer = (props: SinglePlayerProps): JSX.Element => {
  const { data, activePlayer, setModal } = props;

  if (activePlayer === null) {
    setModal(null, null);

    return <></>;
  }

  const { decks, events, name } = activePlayer;

  const classes = useStyles();

  const onDeckClick = useCallback(
    (deck: DeckId) => () => setModal("deck", deck),
    []
  );

  const onEventClick = useCallback(
    (event: EventId) => () => setModal("event", event),
    []
  );

  return (
    <StyledWindow className={classes.wrapperWindow}>
      <h2>{name}</h2>
      <Separator />
      <h3>Decks</h3>
      <div>
        {decks.map((deck, i) => {
          const { archetype } = data.decks[deck];

          return (
            <RowLink
              className={classes.paddedLine}
              key={i}
              onClick={onDeckClick(deck)}
            >
              {archetype}
            </RowLink>
          );
        })}
      </div>
      <Separator />
      <h3>Events</h3>
      <div>
        {events.map((event, i) => {
          const { date, name } = data.events[event];

          return (
            <RowLink
              className={classes.paddedLine}
              key={i}
              onClick={onEventClick(event)}
            >
              {date} - {name}
            </RowLink>
          );
        })}
      </div>
    </StyledWindow>
  );
};

export default SinglePlayer;
