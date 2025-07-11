import React from "react";
import { clsx } from "clsx";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { accordionContent, accordionContentInner } from "./Accordion.css";

export interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  /** Children content */
  children?: React.ReactNode;
  /** Density variant */
  density?: "default" | "compact" | "loose";
  /** Additional CSS class */
  className?: string;
}

export const AccordionContentVE = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ children, density = "default", className, ...props }, ref) => {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={clsx(accordionContent, className)}
      {...props}
    >
      <div className={accordionContentInner({ density })}>{children}</div>
    </AccordionPrimitive.Content>
  );
});

AccordionContentVE.displayName = "AccordionContentVE";
