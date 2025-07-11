import * as React from "react";
import { clsx } from "clsx";
import { dialogFooter } from "./Dialog.css";

const NAME = "DialogFooterVE";

export type DialogFooterVEProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  className?: string;
} & React.ComponentPropsWithRef<"footer">;

export const DialogFooterVE = React.forwardRef<
  HTMLElement,
  DialogFooterVEProps
>(({ children, className, ...props }: DialogFooterVEProps, ref) => {
  return (
    <footer className={clsx(dialogFooter, className)} {...props} ref={ref}>
      {children}
    </footer>
  );
});

DialogFooterVE.displayName = NAME;
