import React, { useEffect, useState } from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
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
  totalItems: number | undefined
): number => {
  // make sure we always show at least one item
  if (slidesPerPage < 1 || totalItems === undefined) {
    return 1;
  }

  // don't show more than the amount of pages we have
  if (slidesPerPage > totalItems) {
    return totalItems;
  }

  return slidesPerPage;
};

export const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ children, ...props }, ref) => {
    const [translateVal, setTranslateVal] = useState(0);
    const { itemsPerPage, totalItems, page } =
      React.useContext(CarouselContext);
    const itemsShownPerPage = getItemsShownPerPage(itemsPerPage, totalItems);

    useEffect(() => {
      setTranslateVal(page * itemsPerPage * 100);
    }, [page, itemsPerPage]);

    return (
      <Container
        {...props}
        ref={ref}
        css={{
          width: `calc(100%/${itemsShownPerPage})`,
          transform: `translateX(-${translateVal}%)`,
          transition: `transform ${theme.transitions.normal} ${theme.transitions.inOut}`,
        }}
      >
        {children}
      </Container>
    );
  }
);

CarouselItem.displayName = NAME;
