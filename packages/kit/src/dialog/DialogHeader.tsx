import * as React from "react";
import { styled } from "../theme";

import type * as WPDS from "../theme";

const NAME = "DialogHeader";

const StyledHeader = styled("header", {
  gridArea: "header",
});

export type DialogHeaderProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof StyledHeader>;

export const DialogHeader = React.forwardRef<HTMLElement, DialogHeaderProps>(
  ({ children, ...props }: DialogHeaderProps, ref) => {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <StyledHeader {...props} ref={ref}>
        {children}
      </StyledHeader>
    );
  }
);

DialogHeader.displayName = NAME;
