import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

export interface SelectRootProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  /** Children content */
  children?: React.ReactNode;
}

export const SelectRootVE: React.FC<SelectRootProps> = ({
  children,
  ...props
}) => {
  return <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>;
};

SelectRootVE.displayName = "SelectRootVE";
