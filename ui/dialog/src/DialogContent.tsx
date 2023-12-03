import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { theme, styled } from "@washingtonpost/wpds-theme";
import { CSSTransition } from "react-transition-group";
import { DialogContext } from "./DialogRoot";

import type { DialogContentProps as RadixDialogContentProps } from "@radix-ui/react-dialog";
import type { StandardLonghandProperties } from "@stitches/react/types/css";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "DialogContent";

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
  "&.wpds-dialog-content-enter, &.wpds-dialog-content-appear": {
    transform: "translate(-50%, -47%)",
    opacity: 0,
  },
  "&.wpds-dialog-content-enter-active, &.wpds-dialog-content-appear-active": {
    transform: "translate(-50%, -50%)",
    opacity: 1,
    transition: `
      transform ${theme.transitions.normal} ${theme.transitions.inOut}, 
      opacity ${theme.transitions.normal} ${theme.transitions.inOut}
     `,
    "@reducedMotion": {
      transition: "none",
    },
  },
  "&.wpds-dialog-content-exit": {
    transform: "translate(-50%, -50%)",
    opacity: 1,
  },
  "&.wpds-dialog-content-exit-active": {
    transform: "translate(-50%, -50%) scale(0.97)",
    opacity: 0,
    transition: `
      transform ${theme.transitions.fast} ${theme.transitions.inOut}, 
      opacity ${theme.transitions.fast} ${theme.transitions.inOut}
    `,
    "@reducedMotion": {
      transition: "none",
    },
  },
});

export type DialogContentProps = {
  /** Css background color of content*/
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
      forceMount = true,
      width = "500px",
      height = "300px",
      zIndex = theme.zIndices.offer,
      ...props
    }: DialogContentProps,
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
          exit: 200,
        }}
        classNames="wpds-dialog-content"
      >
        <StyledContent
          css={{ backgroundColor, width, height, zIndex, ...css }}
          forceMount={forceMount}
          {...props}
          ref={internalRef}
        >
          {children}
        </StyledContent>
      </CSSTransition>
    );
  }
);

DialogContent.displayName = NAME;
