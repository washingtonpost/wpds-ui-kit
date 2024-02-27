import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { theme, styled } from "../theme";

import type { DialogDescriptionProps as RadixDialogDescriptionProps } from "@radix-ui/react-dialog";
import type * as WPDS from "../theme";

const NAME = "DialogDescription";

const StyledDescription = styled(DialogPrimitive.Description, {
  color: theme.colors.primary,
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  fontWeight: theme.fontWeights.light,
  lineHeight: theme.lineHeights["125"],
  marginBlockStart: 0,
  marginBlockEnd: theme.space["125"],
  "&:last-child": {
    marginBlockEnd: 0,
  },
});

export type DialogDescriptionProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDialogDescriptionProps;

export const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>(({ children, ...props }: DialogDescriptionProps, ref) => {
  return (
    <StyledDescription {...props} ref={ref}>
      {children}
    </StyledDescription>
  );
});

DialogDescription.displayName = NAME;
