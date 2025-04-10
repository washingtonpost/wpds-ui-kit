import * as React from "react";

import { styled } from "../theme";
import type * as WPDS from "../theme";

type PaginationContextProps = {
  /** Whether or not endless pagination */
  endlessPagination: boolean;
  /** The current page */
  page: number;
  /** Function to change current page */
  setPage: React.Dispatch<React.SetStateAction<number>>;
  /** Whether to show item range indicator */
  showItems: boolean;
  /** Current page slug */
  slug: string;
  /** Total number of pages to display */
  totalPages: number;
  /** Component variant */
  variant: string;
};

export const PaginationContext = React.createContext(
  {} as PaginationContextProps
);

const NAME = "PaginationRoot";

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

export type PaginationRootProps = {
  /** Override CSS */
  css?: WPDS.CSS;
  /** Whether or not endless pagination */
  endlessPagination: boolean;
  /** The current page */
  page: number; // CHANGE THIS TO PAGE
  /** Function to change current page */
  setPage: React.Dispatch<React.SetStateAction<number>>;
  /** Whether to show item range indicator */
  showItems: boolean;
  /** Current page slug */
  slug: string;
  /** Total number of pages to display */
  totalPages: number;
  /** Component variant */
  variant: string;
} & React.ComponentPropsWithRef<typeof PaginationContainer>;

export const PaginationRoot = React.forwardRef<
  HTMLDivElement,
  PaginationRootProps
>(
  (
    {
      children,
      css,
      endlessPagination, // should the user control this?
      page,
      setPage,
      showItems,
      slug,
      totalPages,
      variant,
    },
    ref
  ) => {
    return (
      <PaginationContext.Provider
        value={{
          endlessPagination,
          page,
          setPage,
          showItems,
          slug,
          totalPages,
          variant,
        }}
      >
        <PaginationContainer css={{ ...css }} ref={ref} showItems={showItems}>
          {children}
        </PaginationContainer>
      </PaginationContext.Provider>
    );
  }
);

PaginationRoot.displayName = NAME;
