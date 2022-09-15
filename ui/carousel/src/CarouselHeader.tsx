import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "CarouselHeader";

const Container = styled("div", {
  display: "flex",
  marginBlockEnd: theme.space["100"],
});

export type CarouselHeaderProps = {
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof Container>;

export const CarouselHeader = React.forwardRef<
  HTMLDivElement,
  CarouselHeaderProps
>(({ children, ...props }, ref) => {
  return (
    <Container {...props} ref={ref}>
      {children}
    </Container>
  );
});

CarouselHeader.displayName = NAME;
