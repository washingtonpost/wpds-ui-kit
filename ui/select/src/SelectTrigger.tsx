import * as React from "react";

import { theme, styled } from "@washingtonpost/wpds-theme";
import { ChevronDown } from "@washingtonpost/wpds-assets";
import { Icon } from "@washingtonpost/wpds-icon";
import { sharedInputStyles } from "@washingtonpost/wpds-input-shared";

import { SelectContext } from "./SelectRoot";
import * as SelectPrimitive from "@radix-ui/react-select";

const StyledTrigger = styled(SelectPrimitive.Trigger, {
  ...sharedInputStyles,
  display: "flex",
  justifyContent: "space-between",
  width: "100%",

  "&:focus-within": {
    borderColor: theme.colors.signal,
  },

  variants: {
    success: {
      true: {
        borderColor: theme.colors.success,
      },
    },
  },
});

const IconWrapper = styled("div", {
  all: "unset",
  borderRadius: theme.radii["012"],
  marginInlineEnd: theme.space["050"],
  margin: "auto",
  cursor: "pointer",
  py: "$050",
  px: "$050",
  fontSize: "0",
  lineHeight: "0",
  gap: "0",
  maxWidth: "fit-content",
});

export const SelectTrigger = React.forwardRef<HTMLDivElement, any>(
  ({ children, ...props }: any, ref) => {
    const { success } = React.useContext(SelectContext);
    return (
      <StyledTrigger {...props} success={success} ref={ref}>
        {children}
        <IconWrapper>
          <Icon label="">
            <ChevronDown />
          </Icon>
        </IconWrapper>
      </StyledTrigger>
    );
  }
);

SelectTrigger.displayName = "SelectTrigger";
