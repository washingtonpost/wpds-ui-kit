import React from "react";
import { StyledButton } from "./paginationHelpers";
import { Button } from "../button";
import type * as WPDS from "../theme";

const NAME = "PaginationPageButton";

export type PaginationPageButtonProps = {
  /** Function to change current page */
  changePage: React.Dispatch<React.SetStateAction<number>>;
  /** Override CSS */
  css?: WPDS.CSS;
  /** The current page */
  currentPage: number;
  /** Page number */
  num: number;
  /** Current page slug */
  slug: string;
} & React.ComponentPropsWithRef<typeof Button>;

export const PaginationPageButton = ({
  changePage,
  css,
  currentPage,
  num,
  slug,
}: PaginationPageButtonProps) => {
  const selected = currentPage === num;
  const href = !slug?.length ? null : `${slug}?page=${num}`;
  return (
    <StyledButton
      as="a"
      aria-label={`page ${num}`}
      css={{
        ...css,
      }}
      density="compact"
      href={href} // update URL as well, and canonical in head
      isOutline={false}
      key=""
      onClick={() => changePage(num)}
      selected={selected}
      variant="secondary"
    >
      {num}
    </StyledButton>
  );
};

PaginationPageButton.displayName = NAME;
