import React, { useCallback, useMemo } from "react";
import StyledWindow from "../common/StyledWindow";
import RowLink from "../common/RowLink";
import Separator from "../common/Separator";

import useStyles from "./SingleEvent.styles";

import type { SingleEventProps } from "./SingleEvent.types";
import type { DeckId } from "../data";

/**
 * A single deck
 */
const SingleEvent = (props: SingleEventProps): JSX.Element => {
  const { data, activeEvent, setModal } = props;

  if (activeEvent === null) {
    setModal(null, null);

    return <></>;
  }

  const { final, name, players, rounds } = activeEvent;

  const classes = useStyles();

  const onPlayerClick = useCallback(
    (player: string) => () => setModal("player", player),
    []
  );

  const onDeckClick = useCallback(
    (deck: DeckId) => () => setModal("deck", deck),
    []
  );

  return (
    <>
      <StyledWindow className={classes.wrapperWindow}>
        <h2>{name}</h2>
        <Separator />
        <h3>Players & Decks</h3>
        <div>
          {Object.keys(players).map((playerSlug, i) => {
            const { name: playerName } = data.players[playerSlug];
            const deckSlug = players[playerSlug];
            const { archetype: deckName } = data.decks[deckSlug];

            return (
              <span>
                <RowLink
                  className={classes.inlinePaddedLine}
                  key={`${i}-player`}
                  onClick={onPlayerClick(playerSlug)}
                  >
                  {playerName}
                </RowLink>
                <RowLink
                  className={classes.inlinePaddedLine}
                  key={`${i}-deck`}
                  onClick={onDeckClick(deckSlug)}
                  >
                  playing {deckName}
                </RowLink>
              </span>
            );
          })}
        </div>
      </StyledWindow>
      <StyledWindow className={classes.wrapperWindow}>
        <h3>Final Results</h3>
        <div>
          {final.map((finalRecord, f) => (
            <div key={f}>
              <span>{f + 1}.{" "}</span>
              <RowLink
                className={classes.inlinePaddedLine}
                onClick={onPlayerClick(finalRecord.slug)}
                >
                {data.players[finalRecord.slug].name}
              </RowLink>
              <span>{finalRecord.result}</span>
            </div>
          ))}
        </div>
      </StyledWindow>
      <StyledWindow className={classes.wrapperWindow}>
      <h3>Results ({rounds.length} rounds)</h3>
      <div>
        {rounds.map((round, i) => (
            <div className={classes.roundResultWrapper} key={i}>
              <div>Round {i + 1}</div>
              <div className={classes.roundResult}>
                {round.results.map((result, j) => (
                  <div key={j} className={classes.match}>
                    {Object.keys(result).map((playerSlug, k) => {
                      const { name: playerName } = data.players[playerSlug];

                      return (
                        <div key={k}><span className={classes.roundResultPlayerName}>{playerName}</span> - {result[playerSlug]}</div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </StyledWindow>
    </>
  );
};

export default SingleEvent;
