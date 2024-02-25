import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { theme, styled } from "../theme";

import type { DialogTitleProps as RadixDialogTitleProps } from "@radix-ui/react-dialog";
import type * as WPDS from "../theme";

const NAME = "DialogTitle";

const StyledTitle = styled(DialogPrimitive.Title, {
  color: theme.colors.primary,
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["125"],
  fontWeight: theme.fontWeights.bold,
  marginBlockStart: 0,
  marginBlockEnd: theme.space["150"],
});

export type DialogTitleProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDialogTitleProps;

export const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  DialogTitleProps
>(({ children, ...props }: DialogTitleProps, ref) => {
  return (
    <StyledTitle {...props} ref={ref}>
      {children}
    </StyledTitle>
  );
});

DialogTitle.displayName = NAME;
