import {} from "react";
import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ActionMenuContext } from "./context";
import { styled } from "../theme";

import type { DropdownMenuProps as RadixDropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import type * as WPDS from "../theme";

const NAME = "ActionMenuRoot";

const StyledActionMenu = styled(ActionMenuPrimitive.Root, {});

export type DensityProp = "loose" | "default" | "compact";

export type ActionMenuRootProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  density?: DensityProp;
} & RadixDropdownMenuProps;

export const ActionMenuRoot = ({
  density = "default",
  ...props
}: ActionMenuRootProps) => {
  return (
    <ActionMenuContext.Provider
      value={{
        density,
      }}
    >
      <StyledActionMenu {...props} />
    </ActionMenuContext.Provider>
  );
};

ActionMenuRoot.displayName = NAME;
