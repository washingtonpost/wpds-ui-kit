import React from "react";
import { StyledP } from "./paginationHelpers";
import { styled } from "../theme";
// import { PaginationContext } from "./PaginationRoot";

const NAME = "PaginationCompactDisplay";

const StyledCompact = styled("div", {
  display: "none",
  variants: {
    compact: {
      true: {
        display: "flex",
      },
    },
    numericOrDescriptive: {
      true: {
        "@sm": {
          display: "flex",
        },
      },
    },
  },
});

export type PaginationCompactDisplayProps = {
  /** The current page */
  currentPage: number;
  /** Whether or not endless pagination */
  endlessPagination: boolean;
  /** Total number of pages to display */
  totalPages: number;
  /** Component variant */
  variant: string;
};

export const PaginationCompactDisplay = ({
  currentPage,
  endlessPagination,
  totalPages,
  variant,
}) => {
  const compact = variant === "compact";
  const descriptive = variant === "descriptive";
  const numeric = variant === "numeric";

  // if numeric or descriptive
  const numericOrDescriptive = numeric || descriptive;

  return (
    <StyledCompact
      compact={compact}
      numericOrDescriptive={numericOrDescriptive}
    >
      <StyledP>
        {!endlessPagination
          ? `${currentPage}/${totalPages}`
          : `Page ${currentPage}`}
      </StyledP>
    </StyledCompact>
  );
};

PaginationCompactDisplay.displayName = NAME;
