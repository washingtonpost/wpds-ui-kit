import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "CarouselRoot";

const Container = styled("div", {
  border: `1px dotted ${theme.colors.accessible}`,
  padding: theme.space["025"],
  "&:before": {
    color: theme.colors.accessible,
    display: "block",
    content: NAME,
    fontSize: theme.fontSizes["075"],
    marginBlockEnd: theme.space["025"],
  },
});

export type CarouselRootProps = {
  css?: WPDS.CSS;
};

export const CarouselRoot: React.FC<CarouselRootProps> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

CarouselRoot.displayName = NAME;
