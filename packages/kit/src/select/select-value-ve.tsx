import React from "react";
import { clsx } from "clsx";
import * as SelectPrimitive from "@radix-ui/react-select";
import { selectValue } from "./Select.css";

export interface SelectValueProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value> {
  /** Additional CSS class */
  className?: string;
}

export const SelectValueVE = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Value>,
  SelectValueProps
>(({ className, ...props }, ref) => {
  return (
    <SelectPrimitive.Value
      ref={ref}
      className={clsx(selectValue, className)}
      {...props}
    />
  );
});

SelectValueVE.displayName = "SelectValueVE";
