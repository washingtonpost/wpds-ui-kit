import React from "react";
import { clsx } from "clsx";
import { buttonRecipe } from "./Button.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
export type ButtonVariant = NonNullable<ButtonVariants>["variant"];
export type ButtonDensity = NonNullable<ButtonVariants>["density"];
export type ButtonIcon = NonNullable<ButtonVariants>["icon"];

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  density?: ButtonDensity;
  isOutline?: boolean;
  icon?: ButtonIcon;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "secondary",
      density = "default",
      isOutline = false,
      icon = "left",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          buttonRecipe({ variant, density, isOutline, icon }),
          className
        )}
        {...props}
      >
        {/* Icon handling will be added when we migrate Icon component */}
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

// Legacy type exports for backward compatibility
export type { ButtonProps as ButtonInterface };
