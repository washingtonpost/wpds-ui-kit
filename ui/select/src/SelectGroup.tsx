import * as React from "react";

import { styled, theme } from "@washingtonpost/wpds-theme";
import { Divider } from "@washingtonpost/wpds-divider";

import * as SelectPrimitive from "@radix-ui/react-select";

const StyledSelectGroup = styled(SelectPrimitive.Group, {});

const StyledGroupLabel = styled(SelectPrimitive.Label, {
  margin: `${theme.space["050"]} ${theme.space[100]}`,
  fontSize: theme.fontSizes["087"],
  color: theme.colors.accessible,
});
const DividerContainer = styled("div", {
  width: "100%",
  padding: `0px ${theme.space[100]}`,

  variants: {
    none: {
      true: {
        display: "none",
      },
    },
  },
});

export const SelectGroup = React.forwardRef<any, any>(
  ({ children, label, divider = true, ...props }, ref) => (
    <>
      <StyledSelectGroup {...props} ref={ref}>
        <StyledGroupLabel>{label}</StyledGroupLabel>
        {children}
      </StyledSelectGroup>
      <DividerContainer none={!divider}>
        <Divider css={{ backgroundColor: theme.colors.subtle }} />
      </DividerContainer>
    </>
  )
);

SelectGroup.displayName = "SelectGroup";
