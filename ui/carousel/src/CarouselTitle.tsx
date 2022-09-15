import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "CarouselTitle";

const StyledHeading = styled("h2", {
  color: theme.colors.primary,
  fontSize: theme.fontSizes["150"],
  marginBlock: 0,
});

export type CarouselTitleProps = {
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof StyledHeading>;

export const CarouselTitle = React.forwardRef<
  HTMLHeadingElement,
  CarouselTitleProps
>(({ children, ...props }, ref) => {
  return (
    <StyledHeading ref={ref} {...props}>
      {children}
    </StyledHeading>
  );
});

CarouselTitle.displayName = NAME;
