import React from "react";
import { PaginationNumericDisplay as Numeric } from "./PaginationNumericDisplay";
import { PaginationDescriptiveDisplay as Descriptive } from "./PaginationDescriptiveDisplay";
import { PaginationCompactDisplay as Compact } from "./PaginationCompactDisplay";
import { Container } from "../container";
import type * as WPDS from "../theme";

// import { PaginationContext } from "./PaginationRoot";

const NAME = "PaginationDisplay";

export type PaginationDisplayProps = {
  /** Function to change current page */
  changeCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  /** If compact variant */
  compact: boolean;
  /** Override CSS */
  css?: WPDS.CSS;
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

// PageNavigationButton
export const PaginationDisplay = React.forwardRef<
  HTMLButtonElement,
  PaginationDisplayProps
>(
  (
    {
      css,
      changeCurrentPage,
      compact,
      currentPage,
      endlessPagination,
      slug,
      totalPages,
      variant,
      ...props
    },
    ref
  ) => {
    // const { page, setPage, totalPages } = React.useContext(PaginationContext);

    return (
      <Container css={{ ...css }}>
        <Numeric
          changePage={changeCurrentPage}
          compact={variant === "compact"}
          currentPage={currentPage}
          endlessPagination={endlessPagination}
          slug={slug}
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
      </Container>
    );
  }
);

PaginationDisplay.displayName = NAME;
