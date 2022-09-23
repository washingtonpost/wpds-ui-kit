import React, { useEffect, useState } from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { CarouselContext } from "./CarouselRoot";

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
  parentRef?: React.RefObject<HTMLElement>;
} & React.ComponentPropsWithRef<typeof Container>;

export const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ children, parentRef, index, id, itemsShownPerPage, ...props }, ref) => {
    const [translateVal, setTranslateVal] = useState(0);
    const { itemsPerPage, page, setPage, activeId } =
      React.useContext(CarouselContext);
    const internalRef = React.useRef<HTMLDivElement | null>(null);
    const isTransitioning = React.useRef(false);

    useEffect(() => {
      setTranslateVal(page * itemsPerPage * 100);
    }, [page, itemsPerPage]);

    useEffect(() => {
      const isVisible = () => {
        if (
          parentRef &&
          parentRef.current &&
          internalRef &&
          internalRef.current
        ) {
          const box1coords = parentRef.current.getBoundingClientRect();
          const box2coords = internalRef.current.getBoundingClientRect();

          if (
            box2coords.right > box1coords.right ||
            box2coords.left < box1coords.left
          ) {
            return false;
          } else {
            return true;
          }
        }
        return false;
      };

      if (id === activeId && !isVisible() && !isTransitioning.current) {
        setPage(page + 1);
        isTransitioning.current = true;
      }
    }, [parentRef, internalRef, id, activeId, page, setPage, isTransitioning]);

    useEffect(() => {
      if (!internalRef || !internalRef.current) return;
      const el = internalRef.current;
      const handleTransitionEnd = () => {
        isTransitioning.current = false;
      };
      el.addEventListener("transitionend", handleTransitionEnd);
      return () => {
        el.removeEventListener("transitionend", handleTransitionEnd);
      };
    }, [internalRef, isTransitioning]);

    return (
      <Container
        {...props}
        ref={internalRef}
        css={{
          width: `calc(100%/${itemsShownPerPage})`,
          transform: `translateX(-${translateVal}%)`,
          transition: `transform ${theme.transitions.normal} ${theme.transitions.inOut}`,
        }}
        aria-hidden={true}
        id={id}
        focused={id === activeId}
      >
        {children}
      </Container>
    );
  }
);

CarouselItem.displayName = NAME;
