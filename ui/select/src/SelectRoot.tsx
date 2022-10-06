import * as React from "react";
import { styled } from "@washingtonpost/wpds-theme";
import * as SelectPrimitive from "@radix-ui/react-select";
import { SelectProps as SelectPrimitiveProps } from "@radix-ui/react-select";

const StyledSelect = styled(SelectPrimitive.Root, {});

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
      <StyledSelect {...props} ref={ref}>
        {children}
      </StyledSelect>
    </SelectContext.Provider>
  )
);

SelectRoot.displayName = "SelectRoot";
