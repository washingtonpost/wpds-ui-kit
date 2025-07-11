import React from "react";
import { clsx } from "clsx";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "@washingtonpost/wpds-assets";
import { IconVE as Icon } from "../icon/icon-ve";
import {
  accordionHeader,
  accordionTrigger,
  accordionIcon,
  accordionChevron,
} from "./Accordion.css";

export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  /** Children content */
  children?: React.ReactNode;
  /** Density variant */
  density?: "default" | "compact" | "loose";
  /** Additional CSS class */
  className?: string;
}

export interface AccordionHeaderProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Header> {
  /** Children content */
  children?: React.ReactNode;
  /** Additional CSS class */
  className?: string;
}

export const AccordionHeaderVE = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Header>,
  AccordionHeaderProps
>(({ children, className, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header
      ref={ref}
      className={clsx(accordionHeader, className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Header>
  );
});

AccordionHeaderVE.displayName = "AccordionHeaderVE";

export const AccordionTriggerVE = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ children, density = "default", className, ...props }, ref) => {
  return (
    <AccordionHeaderVE>
      <AccordionPrimitive.Trigger
        ref={ref}
        className={clsx(accordionTrigger({ density }), className)}
        {...props}
      >
        {children}
        <Icon className={accordionIcon} label="">
          <ChevronDown className={accordionChevron} />
        </Icon>
      </AccordionPrimitive.Trigger>
    </AccordionHeaderVE>
  );
});

AccordionTriggerVE.displayName = "AccordionTriggerVE";
