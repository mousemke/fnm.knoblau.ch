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
      {Object.values(players).map((player, i) => {
        const onClick = () => setModal("player", null, null, player);
        const playerEventCount = player.events.length;
        const playerDeckCount = player.decks.length;

        return (
          <RowLink key={i} onClick={onClick}>
            <h3>{player.name}</h3>
            <span>
              {playerEventCount} Event
              {playerEventCount !== 1 ? "s" : ""}
            </span>
            <span>
              {playerDeckCount} Deck
              {playerDeckCount !== 1 ? "s" : ""}
            </span>
          </RowLink>
        );
      })}
    </StyledWindow>
  );
};

export default PlayersList;
