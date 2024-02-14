import { useContext } from "react";
import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { styled } from "../theme";
import { ActionMenuContext } from "./context";

import type { DropdownMenuSubProps as RadixDropdownMenuSubProps } from "@radix-ui/react-dropdown-menu";
import type * as WPDS from "../theme";

const NAME = "ActionMenuSub";

export const StyledSub = styled(ActionMenuPrimitive.Sub, {});

export type ActionMenuSubProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuSubProps;

export const ActionMenuSub = ({ ...props }: ActionMenuSubProps) => {
  const context = useContext(ActionMenuContext);

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
