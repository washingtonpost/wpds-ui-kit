import * as React from "react";
import { styled } from "@washingtonpost/wpds-theme";
import * as SelectPrimitive from "@radix-ui/react-select";
import { SelectProps as SelectPrimitiveProps } from "@radix-ui/react-select";

const StyledSelect = styled(SelectPrimitive.Root, {});

export type SelectProps = SelectPrimitiveProps;

export const SelectRoot = React.forwardRef<HTMLDivElement, any>(
  ({ children, ...props }: any, ref) => (
    <StyledSelect {...props} ref={ref}>
      {children}
    </StyledSelect>
  )
);

SelectRoot.displayName = "SelectRoot";
