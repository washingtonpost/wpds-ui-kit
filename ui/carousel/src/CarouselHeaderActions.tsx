import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "CarouselHeaderActions";

const Container = styled("div", {
  border: `1px dotted ${theme.colors.accessible}`,
  color: theme.colors.primary,
  display: "flex",
  gap: theme.space["025"],
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

export type CarouselHeaderActionsProps = {
  css?: WPDS.CSS;
};

export const CarouselHeaderActions: React.FC<CarouselHeaderActionsProps> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

CarouselHeaderActions.displayName = NAME;
