import React from "react";
import { HideOnSmall, StyledP } from "./paginationHelpers";

const NAME = "PaginationDescriptiveDisplay";

export type PaginationCompactDisplayProps = {
  /** If compact variant */
  compact: boolean;
  /** The current page */
  currentPage: number;
  /** Total number of pages to display */
  totalPages: number;
  /** Component variant */
  variant: string;
};

export const PaginationDescriptiveDisplay = ({
  compact,
  currentPage,
  totalPages,
  variant,
}) => {
  const descriptive = variant === "descriptive";

  if (!descriptive) return null;

  return (
    <HideOnSmall compact={compact}>
      <StyledP>{`${currentPage} of ${totalPages} pages`}</StyledP>
    </HideOnSmall>
  );
};

PaginationDescriptiveDisplay.displayName = NAME;
