import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { dialogDescription } from "./Dialog.css";

import type { DialogDescriptionProps as RadixDialogDescriptionProps } from "@radix-ui/react-dialog";

const NAME = "DialogDescriptionVE";

export type DialogDescriptionVEProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  className?: string;
} & RadixDialogDescriptionProps;

export const DialogDescriptionVE = React.forwardRef<HTMLParagraphElement, DialogDescriptionVEProps>(
  ({ children, className, ...props }: DialogDescriptionVEProps, ref) => {
    return (
      <DialogPrimitive.Description 
        className={clsx(dialogDescription, className)} 
        {...props} 
        ref={ref}
      >
        {children}
      </DialogPrimitive.Description>
    );
  }
);

DialogDescriptionVE.displayName = NAME;
