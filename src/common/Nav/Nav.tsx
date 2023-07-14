import React, { useCallback } from "react";
import { useRef } from 'react';
import { FrameSVGKranox, useFrameSVGAssemblingAnimation, Illuminator } from '@arwes/react-frames';
import RowLink from "../RowLink";
import { Text } from "@arwes/react-text";

import type { ReactElement } from 'react';
import type{ NavProps } from "./Nav.types";

import useStyles from "./Nav.styles";

const Nav = (props: NavProps): ReactElement => {
  const { setModal } = props;

  const svgRef = useRef<SVGSVGElement | null>(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

  const classes = useStyles();

  const setSlug = useCallback((slug: string | null) => () => setModal(slug, null), [])

  return (
    <div className={classes.wrapper}>
      <Text as="div" className={classes.textWrapper}>
        <RowLink onClick={setSlug("decklist")}>
          <h2>Decks</h2>
        </RowLink>
        <RowLink onClick={setSlug("playerlist")}>
          <h2>Players</h2>
        </RowLink>
        <RowLink onClick={setSlug("eventlist")}>
          <h2>Events</h2>
        </RowLink>
        <RowLink onClick={setSlug(null)}>
          <h2>Rules</h2>
        </RowLink>
      </Text>
      <FrameSVGKranox
        className={classes.frame}
        elementRef={svgRef}
        onRender={onRender}
        padding={4}
        strokeWidth={2}
        squareSize={12}
        smallLineLength={12}
        largeLineLength={48}
      />
    </div>
  );
};

export default Nav;
