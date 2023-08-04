import * as React from "react";

import WPDS, { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { ActionMenuContext } from "./context";

import { DropdownMenuSubProps as RadixDropdownMenuSubProps } from "@radix-ui/react-dropdown-menu";

const NAME = "ActionMenuSub";

export const StyledSub = styled(ActionMenuPrimitive.Sub, {});

export type ActionMenuSubProps = {
  onOpenChange?: () => void;
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuSubProps;

export const ActionMenuSub = ({
  onOpenChange = () => undefined,
  ...props
}: ActionMenuSubProps) => {
  const context = React.useContext(ActionMenuContext);

  return (
    <ActionMenuContext.Provider
      value={{
        ...context,
      }}
    >
      <StyledSub {...props} />
    </ActionMenuContext.Provider>
  );
};

ActionMenuSub.displayName = NAME;
