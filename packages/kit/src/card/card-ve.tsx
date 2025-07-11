import React from "react";
import * as styles from "./Card.css";
import { sprinkles } from "../theme/sprinkles.css";
import type { Sprinkles } from "../theme/sprinkles.css";

interface CardVEProps 
  extends Omit<React.ComponentPropsWithRef<"div">, keyof Sprinkles>,
    Sprinkles {
  /** Additional CSS classes */
  className?: string;
  /** The nested elements inside Card */
  children?: React.ReactNode;
}

export const CardVE = React.forwardRef<HTMLDivElement, CardVEProps>(
  ({ children, className, ...props }, ref) => {
    // Extract sprinkle props
    const sprinkleProps: Partial<Sprinkles> = {};
    const otherProps: Omit<React.ComponentPropsWithRef<"div">, keyof Sprinkles> = {};
    
    Object.entries(props).forEach(([key, value]) => {
      if (sprinkles.properties.has(key as keyof Sprinkles)) {
        (sprinkleProps as Record<string, unknown>)[key] = value;
      } else {
        (otherProps as Record<string, unknown>)[key] = value;
      }
    });

    const cardClassName = [
      styles.card,
      sprinkles(sprinkleProps),
      className
    ].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={cardClassName} {...otherProps}>
        {children}
      </div>
    );
  }
);

CardVE.displayName = "Card";

export type { CardVEProps };
