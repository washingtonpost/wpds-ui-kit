import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { styled, theme } from "../theme";

export const SwitchRoot = styled(SwitchPrimitive.Root, {
  // reset button styles
  fontSize: "$100",
  boxSizing: "border-box",
  display: "inline-flex",
  overflow: "hidden",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$round",
  cursor: "pointer",
  appearance: "none",
  transition: `all ${theme.transitions.fast} ${theme.transitions.inOut}`,
  "@reducedMotion": {
    transition: "none",
  },
  padding: 0,
  margin: 0,
  // end reset button styles
  height: theme.sizes[100],
  width: theme.sizes[200],
  border: "1px solid $$switchRootVariant",
  '&[data-state="unchecked"]': {
    $$switchRootVariant: "$colors$alpha50",
  },
  "&:focus": {
    outline: "1px solid $colors$signal",
    outlineOffset: "1px",
  },
  "&:disabled": {
    $$switchRootVariant: "$colors$disabled",
    $$switchThumbVariant: "$colors$disabled",
    backgroundColor: "$$switchRootVariant",
    '&[data-state="unchecked"]': {
      $$switchRootVariant: "$colors$disabled",
    },
  },
  variants: {
    /**
     * The `variant` prop is used to set the color of the switch. The `primary` variant is the default. The `cta` variant is used for the call to action switch. The `primary` and `cta` variants are set in the `theme.colors` object. Switch.Thumb inherits the color of the `primary` and `cta` variants from Switch.Root using the `$$switchRootVariant` variable and the `$$switchThumbVariant` variable.
     */
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
    error: {
      true: {},
      false: {},
    },
  },
  defaultVariants: {
    variant: "primary",
  },
  compoundVariants: [
    {
      variant: "primary",
      error: true,
      css: {
        outline: "1px solid $colors$error",
        outlineOffset: "1px",
      },
    },
    {
      variant: "cta",
      error: true,
      css: {
        outline: "1px solid $colors$error",
        outlineOffset: "1px",
      },
    },
  ],
});

type SwitchRootProps = React.ComponentProps<typeof SwitchRoot>;

SwitchRoot.displayName = "SwitchRoot";

export type { SwitchRootProps };
