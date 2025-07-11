import React from "react";
import { clsx } from "clsx";
import {
  headingRecipe,
  bodyTextRecipe,
  metaTextRecipe,
} from "./Typography.css";
import type {
  HeadingVariants,
  BodyTextVariants,
  MetaTextVariants,
} from "./Typography.css";

// Heading component
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: "headline" | "subhead" | "magazine";
  size?:
    | "075"
    | "087"
    | "100"
    | "112"
    | "125"
    | "150"
    | "162"
    | "175"
    | "200"
    | "225"
    | "250"
    | "275"
    | "300"
    | "350"
    | "400"
    | "450"
    | "500";
  color?:
    | "primary"
    | "onPrimary"
    | "secondary"
    | "onSecondary"
    | "error"
    | "success"
    | "warning"
    | "signal"
    | "disabled"
    | "onDisabled";
  children?: React.ReactNode;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      as: Component = "h1",
      level,
      variant,
      size,
      color,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Auto-detect level from component if not provided
    const actualLevel =
      level ||
      (Component
        ? (parseInt(Component.charAt(1)) as 1 | 2 | 3 | 4 | 5 | 6)
        : 1);

    return (
      <Component
        ref={ref}
        className={clsx(
          headingRecipe({
            level: actualLevel,
            variant,
            size,
            color,
          }),
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";

// Body Text component
export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType;
  size?: "075" | "087" | "100" | "112" | "125" | "150" | "162" | "175" | "200";
  weight?: "light" | "regular" | "bold" | "ultra";
  color?:
    | "primary"
    | "onPrimary"
    | "secondary"
    | "onSecondary"
    | "error"
    | "success"
    | "warning"
    | "signal"
    | "disabled"
    | "onDisabled";
  family?: "body" | "meta" | "headline" | "magazine";
  children?: React.ReactNode;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      as: Component = "p",
      size,
      weight,
      color,
      family,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={clsx(
          bodyTextRecipe({
            size,
            weight,
            color,
            family,
          }),
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";

// Meta Text component (for smaller auxiliary text)
export interface MetaTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
  size?: "075" | "087" | "100" | "112" | "125";
  weight?: "light" | "regular" | "bold";
  color?:
    | "primary"
    | "onPrimary"
    | "secondary"
    | "onSecondary"
    | "error"
    | "success"
    | "warning"
    | "signal"
    | "disabled"
    | "onDisabled";
  children?: React.ReactNode;
}

export const MetaText = React.forwardRef<HTMLSpanElement, MetaTextProps>(
  (
    {
      as: Component = "span",
      size,
      weight,
      color,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={clsx(
          metaTextRecipe({
            size,
            weight,
            color,
          }),
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

MetaText.displayName = "MetaText";

// Export type definitions
export type { HeadingVariants, BodyTextVariants, MetaTextVariants };
