import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { SelectProps as SelectPrimitiveProps } from "@radix-ui/react-select";

export type SelectProps = SelectPrimitiveProps;

type SelectContextProps = {
  currentValue: string;
  required: boolean;
  success: boolean;
};

export const SelectContext = React.createContext({} as SelectContextProps);

export const SelectRoot = React.forwardRef<HTMLDivElement, any>(
  (
    { children, value, required = false, success = false, ...props }: any,
    ref
  ) => (
    <SelectContext.Provider
      value={{
        currentValue: value,
        required,
        success,
      }}
    >
      <SelectPrimitive.Root {...props} ref={ref}>
        {children}
      </SelectPrimitive.Root>
    </SelectContext.Provider>
  )
);

SelectRoot.displayName = "SelectRoot";
