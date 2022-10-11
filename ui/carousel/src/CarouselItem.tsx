import * as React from "react";
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
        "& > *": {
          outline: `2px solid ${theme.colors.cta}`,
          outlineOffset: "-2px",
          position: "relative",
          zIndex: 1,
        },
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
  ({ children, id, ...props }, ref) => {
    const internalRef = React.useRef(null);
    const [isShown, setIsShown] = React.useState(false);
    const { activeId, isTransitioning } = React.useContext(CarouselContext);

    React.useEffect(() => {
      if (!ref) return;
      typeof ref === "function"
        ? ref(internalRef.current)
        : (ref.current = internalRef.current);
    }, [ref, internalRef]);

    React.useEffect(() => {
      if (!isTransitioning) {
        setIsShown(isItemShown(internalRef));
      }
    }, [setIsShown, internalRef, isTransitioning]);

    return (
      <Container
        {...props}
        ref={internalRef}
        aria-hidden={isShown ? false : true}
        id={id}
        focused={id === activeId}
        role="group"
        aria-roledescription="slide"
      >
        {children}
      </Container>
    );
  }
);

CarouselItem.displayName = NAME;
