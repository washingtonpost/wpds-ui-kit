import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
// import type { SwitchProps as RadixSwitchRootProps } from "@radix-ui/react-switch";
import { styled, theme } from "@washingtonpost/wpds-theme";

export const SwitchRoot = styled(SwitchPrimitive.Root, {
  // reset button styles
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$round",
  cursor: "pointer",
  appearance: "none",
  transition: `background ${theme.transitions.fast} ${theme.transitions.inOut}`,
  // end reset button styles
  height: theme.sizes[100],
  width: theme.sizes[200],
  border: "1px solid $$switchRootVariant",
  '&[data-state="unchecked"]': {
    $$switchRootVariant: "$colors$alpha50",
  },
  variants: {
    variant: {
      primary: {
        $$switchRootVariant: "$colors$primary",
        $$switchThumbVariant: "$colors$secondary",
        backgroundColor: "$$switchRootVariant",
      },
      cta: {
        $$switchRootVariant: "$colors$cta",
        $$switchThumbVariant: "$colors$secondary",
        backgroundColor: "$$switchRootVariant",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type SwitchRootProps = React.ComponentProps<typeof SwitchRoot>;

SwitchRoot.displayName = "SwitchRoot";

export type { SwitchRootProps };
