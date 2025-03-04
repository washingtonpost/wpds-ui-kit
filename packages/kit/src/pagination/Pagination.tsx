import * as React from "react";

import { Button } from "../button";
import { Icon } from "../icon";
import { styled, theme } from "../theme";
import {
  ChevronLeft,
  ChevronRight,
  DotsHorizontal,
} from "@washingtonpost/wpds-assets";

const NAME = "Pagination";

export type PaginationProps = {
  /** Function to change current page */
  changeCurrentPage: () => void;
  /** The current page */
  currentPage: number;
  /** Number of results */
  items: number;
  /** Whether to show total variation in Item range indicator */
  showTotal: boolean;
  /** Current page slug */
  slug: string;
  /** Number of pages of content */
  totalPages: number;
  /** Component variant */
  variant: string;
} & React.ComponentPropsWithRef<"div">;

const StyledP = styled("p", {
  fontFamily: theme.fonts.meta,
  color: "$gray80",
});

const StyledPageNavigationButton = styled(Button, {
  width: "$250",
  height: "$200",
  minWidth: "$250",
  paddingRight: 0,
  paddingLeft: 0,
  variants: {
    disabled: {
      true: {
        color: theme.colors.onDisabled,
        pointerEvents: "none",
      },
    },
  },
});

const PageNavigationButton = ({
  changePage,
  currentPage,
  left,
  right,
  // slug,
  totalPages,
}) => {
  function handlePreviousClick() {
    if (currentPage > 1) {
      return changePage(currentPage - 1);
    }
  }

  function handleNextClick() {
    if (currentPage < totalPages) {
      return changePage(currentPage + 1);
    }
  }

  const disabled =
    (left && currentPage === 1) || (right && currentPage === totalPages);

  const firstPage = currentPage === 1;
  const lastPage = currentPage === totalPages;
  /**
   * If left navigation button and on the first page, return empty strings
   * If right navigation button and on the last page, return empty strings
   * Otherwise:
   *  If currentPage is 2 and left navigation button, return "people/author/?page=1", for example
   *  If currentPage is 2 and right navigation button, return "people/author/?page=3"
   */
  // const prevHref = left && firstPage ? "" : `${slug}?page=${currentPage - 1}`;
  // const nextHref = right && lastPage ? "" : `${slug}?page=${currentPage + 1}`;

  const prevRel = left && !firstPage ? "prev" : "";
  const nextRel = right && !lastPage ? "next" : "";

  return (
    <StyledPageNavigationButton
      as="a"
      density="compact"
      disabled={disabled}
      // href={left ? prevHref : nextHref}
      icon={left ? "left" : "right"}
      isOutline={false}
      onClick={left ? handlePreviousClick : handleNextClick}
      rel={left ? prevRel : nextRel}
      variant="secondary"
    >
      <Icon label="" size="100">
        {left ? <ChevronLeft /> : <ChevronRight />}
      </Icon>
    </StyledPageNavigationButton>
  );
};

const StyledPageOverflowButton = styled(Button, {
  width: "$200",
  height: "$200",
  padding: "$075 $050 $025 $050 !important",
  fontWeight: theme.fontWeights.regular,
});

const PageOverflowButton = ({ changePage, currentPage, left }) => {
  function handlePreviousClick() {
    if (currentPage > 3) {
      // go back 3 pages
      return changePage(currentPage - 3);
    }
    // ask about this
    return changePage(1);
  }

  function handleNextClick() {
    // go forward 3 pages
    return changePage(currentPage + 3);
  }

  // should the page overflow button, the ellipses, have an href?

  return (
    <StyledPageOverflowButton
      density="compact"
      disabled={false}
      icon="center"
      isOutline={false}
      onClick={left ? handlePreviousClick : handleNextClick}
      variant="secondary"
    >
      <Icon label="" size="100">
        <DotsHorizontal />
      </Icon>
    </StyledPageOverflowButton>
  );
};

const StyledPageButton = styled(Button, {
  height: "$200",
  width: "$200",
  fontWeight: theme.fontWeights.regular,
  fontSize: "$087",
  lineHeight: "16px",
  textDecoration: "none",
  variants: {
    selected: {
      true: {
        fontWeight: theme.fontWeights.bold,
        pointerEvents: "none",
        backgroundColor: theme.colors.disabled,
      },
    },
  },
});

const PageButton = ({ changePage, currentPage, num, slug }) => {
  const selected = currentPage === num;

  return (
    <StyledPageButton
      as="a"
      density="compact"
      // href={`${slug}?page=${num}`} // update URL as well, and canonical in head
      isOutline={false}
      key=""
      onClick={() => changePage(num)}
      selected={selected}
      variant="secondary"
    >
      {num}
    </StyledPageButton>
  );
};

const PaginationContainer = styled("div", {
  gap: "$050",
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  variants: {
    showItems: {
      true: {
        "@notSm": {
          justifyContent: "space-between",
          width: "100%",
        },
      },
    },
  },
});

const DisplayContainer = styled("div", {
  gap: "$025",
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
});

