import React from "react";
import StyledWindow from "../common/StyledWindow";
import RowLink from "../common/RowLink";

import useStyles from "./SingleDeck.styles";

import type { SingleDeckProps } from "./SingleDeck.types";

/**
 * A single deck
 */
const SingleDeck = (props: SingleDeckProps): JSX.Element => {
  const { activeDeck, setModal } = props;

  if (activeDeck === null) {
    setModal(null, null, null, null);

    return <></>;
  }

  const classes = useStyles();

  return (
    <StyledWindow className={classes.wrapperWindow}>
      <h2>A Deck</h2>
    </StyledWindow>
  );
};

export default SingleDeck;
