import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "CarouselFooter";

const Container = styled("div", {
  border: `1px dotted ${theme.colors.accessible}`,
  backgroundImage:
    "linear-gradient(90deg, transparent, transparent 50%, rgb(255 0 0) 50%, rgb(255 0 0) calc(50% + 1px), transparent calc(50% + 1px))",
  backgroundRepeat: "no-repeat",
  color: theme.colors.primary,
  display: "flex",
  justifyContent: "center",
  padding: theme.space["025"],
  paddingTop: theme.space["150"],
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

export type CarouselFooterProps = {
  css?: WPDS.CSS;
};

export const CarouselFooter: React.FC<CarouselFooterProps> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

CarouselFooter.displayName = NAME;
