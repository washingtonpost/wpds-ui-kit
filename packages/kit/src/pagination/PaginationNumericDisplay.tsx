import React from "react";
import { HideOnSmall } from "./paginationHelpers";
import { PaginationPageButton as PageButton } from "./PaginationPageButton";
import { PaginationPreviousPageOverflowButton as PreviousOverflowButton } from "./PaginationPreviousPageOverflowButton";
import { PaginationNextPageOverflowButton as NextOverflowButton } from "./PaginationNextPageOverflowButton";

const NAME = "PaginationNumericDisplay";

export type PaginationNumericDisplayProps = {
  /** Function to change current page */
  changePage: React.Dispatch<React.SetStateAction<number>>;
  /** If compact variant */
  compact: boolean;
  /** The current page */
  currentPage: number;
  /** Whether or not endless pagination */
  endlessPagination: boolean;
  /** Current page slug */
  slug: string;
  /** Total number of pages to display */
  totalPages: number;
  /** Component variant */
  variant: string;
};

export const PaginationNumericDisplay = ({
  changePage,
  compact,
  currentPage,
  endlessPagination,
  slug,
  totalPages,
  variant,
}) => {
  const lastPage = currentPage === totalPages;
  const numeric = variant === "numeric";
  if (!numeric) return null;

  const pagesToShow = getPagesToShow(currentPage, totalPages);

  return (
    <HideOnSmall compact={compact}>
      {/* first page */}
      <PageButton
        changePage={changePage}
        currentPage={currentPage}
        num={1}
        slug={slug}
      />
      <PreviousOverflowButton
        changePage={changePage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      {pagesToShow.length > 0
        ? pagesToShow.map((num) => (
            <PageButton
              changePage={changePage}
              currentPage={currentPage}
              key={num}
              num={num}
              slug={slug}
            />
          ))
        : null}
      <NextOverflowButton
        changePage={changePage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      {/* last page */}
      {/* if 15 total pages or fewer or on the last page, show button */}
      {!endlessPagination &&
      (pagesToShow.length > 0 ||
        (!endlessPagination && totalPages > 1) ||
        (lastPage && totalPages > 1)) ? (
        <PageButton
          changePage={changePage}
          currentPage={currentPage}
          num={totalPages}
          slug={slug}
        />
      ) : null}
    </HideOnSmall>
  );
};

const getPagesToShow = (currentPage: number, totalPages: number) => {
  // Number of pages (buttons) to show at beginning and end of pagination
  const PAGERANGE = 5;
  // Sequence generator (range), thanks, MDN
  const range = (start: number, stop: number, step: number) =>
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
  const beginning = currentPage < PAGERANGE;
  const ending = currentPage > totalPages - 4;
  // pages we show in the component, ex: < 1 2 3 4 5 ... 15 >
  // pagesToShow would return the set of numbers we're looping through [2, 3, 4, 5] (for example)
  let pagesToShow;
  if (totalPages < 8) {
    pagesToShow = pages.slice(1, -1);
  } else {
    if (beginning) {
      pagesToShow = pages.slice(1, PAGERANGE);
    } else if (ending) {
      pagesToShow = pages.slice(totalPages - PAGERANGE, totalPages - 1);
    } else {
      pagesToShow = pages.slice(start, end);
    }
  }

  return pagesToShow;
};

PaginationNumericDisplay.displayName = NAME;
