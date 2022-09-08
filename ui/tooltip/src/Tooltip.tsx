import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import { TooltipContent } from "./TooltipContent";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const StyledTrigger = styled(TooltipPrimitive.Trigger, {
  color: theme.colors.primary,
});

type TooltipTriggerType = React.ComponentPropsWithRef<typeof StyledTrigger>;

const TooltipTrigger = React.forwardRef<HTMLButtonElement, TooltipTriggerType>(
  ({ children, ...props }: TooltipTriggerType, ref) => (
    <StyledTrigger {...props} ref={ref} asChild>
      {children}
    </StyledTrigger>
  )
);

TooltipTrigger.displayName = "TooltipTrigger";

const Provider = TooltipPrimitive.Provider;
const Root = TooltipPrimitive.Root;
const Trigger = TooltipTrigger;
const Content = TooltipContent;

export const Tooltip = {
  Provider,
  Root,
  Content,
  Trigger,
};
