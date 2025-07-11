import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { CSSTransition } from "react-transition-group";
import { clsx } from "clsx";
import { dialogContentBase } from "./Dialog.css";
import { vars } from "../theme/contracts.css";
import { DialogContextVE } from "./dialog-root-ve";

import type { DialogContentProps as RadixDialogContentProps } from "@radix-ui/react-dialog";

const NAME = "DialogContentVE";

export type DialogContentVEProps = {
  /** Css background color of content*/
  backgroundColor?: string;
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  className?: string;
  /** Width in any valid css string */
  width?: string;
  /** Height in any valid css string */
  height?: string;
  /** Css z-index */
  zIndex?: string | number;
} & RadixDialogContentProps;

export const DialogContentVE = React.forwardRef<
  HTMLDivElement,
  DialogContentVEProps
>(
  (
    {
      backgroundColor = vars.colors.secondary,
      children,
      className,
      forceMount = true,
      width = "500px",
      height = "300px",
      zIndex = vars.zIndices.offer,
      style,
      ...props
    }: DialogContentVEProps,
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
        classNames="wpds-dialog-content"
      >
        <DialogPrimitive.Content
          className={clsx(dialogContentBase, className)}
          style={{ backgroundColor, width, height, zIndex, ...style }}
          forceMount={forceMount}
          {...props}
          ref={internalRef}
        >
          {children}
        </DialogPrimitive.Content>
      </CSSTransition>
    );
  }
);

DialogContentVE.displayName = NAME;
