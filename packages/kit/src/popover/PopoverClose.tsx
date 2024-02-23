import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { styled, theme } from "../theme";
import { Button } from "../button";
import { Icon } from "../icon";
import { Close } from "@washingtonpost/wpds-assets";

import type * as WPDS from "../theme";
import type { PopoverCloseProps as RadixPopoverCloseProps } from "@radix-ui/react-popover";

const NAME = "PopoverClose";

const StyledButton = styled(Button, {
  position: "absolute",
  top: theme.space["025"],
  right: theme.space["025"],
  "&&": {
    border: "none",
  },
});

export type PopoverCloseProps = {
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixPopoverCloseProps;

export const PopoverClose = React.forwardRef<
  HTMLButtonElement,
  PopoverCloseProps
>(({ children, asChild, ...props }, ref) => (
  <PopoverPrimitive.Close {...props} asChild ref={ref}>
    {asChild ? (
      children
    ) : (
      <StyledButton isOutline icon="center" variant="primary">
        <Icon size="100" label="Close popup">
          <Close />
        </Icon>
      </StyledButton>
    )}
  </PopoverPrimitive.Close>
));

PopoverClose.displayName = NAME;
