import * as React from "react";
import { clsx } from "clsx";
import { dialogHeader } from "./Dialog.css";

const NAME = "DialogHeaderVE";

export type DialogHeaderVEProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  className?: string;
} & React.ComponentPropsWithRef<"header">;

export const DialogHeaderVE = React.forwardRef<HTMLElement, DialogHeaderVEProps>(
  ({ children, className, ...props }: DialogHeaderVEProps, ref) => {
    return (
      <header className={clsx(dialogHeader, className)} {...props} ref={ref}>
        {children}
      </header>
    );
  }
);

DialogHeaderVE.displayName = NAME;
