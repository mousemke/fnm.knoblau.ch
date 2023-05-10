import React from "react";
import StyledWindow from "../common/StyledWindow";
import RowLink from "../common/RowLink";

import useStyles from "./PlayersList.styles";

import type { PlayersListProps } from "./PlayersList.types";

/**
 * The list of all players
 */
const PlayersList = (props: PlayersListProps): JSX.Element => {
  const { players, setModal } = props;

  const classes = useStyles();

  return (
    <StyledWindow className={classes.wrapperWindow}>
      <h2>Players</h2>
      {Object.keys(players).map((player, i) => {
        const playerObject = players[player];

        const onClick = () => setModal("player", playerObject);
        const playerObjectEventCount = playerObject.events.length;
        const playerObjectDeckCount = playerObject.decks.length;

        return (
          <RowLink key={i} onClick={onClick}>
            <h3>{player}</h3>
            <span>
              {playerObjectEventCount} Event
              {playerObjectEventCount !== 1 ? "s" : ""}
            </span>
            <span>
              {playerObjectDeckCount} Deck
              {playerObjectDeckCount !== 1 ? "s" : ""}
            </span>
          </RowLink>
        );
      })}
    </StyledWindow>
  );
};

export default PlayersList;
