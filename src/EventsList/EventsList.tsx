import React, { useCallback } from "react";
import StyledWindow from "../common/StyledWindow";
import RowLink from "../common/RowLink";

import useStyles from "./EventsList.styles";

import type { EventObject } from "../data";
import type { EventsListProps } from "./EventsList.types";

/**
 * The list of all events
 */
const EventsList = (props: EventsListProps): JSX.Element => {
  const { events, setModal } = props;

  const classes = useStyles();
  const onClick = useCallback((event: EventObject) => () => setModal("event", event.slug), []);

  return (
    <StyledWindow className={classes.wrapperWindow}>
      <h2>Events</h2>
      {Object.values(events).map((event: EventObject, i) => {

        return (
          <RowLink key={i} onClick={onClick(event)}>
            <h3>{event.name}</h3>
            <span>{new Date(event.date).toDateString()}</span>
            <span>at {event.location}</span>
            <span>{Object.keys(event.players).length} players</span>
          </RowLink>
        );
      })}
    </StyledWindow>
  );
};

export default EventsList;
