import * as React from "react";
import { nanoid } from "nanoid";
import { styled, theme } from "@washingtonpost/wpds-theme";
import { CarouselContext } from "./CarouselRoot";

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
  const { titleId, setTitleId } = React.useContext(CarouselContext);

  React.useEffect(() => {
    const id = `${nanoid(6)}-title`;
    setTitleId && setTitleId(id);
  }, [setTitleId]);

  return (
    <StyledHeading ref={ref} id={titleId} {...props}>
      {children}
    </StyledHeading>
  );
});

CarouselTitle.displayName = NAME;
