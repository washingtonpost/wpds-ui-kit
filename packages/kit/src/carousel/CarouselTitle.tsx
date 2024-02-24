import React from "react";
import { styled, theme } from "../theme";
import { CarouselContext } from "./CarouselRoot";

import type * as WPDS from "../theme";

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
  const { titleId, setTitleId } = React.useContext(CarouselContext);
  const id = React.useId();
  React.useEffect(() => {
    setTitleId && setTitleId(id);
  }, [setTitleId]);

  return (
    <StyledHeading ref={ref} id={titleId} {...props}>
      {children}
    </StyledHeading>
  );
});

CarouselTitle.displayName = NAME;
