import React, { useMemo } from "react";

import useStyles from "./RowLink.styles";

import type { RowLinkProps } from "./RowLink.types";

const RowLink = (props: RowLinkProps): JSX.Element => {
  const { children, className = "", onClick } = props;

  const classes = useStyles();

  const combinedClasses = useMemo(() => (`${classes.link} ${className}`).trim(), [classes.link, className]);

  return <a role="button" onClick={onClick} className={combinedClasses}>{children}</a>;
};

export default RowLink;
