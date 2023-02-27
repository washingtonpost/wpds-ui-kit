// import * as React from "react";
import * as Radix from "@radix-ui/react-switch";
import type { SwitchThumbProps as RadixSwitchThumbProps } from "@radix-ui/react-switch";
import { styled, theme } from "@washingtonpost/wpds-theme";

export const SwitchThumb = styled(Radix.Thumb, {
  display: "block",
  size: "$100",
  backgroundColor: "$$switchThumbVariant", // this is not a text color token but we gotta do what we gotta do
  borderRadius: "$round",
  border: "1px solid $$switchRootVariant", // this is not a text color token but we gotta do what we gotta do
  transition: theme.transitions.allFast,
  transform: `translateX(-8px)`,
  willChange: "transform",
  '&[data-state="checked"]': {
    transform: `translateX(8px)`,
  },
});

export type SwitchThumbProps = RadixSwitchThumbProps;
