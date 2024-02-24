import React from "react";
import { SelectContext } from "./Select";

import { theme, styled } from "../theme";
import { unstyledInputStyles } from "../input-shared";

import * as SelectPrimitive from "@radix-ui/react-select";
import type * as WPDS from "../theme";
import { SelectValueProps as RadixSelectValueProps } from "@radix-ui/react-select";

const StyledValue = styled("div", {
  ...unstyledInputStyles,
  width: "100%",
  textAlign: "start",
  cursor: "pointer",
  height: theme.space[300],
  whiteSpace: "nowrap",
  overflow: "hidden",
  paddingInline: "none",
  gridArea: "value",

  variants: {
    isDisabled: {
      true: {
        cursor: "not-allowed",
      },
    },
  },
});

type SelectValueVariants = WPDS.VariantProps<typeof StyledValue>;

type SelectValueProps = SelectValueVariants &
  RadixSelectValueProps & {
    /** Used to insert select elements into the root component*/
    children?: React.ReactNode;
    /** Overrides for the input text styles. Padding overrides affect the input container and  */
    css?: WPDS.CSS;
    // /** Used to specify placeholder text. Can also be passed in as a child */
    placeholder?: string | undefined;
  };

export const SelectValue = React.forwardRef<HTMLDivElement, SelectValueProps>(
  ({ children, ...props }: SelectValueProps, ref) => {
    const { currentValue, disabled, setIsFloating } =
      React.useContext(SelectContext);

    React.useEffect(() => {
      if (children) {
        setIsFloating(true);
      }
    }, [children, setIsFloating]);

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
