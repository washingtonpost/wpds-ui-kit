import * as React from "react";
import { styled, theme } from "../theme";
import type * as WPDS from "../theme";

const NAME = "CarouselHeaderActions";

const Container = styled("div", {
  display: "flex",
  gap: theme.space["025"],
  "@sm": {
    display: "none",
  },
});

export type CarouselHeaderActionsProps = {
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof Container>;

export const CarouselHeaderActions = React.forwardRef<
  HTMLDivElement,
  CarouselHeaderActionsProps
>(({ children, ...props }, ref) => {
  return (
    <Container {...props} ref={ref}>
      {children}
    </Container>
  );
});

CarouselHeaderActions.displayName = NAME;
