import * as React from "react";

import { styled, theme } from "@washingtonpost/wpds-theme";
import { Check } from "@washingtonpost/wpds-assets";

import * as SelectPrimitive from "@radix-ui/react-select";
import type * as WPDS from "@washingtonpost/wpds-theme";

const StyledItem = styled(SelectPrimitive.Item, {
  all: "unset",
  alignItems: "center",
  color: theme.colors["primary"],
  display: "flex",
  fontSize: theme.fontSizes[100],
  minHeight: theme.sizes[200],
  lineHeight: 1.25,
  padding: `0px ${theme.space[100]} 0px ${theme.space[175]}`,
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: theme.colors.disabled,
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundColor: theme.colors.faint,
    cursor: "pointer",
  },
});

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: "absolute",
  left: theme.sizes["050"],
  width: theme.sizes[100],
  height: theme.sizes[100],
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledCheck = styled(Check, {
  width: "100%",
  height: "100%",
});

export type SelectItemProps = {
  /** Used to insert select elements into the root component*/
  children?: React.ReactNode;
  /** Overrides for the input text styles. Padding overrides affect the input container and  */
  css?: WPDS.CSS;
  /** The value associated with this item */
  value: string;
} & React.ComponentPropsWithRef<typeof StyledItem>;

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, value, ...props }: SelectItemProps, ref) => {
    return (
      <StyledItem value={value} {...props} ref={ref}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <StyledItemIndicator>
          <StyledCheck />
        </StyledItemIndicator>
      </StyledItem>
    );
  }
);

SelectItem.displayName = "SelectItem";
