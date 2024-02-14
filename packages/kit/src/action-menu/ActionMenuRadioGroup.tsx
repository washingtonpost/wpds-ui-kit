import { forwardRef } from "react";

import { styled } from "../theme";

import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Divider } from "../divider";

import type { DropdownMenuRadioGroupProps as RadixDropdownMenuRadioGroupProps } from "@radix-ui/react-dropdown-menu";
import type * as WPDS from "../theme";

const NAME = "ActionMenuRadioGroup";

export const StyledRadioGroup = styled(ActionMenuPrimitive.RadioGroup, {});

export type ActionMenuRadioGroupProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuRadioGroupProps;

export const ActionMenuRadioGroup = forwardRef<
  HTMLDivElement,
  ActionMenuRadioGroupProps
>(({ children, ...props }: ActionMenuRadioGroupProps, ref) => {
  return (
    <StyledRadioGroup {...props} ref={ref}>
      {children}
      <Divider />
    </StyledRadioGroup>
  );
});

ActionMenuRadioGroup.displayName = NAME;
