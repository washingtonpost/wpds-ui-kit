import * as React from 'react';
import { containerRecipe } from './Container.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children?: React.ReactNode;
  maxWidth?: 'fluid' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ as: Component = 'div', className, maxWidth, children, ...rest }, ref) => {
    return (
      <Component
        ref={ref}
        className={[
          containerRecipe({ maxWidth }),
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';
