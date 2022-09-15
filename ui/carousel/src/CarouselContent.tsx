import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { CarouselContext } from "./CarouselRoot";

const NAME = "CarouselContent";

const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBlockEnd: theme.space["100"],
  overflow: "hidden",
});

export type CarouselContentProps = {
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof Container>;

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  CarouselContentProps
>(({ children, ...props }, ref) => {
  const { setTotalPages } = React.useContext(CarouselContext);

  React.useEffect(() => {
    const totalPages = React.Children.count(children);
    setTotalPages(totalPages);
  }, [children, setTotalPages]);

  return (
    <Container {...props} ref={ref}>
      {children}
    </Container>
  );
});

CarouselContent.displayName = NAME;
