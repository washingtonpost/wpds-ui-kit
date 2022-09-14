import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "CarouselTitle";

const Container = styled("div", {
  border: `1px dotted ${theme.colors.accessible}`,
  color: theme.colors.primary,
  padding: theme.space["025"],
  "&:before": {
    color: theme.colors.accessible,
    display: "block",
    content: NAME,
    fontSize: theme.fontSizes["075"],
    marginBlockEnd: theme.space["025"],
  },
});

export type CarouselTitleProps = {
  css?: WPDS.CSS;
};

export const CarouselTitle: React.FC<CarouselTitleProps> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

CarouselTitle.displayName = NAME;
