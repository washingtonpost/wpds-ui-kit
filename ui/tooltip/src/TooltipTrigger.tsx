import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { TooltipTriggerProps as RadixTooltipTriggerProps } from "@radix-ui/react-tooltip";
import type * as WPDS from "@washingtonpost/wpds-theme";

const StyledTrigger = styled(TooltipPrimitive.Trigger, {
  color: theme.colors.primary,
});

type TooltipTriggerVariants = WPDS.VariantProps<typeof StyledTrigger>;
type TriggerCombinedProps = RadixTooltipTriggerProps & TooltipTriggerVariants;

export interface TooltipTriggerInterface extends TriggerCombinedProps {
  /** Override CSS */
  css?: WPDS.CSS;
}

export const TooltipTrigger = React.forwardRef<
  HTMLButtonElement,
  TooltipTriggerInterface
>((props: TooltipTriggerInterface, ref) => (
  <StyledTrigger {...props} ref={ref} asChild>
    {props.children}
  </StyledTrigger>
));

TooltipTrigger.displayName = "TooltipTrigger";
