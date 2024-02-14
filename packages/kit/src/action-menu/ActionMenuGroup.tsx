import { forwardRef } from "react";
import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Divider } from "../divider";
import { styled } from "../theme";

import type { DropdownMenuGroupProps as RadixDropdownMenuGroupProps } from "@radix-ui/react-dropdown-menu";
import type * as WPDS from "../theme";

const NAME = "ActionMenuGroup";

export const StyledGroup = styled(ActionMenuPrimitive.Group, {});

export type ActionMenuGroupProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuGroupProps;

export const ActionMenuGroup = forwardRef<HTMLDivElement, ActionMenuGroupProps>(
  ({ children, ...props }: ActionMenuGroupProps, ref) => {
    return (
      <StyledGroup {...props} ref={ref}>
        {children}
        <Divider />
      </StyledGroup>
    );
  }
);

ActionMenuGroup.displayName = NAME;
