import React from "react";
import StyledWindow from "../common/StyledWindow";
import RowLink from "../common/RowLink";

import useStyles from "./EventsList.styles";

import type { EventsListProps } from "./EventsList.types";

/**
 * The list of all events
 */
const EventsList = (props: EventsListProps): JSX.Element => {
  const { events } = props;

  const classes = useStyles();

  return (
    <StyledWindow className={classes.wrapperWindow}>
      <h2>Events</h2>
      {Object.values(events).map((event, i) => (
        <RowLink key={i}>
          <h3>{event.name}</h3>
          <span>{new Date(event.date).toDateString()}</span>
          <span>at {event.location}</span>
          <span>{Object.keys(event.players).length} players</span>
        </RowLink>
      ))}
    </StyledWindow>
  );
};

export default EventsList;
