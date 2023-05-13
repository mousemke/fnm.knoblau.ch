import React, { useMemo } from "react";

import useStyles from "./Separator.styles";

const separator = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.separator}/>
  );
};

export default separator;
