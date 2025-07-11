import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { CSSTransition } from "react-transition-group";
import { clsx } from "clsx";
import { dialogOverlayBase } from "./Dialog.css";
import { vars } from "../theme/contracts.css";
import { DialogContextVE } from "./dialog-root-ve";

import type { DialogOverlayProps as RadixDialogOverlayProps } from "@radix-ui/react-dialog";

const NAME = "DialogOverlayVE";

export type DialogOverlayVEProps = {
  /** Css background color of overlay*/
  backgroundColor?: string;
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  className?: string;
  /** Css z-index of overlay */
  zIndex?: string | number;
} & RadixDialogOverlayProps;

export const DialogOverlayVE = React.forwardRef<
  HTMLDivElement,
  DialogOverlayVEProps
>(
  (
    {
      backgroundColor = vars.colors.alpha50,
      children,
      className,
      forceMount = true,
      zIndex = vars.zIndices.page,
      style,
      ...props
    }: DialogOverlayVEProps,
    ref
  ) => {
    const { open } = React.useContext(DialogContextVE);

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
        classNames="wpds-dialog-overlay"
      >
        <DialogPrimitive.Overlay
          className={clsx(dialogOverlayBase, className)}
          style={{ backgroundColor, zIndex, ...style }}
          forceMount={forceMount}
          {...props}
          ref={internalRef}
        >
          {children}
        </DialogPrimitive.Overlay>
      </CSSTransition>
    );
  }
);

DialogOverlayVE.displayName = NAME;
