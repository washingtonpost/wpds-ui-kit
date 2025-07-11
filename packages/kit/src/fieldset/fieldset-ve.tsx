import React from "react";
import * as styles from "./Fieldset.css";
import { sprinkles } from "../theme/sprinkles.css";
import type { Sprinkles } from "../theme/sprinkles.css";

const NAME = "Fieldset";

interface FieldsetVEProps
  extends Omit<React.ComponentPropsWithRef<"fieldset">, keyof Sprinkles>,
    Sprinkles {
  /** Additional CSS classes */
  className?: string;
  /** legend displayed above fieldset */
  legend: React.ReactNode;
  /** if the inputs in the fieldset are required */
  required?: boolean;
}

export const FieldsetVE = React.forwardRef<
  HTMLFieldSetElement,
  FieldsetVEProps
>(({ children, className, legend, required, ...props }, ref) => {
  // Extract sprinkle props
  const sprinkleProps: Partial<Sprinkles> = {};
  const otherProps: Omit<
    React.ComponentPropsWithRef<"fieldset">,
    keyof Sprinkles
  > = {};

  Object.entries(props).forEach(([key, value]) => {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      (sprinkleProps as Record<string, unknown>)[key] = value;
    } else {
      (otherProps as Record<string, unknown>)[key] = value;
    }
  });

  const fieldsetClassName = [
    styles.fieldset,
    sprinkles(sprinkleProps),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <fieldset className={fieldsetClassName} {...otherProps} ref={ref}>
      <legend className={styles.legend}>
        {legend}
        {required && <span className={styles.requiredIndicator}>*</span>}
      </legend>
      {children}
    </fieldset>
  );
});

FieldsetVE.displayName = NAME;

export type { FieldsetVEProps };
