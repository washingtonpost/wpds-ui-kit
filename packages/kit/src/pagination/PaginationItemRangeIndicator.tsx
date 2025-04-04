import React from "react";
import { StyledP } from "./paginationHelpers";
import { styled } from "../theme";
import type * as WPDS from "../theme";
// import { PaginationContext } from "./PaginationRoot";

const StyledItemRangeIndicator = styled("div", {
  "@sm": {
    display: "none",
  },
  variants: {
    endlessPagination: {
      true: {
        display: "none",
      },
    },
    showItems: {
      false: {
        display: "none",
      },
    },
  },
});

const NAME = "PaginationItemRangeIndicator";

export type PaginationItemRangeIndicatorProps = {
  /** Override CSS */
  css?: WPDS.CSS;
  /** The current page */
  currentPage: number;
  /** Whether or not endless pagination */
  endlessPagination: boolean;
  /** Whether to show total variation in item range indicator */
  showTotal: boolean;
  /** Number of results */
  items: number;
  /** Total number of pages to display */
  totalPages: number;
  /** Whether to show item range indicator */
  showItems: boolean;
};

// PageNavigationButton
export const PaginationItemRangeIndicator = React.forwardRef<
  HTMLButtonElement,
  PaginationItemRangeIndicatorProps
>(
  (
    {
      css,
      currentPage,
      endlessPagination,
      showTotal,
      items,
      totalPages,
      showItems,
      ...props
    },
    ref
  ) => {
    // const { page, setPage, totalPages } = React.useContext(PaginationContext);
    const range = getNumOfItems(currentPage, showTotal, items, totalPages);

    return (
      <StyledItemRangeIndicator
        css={{ ...css }}
        endlessPagination={endlessPagination}
        showItems={showItems}
      >
        <StyledP>Showing {range} items</StyledP>
      </StyledItemRangeIndicator>
    );
  }
);

const getNumOfItems = (currentPage, showTotal, items, totalPages) => {
  const firstNumber = (currentPage - 1) * 10 + 1;
  const secondNumber = currentPage * 10;

  if (currentPage === 1) {
    if (items < 10) {
      return showTotal ? `1 - ${items} of ${items}` : `1 - ${items}`;
    }
    return showTotal ? `1 - 10 of ${items}` : "1 - 10";
  }

  if (currentPage === totalPages) {
    return showTotal
      ? `${firstNumber} - ${items} of ${items}`
      : `${firstNumber} - ${items}`;
  }

  return showTotal
    ? `${firstNumber} - ${secondNumber} of ${items}`
    : `${firstNumber} - ${secondNumber}`;
};

PaginationItemRangeIndicator.displayName = NAME;
