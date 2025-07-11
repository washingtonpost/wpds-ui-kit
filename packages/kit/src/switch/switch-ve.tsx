import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { switchRootRecipe, switchThumbRecipe } from "./Switch.css";

interface SwitchRootProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  /**
   * The `variant` prop is used to set the color of the switch. The `primary` variant is the default. The `cta` variant is used for the call to action switch.
   * @default primary
   */
  variant?: "primary" | "cta";
  /**
   * Error state of the switch
   * @default false
   */
  error?: boolean;
  /**
   * CSS class name override
   */
  className?: string;
}

interface SwitchThumbProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Thumb> {
  /**
   * The `variant` prop is used to set the color of the thumb. Should match the parent Switch.Root variant.
   * @default primary
   */
  variant?: "primary" | "cta";
  /**
   * CSS class name override
   */
  className?: string;
}

export const SwitchRoot = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchRootProps
>(({ className, variant = "primary", error = false, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={`${switchRootRecipe({ variant, error })} ${className || ""}`}
    ref={ref}
    {...props}
  />
));

SwitchRoot.displayName = "SwitchRoot";

export const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Thumb>,
  SwitchThumbProps
>(({ className, variant = "primary", ...props }, ref) => (
  <SwitchPrimitive.Thumb
    className={`${switchThumbRecipe({ variant })} ${className || ""}`}
    ref={ref}
    {...props}
  />
));

SwitchThumb.displayName = "SwitchThumb";

export type SwitchProps = {
  Root: typeof SwitchRoot;
  Thumb: typeof SwitchThumb;
};

export const Switch: SwitchProps = {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
};

export type { SwitchRootProps, SwitchThumbProps };