const HideOnSmall = styled("div", {
  fontFamily: theme.fonts.meta,
  color: "$gray80",
  display: "flex",
  variants: {
    compact: {
      false: {
        // don't display other variants on mobile/smaller screens
        "@sm": {
          display: "none",
        },
      },
    },
  },
});

const Numeric = ({
  changePage,
  compact,
  currentPage,
  endlessPagination,
  // slug,
  totalPages,
  variant,
}) => {
  const lastPage = currentPage === totalPages;
  const numeric = variant === "numeric";
  if (!numeric) return null;
  // Sequence generator (range), thanks, MDN
  const range = (start, stop, step) =>
    Array.from(
      { length: Math.ceil((stop - start) / step) },
      (_, i) => start + i * step
    );
  // Generate sequence of numbers from 1 (inclusive) to total pages (inclusive), incrementing by 1
  const pages = range(1, totalPages + 1, 1);
  // For returning 1 number on either side,
  // ex: 5 selected, return [4, 5, 6]
  const start = currentPage - 2;
  const end = currentPage + 1;
  // Beginning and ending numbers of pages array
  const beginning = currentPage < 5;
  const ending = currentPage > totalPages - 5;
  // pages we show in the component, ex: < 1 2 3 4 5 ... 15 >
  // pagesToShow would return the set of numbers we're looping through [2, 3, 4, 5] (for example)
  let pagesToShow;
  if (beginning) {
    pagesToShow = pages.slice(1, 5);
  } else if (ending) {
    pagesToShow = pages.slice(totalPages - 5, totalPages - 1);
  } else {
    pagesToShow = pages.slice(start, end);
  }
  return (
    <HideOnSmall compact={compact}>
      {/* first page */}
      <PageButton
        changePage={changePage}
        currentPage={currentPage}
        num={1}
        // slug={slug}
      />
      {!beginning ? (
        <PageOverflowButton
          changePage={changePage}
          currentPage={currentPage}
          left={true}
        />
      ) : null}
      {pagesToShow.map((num) => (
        <PageButton
          changePage={changePage}
          currentPage={currentPage}
          key={num}
          num={num}
          // slug={slug}
        />
      ))}
      {!ending ? (
        <PageOverflowButton
          changePage={changePage}
          currentPage={currentPage}
          left={false}
        />
      ) : null}
      {/* last page */}
      {/* if 15 total pages or fewer or on the last page, show button */}
      {!endlessPagination || lastPage ? (
        <PageButton
          changePage={changePage}
          currentPage={currentPage}
          num={totalPages}
          // slug={slug}
        />
      ) : null}
    </HideOnSmall>
  );
};

const Descriptive = ({ compact, currentPage, totalPages, variant }) => {
  const descriptive = variant === "descriptive";

  if (!descriptive) return null;

  return (
    <HideOnSmall compact={compact}>
      <StyledP>{`${currentPage} of ${totalPages} pages`}</StyledP>
    </HideOnSmall>
  );
};

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

const Compact = ({ currentPage, endlessPagination, totalPages, variant }) => {
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

const StyledItemRangeIndicator = styled("div", {
  "@sm": {
    display: "none",
  },
  variants: {
    showItems: {
      false: {
        display: "none",
      },
    },
  },
});

// Item Range Indicator
const ItemRangeIndicator = ({ range, showItems }) => {
  return (
    <StyledItemRangeIndicator showItems={showItems}>
      <StyledP>Showing {range} items</StyledP>
    </StyledItemRangeIndicator>
  );
};

const getNumOfItems = (currentPage, showTotal, items, totalPages) => {
  const firstNumber = (currentPage - 1) * 10 + 1;
  const secondNumber = currentPage * 10;

  if (currentPage === 1) {
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

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      changeCurrentPage,
      currentPage,
      items,
      showTotal,
      // slug,
      totalPages,
      variant, // variant can be numeric, descriptive, compact, no display
    },
    ref
  ) => {
    const showItems = variant === "numeric" || variant === "descriptive";
    const numOfItems = getNumOfItems(currentPage, showTotal, items, totalPages);
    const endlessPagination = totalPages > 15;

    return (
      <PaginationContainer showItems={showItems}>
        <ItemRangeIndicator range={numOfItems} showItems={showItems} />
        <DisplayContainer>
          <PageNavigationButton
            changePage={changeCurrentPage}
            currentPage={currentPage}
            left={true}
            right={false}
            // slug={slug}
            totalPages={totalPages}
          />
          <Numeric
            changePage={changeCurrentPage}
            compact={variant === "compact"}
            currentPage={currentPage}
            endlessPagination={endlessPagination}
            // slug={slug}
            totalPages={totalPages}
            variant={variant}
          />
          <Descriptive
            compact={variant === "compact"}
            currentPage={currentPage}
            totalPages={totalPages}
            variant={variant}
          />
          <Compact
            currentPage={currentPage}
            endlessPagination={endlessPagination}
            totalPages={totalPages}
            variant={variant}
          />
          <PageNavigationButton
            changePage={changeCurrentPage}
            currentPage={currentPage}
            left={false}
            right={true}
            // slug={slug}
            totalPages={totalPages}
          />
        </DisplayContainer>
      </PaginationContainer>
    );
  }
);

Pagination.displayName = NAME;
