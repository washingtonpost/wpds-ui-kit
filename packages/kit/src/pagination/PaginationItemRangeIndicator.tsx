import React from "react";
import { StyledP } from "./paginationHelpers";
import { styled } from "../theme";
import type * as WPDS from "../theme";
import { PaginationContext } from "./PaginationRoot";

const StyledItemRangeIndicator = styled("div", {
  "@sm": {
    display: "none",
  },
});

const NAME = "PaginationItemRangeIndicator";

export type PaginationItemRangeIndicatorProps = {
  /** Override CSS */
  css?: WPDS.CSS;
  /** Number of results */
  items: number;
  /** Whether to show total variation in item range indicator */
  showTotal: boolean;
};

// PageNavigationButton
export const PaginationItemRangeIndicator = React.forwardRef<
  HTMLDivElement,
  PaginationItemRangeIndicatorProps
>(({ css, items, showTotal }, ref) => {
  const { page, endlessPagination, showItems, totalPages } =
    React.useContext(PaginationContext);
  if (endlessPagination || !showItems) return null;
  const range = getNumOfItems(page, showTotal, items, totalPages);

  return (
    <StyledItemRangeIndicator css={{ ...css }} ref={ref}>
      <StyledP>Showing {range} items</StyledP>
    </StyledItemRangeIndicator>
  );
});

const getNumOfItems = (page, showTotal, items, totalPages) => {
  const firstNumber = (page - 1) * 10 + 1;
  const secondNumber = page * 10;

  if (page === 1) {
    if (items < 10) {
      return showTotal ? `1 - ${items} of ${items}` : `1 - ${items}`;
    }
    return showTotal ? `1 - 10 of ${items}` : "1 - 10";
  }

  if (page === totalPages) {
    return showTotal
      ? `${firstNumber} - ${items} of ${items}`
      : `${firstNumber} - ${items}`;
  }

  return showTotal
    ? `${firstNumber} - ${secondNumber} of ${items}`
    : `${firstNumber} - ${secondNumber}`;
};

PaginationItemRangeIndicator.displayName = NAME;
