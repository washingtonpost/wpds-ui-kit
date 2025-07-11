import React from 'react';
import { clsx } from 'clsx';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { tabsList } from './Tabs.css';

export interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  /** Children content */
  children?: React.ReactNode;
  /** Orientation of the tabs */
  orientation?: 'horizontal' | 'vertical';
  /** Additional CSS class */
  className?: string;
}

export const TabsListVE = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ children, orientation = 'horizontal', className, ...props }, ref) => {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={clsx(tabsList({ orientation }), className)}
      {...props}
    >
      {children}
    </TabsPrimitive.List>
  );
});

TabsListVE.displayName = 'TabsListVE';
