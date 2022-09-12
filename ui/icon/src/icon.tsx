import * as React from "react";
import { VisuallyHidden } from "@washingtonpost/wpds-visually-hidden";
import { css, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "Icon";

interface IconInterface extends React.SVGProps<HTMLOrSVGElement> {
  /**
   * The name of the icon to display.
   */
  size?: "100" | "150" | "200" | number;
  label: string;
  children?: React.ReactNode;
  className?: string;
  css: WPDS.CSS;
}

export const Icon = React.forwardRef<React.ReactSVGElement, IconInterface>(
  (
    {
      children,
      size = "100",
      fill = "currentColor",
      label,
      className = "",
      ...props
    },
    ref
  ) => {
    const child = React.Children.only(children);

    const IconSizeStyle = css({
      size: theme.sizes[size] || size,
      fill,
    });

    return (
      <>
        {React.cloneElement(child as React.ReactElement, {
          "aria-hidden": true,
          focusable: false,
          role: "img",
          ref,
          className: `${IconSizeStyle({
            css: props.css,
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
