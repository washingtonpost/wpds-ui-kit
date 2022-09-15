import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { CarouselContext } from "./CarouselRoot";

const NAME = "CarouselContent";

const Container = styled("div", {
  border: `1px dotted ${theme.colors.accessible}`,
  color: theme.colors.primary,
  display: "flex",
  alignItems: "center",
  padding: theme.space["025"],
  paddingTop: theme.space["150"],
  overflow: "hidden",
  position: "relative",
  "&:before": {
    color: theme.colors.accessible,
    display: "block",
    content: NAME,
    fontSize: theme.fontSizes["075"],
    position: "absolute",
    insetBlockStart: theme.space["025"],
    insetInlineStart: theme.space["025"],
  },
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
