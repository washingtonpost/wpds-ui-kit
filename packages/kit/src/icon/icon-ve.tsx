import React, { Children, cloneElement, forwardRef } from "react";
import { clsx } from "clsx";
import { VisuallyHidden } from "../visually-hidden";
import { iconRecipe, type IconVariants } from "./Icon.css";

const NAME = "Icon";

export type WPDSThemeColorObject = {
  token: string;
  value: string;
  scale: string;
  prefix: string;
};

interface IconInterface extends Omit<React.SVGProps<HTMLOrSVGElement>, "fill"> {
  /**
   * The name of the icon to display.
   */
  label: string;
  size?: "100" | "150" | "200" | string | number;
  children?: React.ReactNode;
  className?: string;
  fill?:
    | "currentColor"
    | "primary"
    | "secondary"
    | "onSecondary"
    | "error"
    | "success"
    | "warning"
    | "signal"
    | "disabled"
    | string
    | WPDSThemeColorObject;
  id?: string;
  alt?: string;
}

export const IconVE = forwardRef<React.ReactSVGElement, IconInterface>(
  (
    {
      children,
      size = "100",
      fill = "currentColor",
      label,
      className = "",
      style,
      ...props
    },
    ref
  ) => {
    const child = Children.only(children);

    // Handle size variants
    const sizeVariant =
      typeof size === "string" && ["100", "150", "200"].includes(size)
        ? (size as "100" | "150" | "200")
        : undefined;

    // Handle fill variants
    const fillVariant =
      typeof fill === "string" &&
      [
        "currentColor",
        "primary",
        "secondary",
        "onSecondary",
        "error",
        "success",
        "warning",
        "signal",
        "disabled",
      ].includes(fill)
        ? (fill as
            | "currentColor"
            | "primary"
            | "secondary"
            | "onSecondary"
            | "error"
            | "success"
            | "warning"
            | "signal"
            | "disabled")
        : "currentColor";

    // Custom sizing style for numeric or non-standard sizes
    const customSizeStyle =
      !sizeVariant && (typeof size === "number" || typeof size === "string")
        ? {
            width: typeof size === "number" ? `${size}px` : size,
            height: typeof size === "number" ? `${size}px` : size,
          }
        : {};

    // Custom fill style for non-standard fills
    const customFillStyle =
      typeof fill === "string" &&
      ![
        "currentColor",
        "primary",
        "secondary",
        "onSecondary",
        "error",
        "success",
        "warning",
        "signal",
        "disabled",
      ].includes(fill)
        ? { fill }
        : {};

    return (
      <>
        {cloneElement(child as React.ReactElement, {
          "aria-hidden": true,
          focusable: false,
          role: "img",
          ref,
          className: clsx(
            iconRecipe({
              size: sizeVariant,
              fill: fillVariant,
            }),
            className
          ),
          style: {
            ...customSizeStyle,
            ...customFillStyle,
            ...style,
          },
          ...props,
        })}
        {label ? <VisuallyHidden>{label}</VisuallyHidden> : null}
      </>
    );
  }
);

type IconProps = React.ComponentPropsWithRef<typeof IconVE>;

IconVE.displayName = NAME;

export type { IconProps, IconInterface, IconVariants };
