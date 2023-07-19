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
  const [id] = React.useState(window?.crypto.randomUUID());

  // true or false tells us if we are going up or down
  const trackSubMenuDepth = (open) => {
    if (open) {
      context.stack.push(id);

      const current = context.stack[context.stack.length - 1];
      const previous = context.stack[context.stack.length - 2];

      context.advance({
        current,
        previous,
      });

      return;
    }

    const previous = context.stack.pop();
    const current = context.stack[context.stack.length - 1];

    context.advance({
      current,
      previous,
    });
  };

  const handleOpenChange = (open) => {
    trackSubMenuDepth(open);
    onOpenChange(open);
  };

  return (
    <ActionMenuContext.Provider
      value={{
        ...context,
      }}
    >
      <StyledSub {...props} onOpenChange={handleOpenChange} />
    </ActionMenuContext.Provider>
  );
};

ActionMenuSub.displayName = NAME;
