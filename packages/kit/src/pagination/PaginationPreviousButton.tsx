import React from "react";
import { StyledButton } from "./paginationHelpers";
import { Button } from "../button";
import { Icon } from "../icon";
import { ChevronLeft } from "@washingtonpost/wpds-assets";
import { PaginationContext } from "./PaginationRoot";

const NAME = "PaginationPreviousButton";

export type PaginationPreviousButtonProps = React.ComponentPropsWithRef<
  typeof Button
>;

// PageNavigationButon
export const PaginationPreviousButton = React.forwardRef<
  HTMLButtonElement,
  PaginationPreviousButtonProps
>(
  (
    {
      css,
      density = "compact",
      icon = "left",
      variant = "secondary",
      ...props
    },
    ref
  ) => {
    const { page, setPage, slug } = React.useContext(PaginationContext);

    const handleClick = () => {
      if (page > 1) {
        return setPage(page - 1);
      }
    };

    const firstPage = page === 1;
    const href = firstPage || !slug?.length ? null : `${slug}?page=${page - 1}`;
    const rel = !firstPage ? "prev" : "";

    return (
      <StyledButton
        aria-label="previous page"
        as="a"
        css={{
          ...css,
        }}
        density={density}
        disabled={firstPage}
        href={href}
        icon={icon}
        isOutline={false}
        onClick={handleClick}
        ref={ref}
        rel={rel}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        variant={variant}
        {...props}
      >
        <Icon label="Previous" size="100">
          <ChevronLeft />
        </Icon>
      </StyledButton>
    );
  }
);

PaginationPreviousButton.displayName = NAME;
