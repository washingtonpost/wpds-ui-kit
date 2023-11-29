import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { theme, styled, keyframes } from "@washingtonpost/wpds-theme";

import type { DialogOverlayProps as RadixDialogOverlayProps } from "@radix-ui/react-dialog";
import type * as WPDS from "@washingtonpost/wpds-theme";
import type { StandardLonghandProperties } from "@stitches/react/types/css";

const NAME = "DialogOverlay";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: theme.colors.alpha50,
  inset: "0",
  position: "fixed",
  animation: `${overlayShow} ${theme.transitions.normal} ease-out`,
  "@reducedMotion": {
    animation: "none",
  },
});

export type DialogOverlayProps = {
  /** Css background color of overlay*/
  backgroundColor?:
    | StandardLonghandProperties["backgroundColor"]
    | typeof theme.colors[keyof typeof theme.colors];
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  /** Css z-index of overlay */
  zIndex?:
    | StandardLonghandProperties["zIndex"]
    | typeof theme.zIndices[keyof typeof theme.zIndices];
} & RadixDialogOverlayProps;

export const DialogOverlay = React.forwardRef<
  HTMLDivElement,
  DialogOverlayProps
>(
  (
    {
      backgroundColor = theme.colors.alpha50,
      children,
      css,
      zIndex = theme.zIndices.offer,
      ...props
    }: DialogOverlayProps,
    ref
  ) => {
    return (
      <StyledOverlay
        css={{ backgroundColor, zIndex, ...css }}
        {...props}
        ref={ref}
      >
        {children}
      </StyledOverlay>
    );
  }
);

DialogOverlay.displayName = NAME;
