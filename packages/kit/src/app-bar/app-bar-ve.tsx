import React from "react";
import * as styles from "./AppBar.css";
import { sprinkles } from "../theme/sprinkles.css";
import type { Sprinkles } from "../theme/sprinkles.css";

type AppBarPosition = keyof typeof styles.appBarPositions;

interface AppBarVEProps
  extends Omit<
      React.ComponentPropsWithRef<"div">,
      keyof Sprinkles | "position"
    >,
    Omit<Sprinkles, "position"> {
  /** Additional CSS classes */
  className?: string;
  /** App bar's position in time and space */
  position?: AppBarPosition;
  /** App bar's shadow in time and space */
  shadow?: boolean;
}

export const AppBarVE = React.forwardRef<HTMLDivElement, AppBarVEProps>(
  ({ className, position = "relative", shadow = false, ...props }, ref) => {
    // Extract sprinkle props
    const sprinkleProps: Partial<Sprinkles> = {};
    const otherProps: Omit<
      React.ComponentPropsWithRef<"div">,
      keyof Sprinkles | "position"
    > = {};

    Object.entries(props).forEach(([key, value]) => {
      if (
        key !== "position" &&
        sprinkles.properties.has(key as keyof Sprinkles)
      ) {
        (sprinkleProps as Record<string, unknown>)[key] = value;
      } else if (key !== "position") {
        (otherProps as Record<string, unknown>)[key] = value;
      }
    });

    const appBarClassName = [
      styles.appBar,
      styles.appBarPositions[position],
      shadow && styles.appBarShadow,
      sprinkles(sprinkleProps),
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return <div ref={ref} className={appBarClassName} {...otherProps} />;
  }
);

AppBarVE.displayName = "AppBar";

export type { AppBarVEProps };
