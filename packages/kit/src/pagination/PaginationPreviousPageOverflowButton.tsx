import React from "react";
import { StyledButton } from "./paginationHelpers";
import { Icon } from "../icon";
import { DotsHorizontal } from "@washingtonpost/wpds-assets";

const NAME = "PaginationPreviousPageOverflowButton";

export type PaginationPreviousPageOverflowButtonProps = {
  /** Function to change current page */
  changePage: React.Dispatch<React.SetStateAction<number>>;
  /** The current page */
  currentPage: number;
  /** Total number of pages to display */
  totalPages: number;
};

export const PaginationPreviousPageOverflowButton = ({
  changePage,
  currentPage,
  totalPages,
}: PaginationPreviousPageOverflowButtonProps) => {
  function handleClick() {
    if (currentPage > 3) {
      // go back 3 pages
      return changePage(currentPage - 3);
    }
    // ask about this
    return changePage(1);
  }

  const isHidden = totalPages > 7 && currentPage < 5;

  // should the page overflow button, the ellipses, have an href?

  return (
    <StyledButton
      css={{
        width: "$200",
        height: "$200",
        padding: "$075 $050 $025 $050 !important",
      }}
      density="compact"
      disabled={false}
      hidden={isHidden}
      icon="center"
      isOutline={false}
      onClick={handleClick}
      variant="secondary"
    >
      <Icon label="" size="100">
        <DotsHorizontal />
      </Icon>
    </StyledButton>
  );
};

PaginationPreviousPageOverflowButton.displayName = NAME;
