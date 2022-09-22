import React, { useEffect, useState } from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { CarouselContext } from "./CarouselRoot";

import { isItemShown } from "./utils";

const NAME = "CarouselItem";

const Container = styled("div", {
  flexShrink: "0",
  variants: {
    focused: {
      true: {
        border: "1px solid blue",
      },
      false: {},
    },
  },
});

export type CarouselItemProps = {
  css?: WPDS.CSS;
  id?: string;
  index?: number;
  itemsShownPerPage?: number;
} & React.ComponentPropsWithRef<typeof Container>;

export const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ children, index, id, itemsShownPerPage, ...props }, ref) => {
    const [translateVal, setTranslateVal] = useState(0);
    const { itemsPerPage, page, activeId } = React.useContext(CarouselContext);
    const isShown = isItemShown(index, page, itemsShownPerPage);

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
        aria-hidden={isShown ? false : true}
        id={id}
        focused={id === activeId}
      >
        {children}
      </Container>
    );
  }
);

CarouselItem.displayName = NAME;
