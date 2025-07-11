import React from 'react';
import { clsx } from 'clsx';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { accordionRoot } from './Accordion.css';

// Single accordion props
export interface AccordionSingleProps {
  /** Children content */
  children?: React.ReactNode;
  /** Whether the accordion is disabled */
  disabled?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Accordion type */
  type: 'single';
  /** Value for single accordion */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Whether single accordion can collapse all items */
  collapsible?: boolean;
}

// Multiple accordion props  
export interface AccordionMultipleProps {
  /** Children content */
  children?: React.ReactNode;
  /** Whether the accordion is disabled */
  disabled?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Accordion type */
  type: 'multiple';
  /** Values for multiple accordion */
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

export type AccordionRootProps = AccordionSingleProps | AccordionMultipleProps;

export const AccordionRootVE = React.forwardRef<
  HTMLDivElement,
  AccordionRootProps
>(({ children, disabled = false, className, ...props }, ref) => {
  return (
    <AccordionPrimitive.Root
      ref={ref}
      className={clsx(accordionRoot({ disabled }), className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Root>
  );
});

AccordionRootVE.displayName = 'AccordionRootVE';
