import { PaginationDisplay } from "./PaginationDisplay";
import { PaginationItemRangeIndicator } from "./PaginationItemRangeIndicator";
import { PaginationNextButton } from "./PaginationNextButton";
import { PaginationPreviousButton } from "./PaginationPreviousButton";
import { PaginationRoot } from "./PaginationRoot";

type PaginationProps = {
  Root: typeof PaginationRoot;
  Display: typeof PaginationDisplay;
  ItemRangeIndicator: typeof PaginationItemRangeIndicator;
  PreviousButton: typeof PaginationPreviousButton;
  NextButton: typeof PaginationNextButton;
};

/**
 * Pagination
 */

export const Pagination: PaginationProps = {
  Root: PaginationRoot,
  Display: PaginationDisplay,
  ItemRangeIndicator: PaginationItemRangeIndicator,
  PreviousButton: PaginationPreviousButton,
  NextButton: PaginationNextButton,
};
