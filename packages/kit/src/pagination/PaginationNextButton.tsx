import React from "react";
import { Button } from "../button";
// import { Button } from "@washingtonpost/wpds-ui-kit";
import { Icon } from "../icon";
import { ChevronRight } from "@washingtonpost/wpds-assets";
import { styled, theme } from "../theme";
import type * as WPDS from "../theme";
// import { PaginationContext } from "./PaginationRoot";

const NAME = "PaginationNextButton";

export const StyledButton = styled(Button, {
  variants: {
    disabled: {
      true: {
        color: theme.colors.onDisabled,
        pointerEvents: "none",
      },
    },
  },
});

export type PaginationNextButtonProps = {
  /** Function to change current page */
  changePage: React.Dispatch<React.SetStateAction<number>>;
  /** Override CSS */
  css?: WPDS.CSS;
  /** The current page */
  currentPage: number;
  /** Current page slug */
  slug: string;
  /** Total number of pages to display */
  totalPages: number;
} & React.ComponentPropsWithRef<typeof Button>;

// PageNavigationButton
export const PaginationNextButton = React.forwardRef<
  HTMLButtonElement,
  PaginationNextButtonProps
>(({ css, changePage, currentPage, slug, totalPages, ...props }, ref) => {
  // const { page, setPage, totalPages } = React.useContext(PaginationContext);

  const handleClick = () => {
    if (currentPage < totalPages) {
      return changePage(currentPage + 1);
    }
  };

  const isDisabled = currentPage === totalPages;

  const lastPage = currentPage === totalPages;

  const href = lastPage ? "" : `${slug}?page=${currentPage + 1}`;
  const rel = !lastPage ? "next" : "";

  return (
    <StyledButton
      aria-label="next page"
      as="a"
      css={{
        width: "$250",
        height: "$200",
        minWidth: "$250",
        paddingRight: 0,
        paddingLeft: 0,
        ...css,
      }}
      density="compact"
      disabled={isDisabled}
      href={href}
      icon="right"
      isOutline={false}
      ref={ref}
      rel={rel}
      onClick={handleClick}
      variant="secondary"
      {...props}
    >
      <Icon label="Next" size="100">
        <ChevronRight />
      </Icon>
    </StyledButton>
  );
});

PaginationNextButton.displayName = NAME;
