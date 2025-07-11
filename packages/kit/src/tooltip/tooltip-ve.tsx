import React from "react";
import { TooltipContentVE } from "./tooltip-content-ve";
import { TooltipTriggerVE } from "./tooltip-trigger-ve";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {
  TooltipProps as RadixTooltipRootProps,
  TooltipPortalProps as RadixTooltipPortalProps,
  TooltipProviderProps as RadixTooltipProviderProps,
} from "@radix-ui/react-tooltip";

export const TooltipRootVE = ({ children, ...props }: RadixTooltipRootProps) => (
  <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
);

TooltipRootVE.displayName = "TooltipRootVE";

export const TooltipPortalVE = (props: RadixTooltipPortalProps) => (
  <TooltipPrimitive.Portal {...props}>{props.children}</TooltipPrimitive.Portal>
);

TooltipPortalVE.displayName = "TooltipPortalVE";

export const TooltipProviderVE = (props: RadixTooltipProviderProps) => (
  <TooltipPrimitive.Provider {...props}>
    {props.children}
  </TooltipPrimitive.Provider>
);

TooltipProviderVE.displayName = "TooltipProviderVE";

const Provider = TooltipProviderVE;
const Root = TooltipRootVE;
const Portal = TooltipPortalVE;
const Trigger = TooltipTriggerVE;
const Content = TooltipContentVE;

type TooltipProps = {
  Root: typeof Root;
  Portal: typeof Portal;
  Provider: typeof Provider;
  Content: typeof Content;
  Trigger: typeof Trigger;
};

/**
 * Tooltip
 */
export const TooltipVE: TooltipProps = {
  Provider,
  Root,
  Content,
  Trigger,
  Portal,
};

// Export individual components
export { TooltipContentVE, TooltipTriggerVE };
