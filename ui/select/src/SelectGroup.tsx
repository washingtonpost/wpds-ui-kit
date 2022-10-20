import * as React from "react";

import { styled, theme } from "@washingtonpost/wpds-theme";
import { Divider } from "@washingtonpost/wpds-divider";

import * as SelectPrimitive from "@radix-ui/react-select";
import type * as WPDS from "@washingtonpost/wpds-theme";

const StyledSelectGroup = styled(SelectPrimitive.Group, {});

const StyledGroupLabel = styled(SelectPrimitive.Label, {
  margin: `${theme.space["050"]} ${theme.space[100]}`,
  fontSize: theme.fontSizes["087"],
  color: theme.colors.accessible,
});

const DividerContainer = styled("div", {
  width: "100%",
  padding: `0px ${theme.space[100]}`,

  "&:last-child": {
    display: "none",
  },

  variants: {
    none: {
      true: {
        display: "none",
      },
    },
  },
});

export type SelectGroupProps = {
  /** Used to insert select elements into the root component*/
  children?: React.ReactNode;
  /** Overrides for the input text styles. Padding overrides affect the input container and  */
  css?: WPDS.CSS;
  /** The value of the select when initially rendered. Use when you do not need to control the state of the select. */
  label?: string;
} & React.ComponentPropsWithRef<typeof DividerContainer>;

export const SelectGroup = React.forwardRef<HTMLDivElement, SelectGroupProps>(
  ({ children, label, ...props }: SelectGroupProps, ref) => (
    <>
      <StyledSelectGroup {...props} ref={ref}>
        <StyledGroupLabel>{label}</StyledGroupLabel>
        {children}
      </StyledSelectGroup>
      <DividerContainer>
        <Divider css={{ backgroundColor: theme.colors.subtle }} />
      </DividerContainer>
    </>
  )
);

SelectGroup.displayName = "SelectGroup";
