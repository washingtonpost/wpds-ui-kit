import * as React from "react";

import { styled } from "@washingtonpost/wpds-theme";
import { Icon } from "@washingtonpost/wpds-icon";
import Check from "@washingtonpost/wpds-assets/asset/check";

import * as SelectPrimitive from "@radix-ui/react-select";
// import { SelectTriggerProps as SelectPrimitiveProps } from "@radix-ui/react-select";

const StyledItem = styled(SelectPrimitive.Item, {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  // color: violet.violet11,
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 35px 0 25px",
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    // color: mauve.mauve8,
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    // backgroundColor: violet.violet9,
    // color: violet.violet1,
  },
});

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const SelectItem = React.forwardRef(({ ...props }, ref) => {
  return (
    <StyledItem value="apple">
      <SelectPrimitive.ItemText>Apple</SelectPrimitive.ItemText>
      <StyledItemIndicator>
        <Icon label="">
          <Check aria-hidden />
        </Icon>
      </StyledItemIndicator>
    </StyledItem>
  );
});

SelectItem.displayName = "SelectItem";
