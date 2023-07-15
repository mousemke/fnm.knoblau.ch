import React, { useMemo } from "react";

import useStyles from "./Link.styles";

import type { LinkProps } from "./Link.types";

const Link = (props: LinkProps): JSX.Element => {
  const { children, className = "", href, onClick, target } = props;

  const classes = useStyles();

  const combinedClasses = useMemo(
    () => `${classes.link} ${className}`.trim(),
    [classes.link, className]
  );

  const options = {
    className: combinedClasses,
    href,
    onClick,
    role: href ? undefined : "button",
    target
  };

  return <a {...options}>{children}</a>;
};

export default Link;
