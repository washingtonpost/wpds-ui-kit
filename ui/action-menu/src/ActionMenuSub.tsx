import * as React from "react";

import WPDS, { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { ActionMenuContext } from "./context";

import {
  DropdownMenuSubProps as RadixDropdownMenuSubProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledSub = styled(ActionMenuPrimitive.Sub, {});

export type ActionMenuSubProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuSubProps;

export const ActionMenuSub = ({ ...props }: ActionMenuSubProps) => {
  const context = React.useContext(ActionMenuContext);
  const [id] = React.useState(window?.crypto.randomUUID());
  
  React.useEffect(() => {
    console.log(`I'm a sub at ${context?.stack.length}, my id is ${id}`)
  }, [])


  // true or false tells us if we are going up or down
  const handleOpenChange = open => {

    // open 
    // add to stack 

    if (open) {
      // console.log("old stack before open", open, context.stack)

      context.stack.push(id);
      const current = context.stack[context.stack.length - 1];
      const previous = context.stack[context.stack.length - 2];

      context.advance(
        {
          current,
          previous
        }
      );

      // console.log("new stack after open", open, context.stack)

      return;
    }

    // console.log("old stack before close", open, context.stack)

    const previous = context.stack.pop();

    const current = context.stack[context.stack.length - 1];

    context.advance(
      {
        current,
        previous
      }
    );

    // console.log("new stack after close", open, context.stack)

  };
  
  //console.log(id);
  //console.log(context.stack.findIndex(item => item === id));

  return (
    <ActionMenuContext.Provider
      value={{
        ...context,
        showThisSub: context.stack.findIndex(item => item === id) >= 0,
      }}
    >
      <StyledSub
        {...props}
        onOpenChange={handleOpenChange}
      />
    </ActionMenuContext.Provider>
  );
}