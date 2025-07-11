import React from "react";
import { clsx } from "clsx";
import * as SelectPrimitive from "@radix-ui/react-select";
import { selectContent, selectViewport } from "./Select.css";

export interface SelectContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
  /** Additional CSS class */
  className?: string;
  /** Position of the content */
  position?: "item-aligned" | "popper";
}

export const SelectContentVE = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(({ className, position = "popper", children, ...props }, ref) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={clsx(selectContent, className)}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport className={selectViewport}>
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
});

SelectContentVE.displayName = "SelectContentVE";
