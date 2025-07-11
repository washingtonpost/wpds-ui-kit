import React from 'react';
import { clsx } from 'clsx';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { accordionItem } from './Accordion.css';

export interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  /** Children content */
  children?: React.ReactNode;
  /** Value of the item */
  value: string;
  /** Additional CSS class */
  className?: string;
}

export const AccordionItemVE = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ children, value, className, ...props }, ref) => {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      value={value}
      className={clsx(accordionItem, className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Item>
  );
});

AccordionItemVE.displayName = 'AccordionItemVE';
