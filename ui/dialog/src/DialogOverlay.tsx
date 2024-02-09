import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { CSSTransition } from "react-transition-group";
import { theme, styled } from "@washingtonpost/wpds-theme";
import { DialogContext } from "./DialogRoot";

import type { DialogOverlayProps as RadixDialogOverlayProps } from "@radix-ui/react-dialog";
import type * as WPDS from "@washingtonpost/wpds-theme";
import type { StandardLonghandProperties } from "@stitches/react/types/css";

const NAME = "DialogOverlay";

const overlayTransition = `opacity ${theme.transitions.normal} ${theme.transitions.inOut}`;

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: theme.colors.alpha50,
  inset: "0",
  position: "fixed",
  "&.wpds-dialog-overlay-enter, &.wpds-dialog-overlay-appear": {
    opacity: 0,
  },
  "&.wpds-dialog-overlay-enter-active, &.wpds-dialog-overlay-appear-active": {
    opacity: 1,
    transition: overlayTransition,
    "@reducedMotion": {
      transition: "none",
    },
  },
  "&.wpds-dialog-overlay-exit": {
    opacity: 1,
  },
  "&.wpds-dialog-overlay-exit-active": {
    opacity: 0,
    transition: overlayTransition,
    "@reducedMotion": {
      transition: "none",
    },
  },
});

export type DialogOverlayProps = {
  /** Css background color of overlay*/
  backgroundColor?:
    | StandardLonghandProperties["backgroundColor"]
    | (typeof theme.colors)[keyof typeof theme.colors];
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  /** Css z-index of overlay */
  zIndex?:
    | StandardLonghandProperties["zIndex"]
    | (typeof theme.zIndices)[keyof typeof theme.zIndices];
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
      forceMount = true,
      ...props
    }: DialogOverlayProps,
    ref
  ) => {
    const { open } = React.useContext(DialogContext);

    const internalRef = React.useRef(null);
    React.useEffect(() => {
      if (!ref) return;
      typeof ref === "function"
        ? ref(internalRef.current)
        : (ref.current = internalRef.current);
    }, [ref, internalRef]);

    return (
      <CSSTransition
        mountOnEnter
        unmountOnExit
        appear
        nodeRef={internalRef}
        in={open}
        timeout={{
          enter: 300,
          exit: 300,
        }}
        classNames="wpds-dialog-overlay"
      >
        <StyledOverlay
          css={{ backgroundColor, zIndex, ...css }}
          forceMount={forceMount}
          {...props}
          ref={internalRef}
        >
          {children}
        </StyledOverlay>
      </CSSTransition>
    );
  }
);

DialogOverlay.displayName = NAME;
