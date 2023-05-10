import React from "react";

export interface RowLinkProps {
  children: React.ReactNode[];
  className?: string;
  onClick: () => void;
}
