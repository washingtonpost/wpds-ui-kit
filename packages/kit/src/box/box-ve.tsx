import React from 'react';
import { clsx } from 'clsx';
import { sprinkles, type Sprinkles } from '../theme/sprinkles.css';

export interface BoxProps 
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof Sprinkles>,
          Sprinkles {
  as?: React.ElementType;
  children?: React.ReactNode;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ as: Component = 'div', className, children, ...props }, ref) => {
    // Extract sprinkle props from other props
    const sprinkleProps: Record<string, unknown> = {};
    const otherProps: Record<string, unknown> = {};
    
    Object.entries(props).forEach(([key, value]) => {
      // Check if this is a sprinkle property by trying to call sprinkles with it
      try {
        const testObj = { [key]: value };
        sprinkles(testObj);
        sprinkleProps[key] = value;
      } catch {
        otherProps[key] = value;
      }
    });
    
    const sprinkleClasses = sprinkles(sprinkleProps);
    
    return (
      <Component
        ref={ref}
        className={clsx(sprinkleClasses, className)}
        {...otherProps}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = 'Box';
