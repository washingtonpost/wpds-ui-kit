import React from "react";
import { StyledButton } from "./paginationHelpers";
import { Button } from "../button";
import { Icon } from "../icon";
import { ChevronRight } from "@washingtonpost/wpds-assets";
import { PaginationContext } from "./PaginationRoot";

const NAME = "PaginationNextButton";

export type PaginationNextButtonProps = React.ComponentPropsWithRef<
  typeof Button
>;

// PageNavigationButton
export const PaginationNextButton = React.forwardRef<
  HTMLButtonElement,
  PaginationNextButtonProps
>(
  (
    {
      css,
      density = "compact",
      icon = "right",
      variant = "secondary",
      ...props
    },
    ref
  ) => {
    const { page, setPage, slug, totalPages } =
      React.useContext(PaginationContext);

    const handleClick = () => {
      if (page < totalPages) {
        return setPage(page + 1);
      }
    };

    const lastPage = page === totalPages;
    const href = lastPage || !slug?.length ? null : `${slug}?page=${page + 1}`;
    const rel = !lastPage ? "next" : "";

    return (
      <StyledButton
        aria-label="next page"
        as="a"
        css={{
          ...css,
        }}
        density={density}
        disabled={lastPage}
        href={href}
        icon={icon}
        isOutline={false}
        ref={ref}
        rel={rel}
        onClick={handleClick}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        variant={variant}
        {...props}
      >
        <Icon label="Next" size="100">
          <ChevronRight />
        </Icon>
      </StyledButton>
    );
  }
);

PaginationNextButton.displayName = NAME;
