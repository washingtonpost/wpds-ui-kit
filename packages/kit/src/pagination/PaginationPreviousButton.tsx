import React from "react";
import { StyledButton } from "./paginationHelpers";
import { Button } from "../button";
import { Icon } from "../icon";
import { ChevronLeft } from "@washingtonpost/wpds-assets";
// import { PaginationContext } from "./PaginationRoot";
import type * as WPDS from "../theme";

const NAME = "PaginationPreviousButton";

export type PaginationPreviousButtonProps = {
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

export const PaginationPreviousButton = React.forwardRef<
  HTMLButtonElement,
  PaginationPreviousButtonProps
>(({ css, changePage, currentPage, slug, totalPages, ...props }, ref) => {
  // const { page, setPage, totalPages } = React.useContext(PaginationContext);

  const handleClick = () => {
    if (currentPage > 1) {
      return changePage(currentPage - 1);
    }
  };
  const firstPage = currentPage === 1;

  const href =
    firstPage || !slug?.length ? null : `${slug}?page=${currentPage - 1}`;

  const rel = !firstPage ? "prev" : "";

  return (
    <StyledButton
      aria-label="previous page"
      as="a"
      css={{
        ...css,
      }}
      density="compact"
      disabled={firstPage}
      href={href}
      icon="left"
      isOutline={false}
      onClick={handleClick}
      ref={ref}
      rel={rel}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      variant="secondary"
      {...props}
    >
      <Icon label="Previous" size="100">
        <ChevronLeft />
      </Icon>
    </StyledButton>
  );
});

PaginationPreviousButton.displayName = NAME;
