import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "CarouselHeaderContent";

const Container = styled("div", {
  border: `1px dotted ${theme.colors.accessible}`,
  color: theme.colors.primary,
  flex: "1",
  padding: theme.space["025"],
  "&:before": {
    color: theme.colors.accessible,
    display: "block",
    content: NAME,
    fontSize: theme.fontSizes["075"],
  },
});

export type CarouselHeaderContentProps = {
  css?: WPDS.CSS;
};

export const CarouselHeaderContent: React.FC<CarouselHeaderContentProps> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

CarouselHeaderContent.displayName = NAME;
