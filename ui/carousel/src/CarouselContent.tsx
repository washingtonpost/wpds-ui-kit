import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

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
};

export const CarouselContent: React.FC<CarouselContentProps> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

CarouselContent.displayName = NAME;
