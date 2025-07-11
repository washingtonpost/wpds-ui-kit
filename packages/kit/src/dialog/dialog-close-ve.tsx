import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { dialogCloseStyles } from "./Dialog.css";

const DialogCloseVE = React.forwardRef<
  ElementRef<typeof DialogPrimitive.Close>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={`${dialogCloseStyles} ${className || ""}`}
    {...props}
  />
));

DialogCloseVE.displayName = DialogPrimitive.Close.displayName;

export { DialogCloseVE };
export type { ComponentPropsWithoutRef as DialogCloseVEProps };
