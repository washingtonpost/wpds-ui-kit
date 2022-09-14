import * as React from "react";
import { TooltipContent, TooltipContentInterface } from "./TooltipContent";
import { TooltipTrigger, TooltipTriggerInterface } from "./TooltipTrigger";
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

export const Tooltip = {
  Provider,
  Root,
  Content,
  Trigger,
  Portal,
};

export type {
  RadixTooltipRootProps as TooltipRootProps,
  RadixTooltipPortalProps as TooltipPortalProps,
  RadixTooltipProviderProps as TooltipProviderProps,
  TooltipContentInterface as TooltipContentProps,
  TooltipTriggerInterface as TooltipTriggerProps,
};
