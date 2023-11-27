import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { theme, styled } from "@washingtonpost/wpds-theme";

import type { DialogContentProps as RadixDialogContentProps } from "@radix-ui/react-dialog";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "DialogContent";

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: theme.colors.secondary,
  color: theme.colors.primary,
});

export type DialogContentProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDialogContentProps;

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  DialogContentProps
>(({ children, ...props }: DialogContentProps, ref) => {
  return (
    <StyledContent {...props} ref={ref}>
      {children}
    </StyledContent>
  );
});

DialogContent.displayName = NAME;
