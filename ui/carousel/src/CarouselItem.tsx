import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "CarouselItem";

const Container = styled("div", {
  border: `1px dotted ${theme.colors.accessible}`,
  color: theme.colors.primary,
  padding: theme.space["025"],
  width: "200px",
  flexShrink: "0",
  "&:before": {
    color: theme.colors.accessible,
    display: "block",
    content: NAME,
    fontSize: theme.fontSizes["075"],
    marginBlockEnd: theme.space["025"],
  },
});

export type CarouselItemProps = {
  css?: WPDS.CSS;
};

export const CarouselItem: React.FC<CarouselItemProps> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

CarouselItem.displayName = NAME;
