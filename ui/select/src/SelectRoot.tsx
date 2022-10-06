import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { SelectProps as SelectPrimitiveProps } from "@radix-ui/react-select";

export type SelectProps = SelectPrimitiveProps;

type SelectContextProps = {
  currentValue: string;
};

export const SelectContext = React.createContext({} as SelectContextProps);

export const SelectRoot = React.forwardRef<HTMLDivElement, any>(
  ({ children, value, ...props }: any, ref) => (
    <SelectContext.Provider
      value={{
        currentValue: value,
      }}
    >
      <SelectPrimitive.Root {...props} ref={ref}>
        {children}
      </SelectPrimitive.Root>
    </SelectContext.Provider>
  )
);

SelectRoot.displayName = "SelectRoot";
