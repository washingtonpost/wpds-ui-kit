import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { theme, styled, keyframes } from "@washingtonpost/wpds-theme";

import type { DialogContentProps as RadixDialogContentProps } from "@radix-ui/react-dialog";
import type { StandardLonghandProperties } from "@stitches/react/types/css";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "DialogContent";

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -47%)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%)" },
});

const StyledContent = styled(DialogPrimitive.Content, {
  borderRadius: theme.radii["025"],
  boxShadow: theme.shadows["300"],
  color: theme.colors.primary,
  containerType: "inline-size",
  display: "grid",
  gridTemplateAreas: "'header' 'body' 'footer'",
  gridTemplateRows: "auto 1fr auto",
  padding: theme.space["150"],
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  animation: `${contentShow} ${theme.transitions.normal} ease-out`,
  "@reducedMotion": {
    animation: "none",
  },
});

export type DialogContentProps = {
  /** Css background color of overlay*/
  backgroundColor?:
    | StandardLonghandProperties["backgroundColor"]
    | typeof theme.colors[keyof typeof theme.colors];
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  /** Width in any valid css string */
  width?: string;
  /** Height in any valid css string */
  height?: string;
  /** Css z-index */
  zIndex?:
    | StandardLonghandProperties["zIndex"]
    | typeof theme.zIndices[keyof typeof theme.zIndices];
} & RadixDialogContentProps;

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  DialogContentProps
>(
  (
    {
      backgroundColor = theme.colors.secondary,
      children,
      css,
      width = "500px",
      height = "300px",
      zIndex = theme.zIndices.offer,
      ...props
    }: DialogContentProps,
    ref
  ) => {
    return (
      <StyledContent
        css={{ backgroundColor, width, height, zIndex, ...css }}
        {...props}
        ref={ref}
      >
        {children}
      </StyledContent>
    );
  }
);

DialogContent.displayName = NAME;
