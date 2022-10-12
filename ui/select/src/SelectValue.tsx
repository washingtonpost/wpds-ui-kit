import * as React from "react";
import { SelectContext } from "./SelectRoot";

import { theme, styled } from "@washingtonpost/wpds-theme";
import { unstyledInputStyles } from "@washingtonpost/wpds-input-shared";

import * as SelectPrimitive from "@radix-ui/react-select";
import type * as WPDS from "@washingtonpost/wpds-theme";

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

export type SelectValueProps = {
  /** Used to insert select elements into the root component*/
  children?: React.ReactNode;
  /** Overrides for the input text styles. Padding overrides affect the input container and  */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof StyledValue>;

export const SelectValue = React.forwardRef<HTMLDivElement, SelectValueProps>(
  ({ children, ...props }: SelectValueProps, ref) => {
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
