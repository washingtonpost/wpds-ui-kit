// import * as React from "react";
import * as Radix from "@radix-ui/react-switch";
import type { SwitchThumbProps as RadixSwitchThumbProps } from "@radix-ui/react-switch";
import { styled, theme } from "@washingtonpost/wpds-theme";

export const SwitchThumb = styled(Radix.Thumb, {
  display: "flex",
  padding: "calc($sizes$050 - 1px)",
  backgroundColor: "$$switchThumbVariant",
  borderRadius: "$round",
  transition: theme.transitions.allFast,
  transform: `translateX(-$sizes$050)`,
  willChange: "transform",
  '&[data-state="checked"]': {
    transform: `translateX($sizes$050)`,
  },
});

export type SwitchThumbProps = RadixSwitchThumbProps;
