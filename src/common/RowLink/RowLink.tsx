import React from "react";

import useStyles from "./RowLink.styles";

import type { RowLinkProps } from "./RowLink.types";

const RowLink = (props: RowLinkProps): JSX.Element => {
  const { children, className } = props;

  const classes = useStyles();

  return <a className={`${classes.link} ${className}`}>{children}</a>;
};

export default RowLink;
