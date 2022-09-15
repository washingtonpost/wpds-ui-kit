import * as React from "react";
import { styled } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "CarouselFooter";

const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
});

export type CarouselFooterProps = {
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof Container>;

export const CarouselFooter = React.forwardRef<
  HTMLDivElement,
  CarouselFooterProps
>(({ children, ...props }, ref) => {
  return (
    <Container {...props} ref={ref}>
      {children}
    </Container>
  );
});

CarouselFooter.displayName = NAME;
