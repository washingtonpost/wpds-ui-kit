import React, { useCallback, useEffect } from "react";
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
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
} & React.ComponentPropsWithRef<typeof Container>;

export const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ children, index, id, itemsShownPerPage, onKeyDown, ...props }, ref) => {
    const { page, activeId, translateVal } = React.useContext(CarouselContext);
    const isShown = isItemShown(index, page, itemsShownPerPage);

    const handleKeyPress = useCallback(
      (event) => {
        onKeyDown && onKeyDown(event);
      },
      [onKeyDown]
    );

    useEffect(() => {
      window.addEventListener("keydown", handleKeyPress);

      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };
    }, [handleKeyPress]);

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
