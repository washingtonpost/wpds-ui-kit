import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { dialogTitle } from "./Dialog.css";

import type { DialogTitleProps as RadixDialogTitleProps } from "@radix-ui/react-dialog";

const NAME = "DialogTitleVE";

export type DialogTitleVEProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  className?: string;
} & RadixDialogTitleProps;

export const DialogTitleVE = React.forwardRef<
  HTMLHeadingElement,
  DialogTitleVEProps
>(({ children, className, ...props }: DialogTitleVEProps, ref) => {
  return (
    <DialogPrimitive.Title
      className={clsx(dialogTitle, className)}
      {...props}
      ref={ref}
    >
      {children}
    </DialogPrimitive.Title>
  );
});

DialogTitleVE.displayName = NAME;
