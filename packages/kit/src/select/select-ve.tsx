import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { SelectRootVE } from "./select-root-ve";
import { SelectTriggerVE } from "./select-trigger-ve";
import { SelectValueVE } from "./select-value-ve";
import { SelectLabelVE } from "./select-label-ve";
import { SelectContentVE } from "./select-content-ve";
import { SelectItemVE } from "./select-item-ve";
import { selectGroup, selectGroupLabel, selectSeparator } from "./Select.css";
import { clsx } from "clsx";

// SelectGroup component
const SelectGroupVE = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Group
    ref={ref}
    className={clsx(selectGroup, className)}
    {...props}
  />
));
SelectGroupVE.displayName = "SelectGroupVE";

// SelectGroupLabel component
const SelectGroupLabelVE = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={clsx(selectGroupLabel, className)}
    {...props}
  />
));
SelectGroupLabelVE.displayName = "SelectGroupLabelVE";

// SelectSeparator component
const SelectSeparatorVE = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={clsx(selectSeparator, className)}
    {...props}
  />
));
SelectSeparatorVE.displayName = "SelectSeparatorVE";

// Compound component
export const SelectVE = Object.assign(SelectRootVE, {
  Root: SelectRootVE,
  Trigger: SelectTriggerVE,
  Value: SelectValueVE,
  Label: SelectLabelVE,
  Content: SelectContentVE,
  Item: SelectItemVE,
  Group: SelectGroupVE,
  GroupLabel: SelectGroupLabelVE,
  Separator: SelectSeparatorVE,
});

// Individual exports
export {
  SelectRootVE,
  SelectTriggerVE,
  SelectValueVE,
  SelectLabelVE,
  SelectContentVE,
  SelectItemVE,
  SelectGroupVE,
  SelectGroupLabelVE,
  SelectSeparatorVE,
};

// Default export
export default SelectVE;
