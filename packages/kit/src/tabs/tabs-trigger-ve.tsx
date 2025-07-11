import React from 'react';
import { clsx } from 'clsx';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { tabsTrigger } from './Tabs.css';

export interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  /** Children content */
  children?: React.ReactNode;
  /** Value of the tab */
  value: string;
  /** Density variant */
  density?: 'compact' | 'default' | 'loose';
  /** Additional CSS class */
  className?: string;
}

export const TabsTriggerVE = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ children, value, density = 'default', className, ...props }, ref) => {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      value={value}
      className={clsx(tabsTrigger({ density }), className)}
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
});

TabsTriggerVE.displayName = 'TabsTriggerVE';
