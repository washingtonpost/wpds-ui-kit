import * as React from "react";
import { SelectContext } from "./SelectRoot";

import { theme, styled } from "@washingtonpost/wpds-theme";
import { unstyledInputStyles } from "@washingtonpost/wpds-input-shared";

import * as SelectPrimitive from "@radix-ui/react-select";

const StyledValue = styled("div", {
  ...unstyledInputStyles,
  width: "90%",
  textAlign: "start",
  cursor: "pointer",
  height: theme.space[300],
  whiteSpace: "nowrap",
  overflow: "hidden",
  paddingInline: "none",

  variants: {
    isDisabled: {
      true: {
        cursor: "not-allowed",
      },
    },
  },
});

export const SelectValue = React.forwardRef<HTMLDivElement, any>(
  ({ children, ...props }: any, ref) => {
    const { currentValue, disabled } = React.useContext(SelectContext);

    return (
      <StyledValue {...props} isDisabled={disabled}>
        <SelectPrimitive.Value aria-label={currentValue} ref={ref}>
          {children}
        </SelectPrimitive.Value>
      </StyledValue>
    );
  }
);

SelectValue.displayName = "SelectValue";
