import * as React from "react";
import { styled } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "CarouselHeaderContent";

const Container = styled("div", {
  flex: "1",
});

export type CarouselHeaderContentProps = {
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof Container>;

export const CarouselHeaderContent = React.forwardRef<
  HTMLDivElement,
  CarouselHeaderContentProps
>(({ children, ...props }, ref) => {
  return (
    <Container {...props} ref={ref}>
      {children}
    </Container>
  );
});

CarouselHeaderContent.displayName = NAME;
