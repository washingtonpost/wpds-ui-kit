import React from "react";
import { TooltipContent } from "./TooltipContent";
import { TooltipTrigger } from "./TooltipTrigger";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {
  TooltipProps as RadixTooltipRootProps,
  TooltipPortalProps as RadixTooltipPortalProps,
  TooltipProviderProps as RadixTooltipProviderProps,
} from "@radix-ui/react-tooltip";

export const TooltipRoot = ({ children, ...props }: RadixTooltipRootProps) => (
  <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
);

TooltipRoot.displayName = "TooltipRoot";

export const TooltipPortal = (props: RadixTooltipPortalProps) => (
  <TooltipPrimitive.Portal {...props}>{props.children}</TooltipPrimitive.Portal>
);

TooltipPortal.displayName = "TooltipPortal";

export const TooltipProvider = (props: RadixTooltipProviderProps) => (
  <TooltipPrimitive.Provider {...props}>
    {props.children}
  </TooltipPrimitive.Provider>
);

TooltipProvider.displayName = "TooltipProvider";

const Provider = TooltipProvider;
const Root = TooltipRoot;
const Portal = TooltipPortal;
const Trigger = TooltipTrigger;
const Content = TooltipContent;

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
export const Tooltip: TooltipProps = {
  Provider,
  Root,
  Content,
  Trigger,
  Portal,
};
