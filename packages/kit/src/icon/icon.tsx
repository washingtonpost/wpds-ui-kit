import { Children, cloneElement, forwardRef } from "react";
import { VisuallyHidden } from "../visually-hidden";
import { css, theme } from "../theme";

import type * as WPDS from "../theme";

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
  size?: "100" | "150" | "200" | number;
  children?: React.ReactNode;
  className?: string;
  css?: WPDS.CSS;
  fill?: string | WPDSThemeColorObject;
  id?: string;
  alt?: string;
}

export const Icon = forwardRef<React.ReactSVGElement, IconInterface>(
  (
    {
      children,
      size = "100",
      fill = "currentColor",
      label,
      className = "",
      css: cssProp,
      ...props
    },
    ref
  ) => {
    const child = Children.only(children);

    const IconSizeStyle = css({
      size: theme.sizes[size] || size,
      fill,
    });

    return (
      <>
        {cloneElement(child as React.ReactElement, {
          "aria-hidden": true,
          focusable: false,
          role: "img",
          ref,
          fill: fill,
          className: `${IconSizeStyle({
            css: cssProp,
            color: fill,
          })} ${className}`,
          ...props,
        })}
        {label ? <VisuallyHidden>{label}</VisuallyHidden> : null}
      </>
    );
  }
);

type IconProps = React.ComponentPropsWithRef<typeof Icon>;

Icon.displayName = NAME;

export type { IconProps, IconInterface };
