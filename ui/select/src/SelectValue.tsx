import * as React from "react";
import { SelectContext } from "./SelectRoot";

import { theme, styled } from "@washingtonpost/wpds-theme";
import { unstyledInputStyles } from "@washingtonpost/wpds-input-shared";

import * as SelectPrimitive from "@radix-ui/react-select";

const StyledValue = styled("div", {
  ...unstyledInputStyles,
  width: "100%",
  textAlign: "start",
  cursor: "pointer",
  height: theme.space[300],
});

export const SelectValue = React.forwardRef<HTMLDivElement, any>(
  ({ children, ...props }: any, ref) => {
    const { currentValue } = React.useContext(SelectContext);
    return (
      <StyledValue {...props}>
        <SelectPrimitive.Value aria-label={currentValue} ref={ref}>
          {children}
        </SelectPrimitive.Value>
      </StyledValue>
    );
  }
);

SelectValue.displayName = "SelectValue";
