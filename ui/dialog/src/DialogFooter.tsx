import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";

import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "DialogFooter";

const StyledFooter = styled("footer", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: theme.space["050"],
  "@container (max-width: 350px)": {
    flexDirection: "column-reverse",
    alignItems: "stretch",
  },
  gridArea: "footer",
  marginBlockStart: theme.space["150"],
});

export type DialogFooterProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof StyledFooter>;

export const DialogFooter = React.forwardRef<HTMLElement, DialogFooterProps>(
  ({ children, ...props }: DialogFooterProps, ref) => {
    return (
      <StyledFooter {...props} ref={ref}>
        {children}
      </StyledFooter>
    );
  }
);

DialogFooter.displayName = NAME;
