import React from "react";
import { clsx } from "clsx";
import { selectLabel } from "./Select.css";

export interface SelectLabelProps
  extends React.HTMLAttributes<HTMLLabelElement> {
  /** Additional CSS class */
  className?: string;
  /** Children content */
  children?: React.ReactNode;
}

export const SelectLabelVE = React.forwardRef<
  HTMLLabelElement,
  SelectLabelProps
>(({ className, children, ...props }, ref) => {
  return (
    <label ref={ref} className={clsx(selectLabel, className)} {...props}>
      {children}
    </label>
  );
});

SelectLabelVE.displayName = "SelectLabelVE";
