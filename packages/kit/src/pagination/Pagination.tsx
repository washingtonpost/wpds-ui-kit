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
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<"div">;

const StyledP = styled("p", {
  fontFamily: theme.fonts.meta,
  color: "$gray80",
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
  return <StyledP showItems={showItems}>Showing {range} items</StyledP>;
};

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

  return (
    <StyledPageNavigationButton
      as="a"
      density="compact"
      disabled={disabled}
      // href={firstPage ? null : prevHref}
      icon={left ? "left" : "right"}
      isOutline={false}
      onClick={left ? handlePreviousClick : handleNextClick}
      // rel={firstPage ? "" : "prev"}
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

const PageButton = ({ changePage, currentPage, num }) => {
  const selected = currentPage === num;

  return (
    <StyledPageButton
      as="a"
      density="compact"
      // disabled={firstPage} // no disabled on a tags
      // href={slug} // update URL as well, and canonical in head
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
        justifyContent: "space-between",
        width: "100%",
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

const Numeric = ({ changePage, currentPage, totalPages, variant }) => {
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
  // pages to show would return [2, 3, 4, 5] (for example)
  const pagesToShow = [];
  // which set of numbers we're looping through
  let arr = [];
  if (beginning) {
    arr = pages.slice(1, 5);
  } else if (ending) {
    arr = pages.slice(totalPages - 5, totalPages - 1);
  } else {
    arr = pages.slice(start, end);
  }
  return (
    <>
      <PageButton changePage={changePage} currentPage={currentPage} num={1} />
      {beginning ? (
        arr.map((num) => (
          <PageButton
            changePage={changePage}
            currentPage={currentPage}
            num={num}
          />
        ))
      ) : (
        <PageOverflowButton
          changePage={changePage}
          currentPage={currentPage}
          left={true}
        />
      )}
      {!beginning && !ending
        ? arr.map((num) => (
            <PageButton
              changePage={changePage}
              currentPage={currentPage}
              num={num}
            />
          ))
        : null}
      {ending ? (
        arr.map((num) => (
          <PageButton
            changePage={changePage}
            currentPage={currentPage}
            num={num}
          />
        ))
      ) : (
        <PageOverflowButton
          changePage={changePage}
          currentPage={currentPage}
          right={true}
        />
      )}
      <PageButton
        changePage={changePage}
        currentPage={currentPage}
        num={totalPages}
      />
    </>
  );
};

const StyledDescriptive = styled("div", {
  variants: {
    descriptive: {
      false: {
        display: "none",
      },
    },
  },
});

const Descriptive = ({ currentPage, totalPages, variant }) => {
  const descriptive = variant === "descriptive";
  return (
    <StyledDescriptive descriptive={descriptive}>
      <StyledP>
        {currentPage} of {totalPages} pages
      </StyledP>
    </StyledDescriptive>
  );
};

const StyledCompact = styled("div", {
  variants: {
    compact: {
      false: {
        display: "none",
      },
    },
  },
});

const Compact = ({ currentPage, totalPages, variant }) => {
  const compact = variant === "compact";
  return (
    <StyledCompact compact={compact}>
      <StyledP>
        {currentPage}/{totalPages}
      </StyledP>
    </StyledCompact>
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
      slug,
      totalPages,
      variant, // variant can be numeric, descriptive, compact, no display
    },
    ref
  ) => {
    const showItems = variant === "numeric" || variant === "descriptive";
    const numOfItems = getNumOfItems(currentPage, showTotal, items, totalPages);

    return (
      <PaginationContainer showItems={showItems}>
        <ItemRangeIndicator range={numOfItems} showItems={showItems} />
        <DisplayContainer>
          <PageNavigationButton
            changePage={changeCurrentPage}
            currentPage={currentPage}
            left={true}
            right={false}
            totalPages={totalPages}
          />
          <Numeric
            changePage={changeCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
            variant={variant}
          />
          <Descriptive
            currentPage={currentPage}
            totalPages={totalPages}
            variant={variant}
          />
          <Compact
            currentPage={currentPage}
            totalPages={totalPages}
            variant={variant}
          />
          <PageNavigationButton
            changePage={changeCurrentPage}
            currentPage={currentPage}
            left={false}
            right={true}
            totalPages={totalPages}
          />
        </DisplayContainer>
      </PaginationContainer>
    );
  }
);

Pagination.displayName = NAME;
