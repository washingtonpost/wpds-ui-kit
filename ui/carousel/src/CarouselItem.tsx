import * as React from "react";
import { styled } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { CarouselContext } from "./CarouselRoot";

const NAME = "CarouselItem";

const Container = styled("div", {
  flexShrink: "0",
});

export type CarouselItemProps = {
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof Container>;

const getItemsShownPerPage = (
  slidesPerPage: number,
  totalPages: number | undefined
): number => {
  // make sure we always show at least one item
  if (slidesPerPage < 1 || totalPages === undefined) {
    return 1;
  }

  // don't show more than the amount of pages we have
  if (slidesPerPage > totalPages) {
    return totalPages;
  }

  return slidesPerPage;
};

export const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ children, ...props }, ref) => {
    const { slidesPerPage, totalPages } = React.useContext(CarouselContext);
    const itemsShownPerPage = getItemsShownPerPage(slidesPerPage, totalPages);

    return (
      <Container
        {...props}
        ref={ref}
        css={{ width: `calc(100%/${itemsShownPerPage})` }}
      >
        {children}
      </Container>
    );
  }
);

CarouselItem.displayName = NAME;
