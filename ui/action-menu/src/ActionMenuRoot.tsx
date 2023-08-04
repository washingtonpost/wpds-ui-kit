import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-theme";
import { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { DropdownMenuProps as RadixDropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import { ActionMenuContext } from "./context";

// import type * as RadixDropdownTypes from "@radix-ui/react-dropdown-menu";

const NAME = "ActionMenuRoot";

const StyledActionMenu = styled(ActionMenuPrimitive.Root, {
  // minWidth: "max-content"
  // width: "300px"
});

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
  const [stack, setStack] = React.useState([window?.crypto.randomUUID()]);
  const [currentId, setCurrentId] = React.useState("");
  const [previousId, setPreviousId] = React.useState("");

  const advance = ({ current, previous }) => {
    setCurrentId(current);
    setPreviousId(previous);
  };

  return (
    <ActionMenuContext.Provider
      value={{
        advance,
        currentId,
        density,
        previousId,
        stack,
        setStack,
      }}
    >
      <StyledActionMenu {...props} />
    </ActionMenuContext.Provider>
  );
};

ActionMenuRoot.displayName = NAME;
