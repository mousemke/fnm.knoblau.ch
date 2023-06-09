import React from "react";
import { FrameSVGUnderline } from "@arwes/react-frames";
import { Text } from "@arwes/react-text";

import type { StyledWindowProps } from "./StyledWindow.types";

import useStyles from "./StyledWindow.styles";

const StyledWindow = (props: StyledWindowProps): JSX.Element => {
  const { children, className } = props;

  const classes = useStyles();

  return (
    <div className={`${className} ${classes.wrapper}`}>
      <Text>{children}</Text>
      <FrameSVGUnderline className={classes.frame} />
    </div>
  );
};

export default StyledWindow;
