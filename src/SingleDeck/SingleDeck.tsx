import React, { useCallback, useMemo } from "react";
import RowLink from "../common/RowLink";
import Separator from "../common/Separator";
import ContentWindow from "../common/ContentWindow";

import useStyles from "./SingleDeck.styles";

import type { SingleDeckProps } from "./SingleDeck.types";
import type { EventId } from "../data";

/**
 * A single deck
 */
const SingleDeck = (props: SingleDeckProps): JSX.Element => {
  const { activeDeck, data, setModal } = props;

  if (activeDeck === null) {
    setModal(null, null);

    return <></>;
  }

  const { archetype, events, main, side } = activeDeck;

  const classes = useStyles();

  const pilot = useMemo(() => data.players[activeDeck.pilotSlug], [data]);

  const onPilotClick = useCallback(
    () => setModal("player", pilot.slug),
    [pilot]
  );

  const onEventClick = useCallback(
    (event: EventId) => () => setModal("event", event),
    []
  );

  const cardsInMain = useMemo(
    () => main.reduce((prev, curr) => prev + curr.amount, 0),
    [main]
  );
  const cardsInSide = useMemo(
    () => side.reduce((prev, curr) => prev + curr.amount, 0),
    [side]
  );

  return (
    <>
      <ContentWindow>
        <h2 className={classes.noTopMargin}>
          {archetype}
        </h2>
        <h3>
          <b>
            <RowLink onClick={onPilotClick}>{pilot.name}</RowLink>
          </b>
        </h3>
      </ContentWindow>
      <ContentWindow>
          <h4 className={classes.noTopMargin}>
            Main {cardsInMain}
          </h4>
          {main.map((card, i) => (
            <RowLink
              className={classes.card}
              key={i}
              target="_blank"
              href={`https://scryfall.com/search?q=!"${card.name}"`}
            >
              {card.amount} {card.name}
            </RowLink>
          ))}
      </ContentWindow>
      <ContentWindow>
        <h4 className={classes.noTopMargin}>
          Sideboard {cardsInSide}
        </h4>
        <div>
          {side.map((card, i) => (
            <RowLink
              className={classes.card}
              key={i}
              target="_blank"
              href={`https://scryfall.com/search?q=!"${card.name}"`}
            >
              {card.amount} {card.name}
            </RowLink>
          ))}
        </div>
        </ContentWindow>
      <ContentWindow>
        <h4 className={classes.noTopMargin}>
          Events
        </h4>
        <div>
          {events.map((event, i) => {
            const { date, name } = data.events[event];

            return (
              <RowLink
                className={classes.card}
                key={i}
                onClick={onEventClick(event)}
              >
                {date} - {name}
              </RowLink>
            );
          })}
        </div>
      </ContentWindow>
    </>
  );
};

export default SingleDeck;
