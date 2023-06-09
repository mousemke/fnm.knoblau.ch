import React, { useCallback } from "react";
import StyledWindow from "../common/StyledWindow";
import RowLink from "../common/RowLink";

import useStyles from "./PlayersList.styles";

import type { PlayersListProps } from "./PlayersList.types";
import type { Player } from "../data";

/**
 * The list of all players
 */
const PlayersList = (props: PlayersListProps): JSX.Element => {
  const { players, setModal } = props;

  const classes = useStyles();

  const onClick = useCallback(
    (player: Player) => () => setModal("player", player.slug),
    []
  );

  return (
    <StyledWindow className={classes.wrapperWindow}>
      <h2>Players</h2>
      {Object.values(players).map((player, i) => {
        const playerEventCount = player.events.length;
        const playerDeckCount = player.decks.length;

        return (
          <RowLink key={i} onClick={onClick(player)}>
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
