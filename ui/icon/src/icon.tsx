import * as React from "react";
import { VisuallyHidden } from "@washingtonpost/wpds-visually-hidden";
import { theme, styled } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "Icon";

interface IconInterface extends React.SVGProps<HTMLOrSVGElement> {
  /**
   * The size of the icon. Can use a number or a size token
   */
  size?: "100" | "150" | "200" | number;
  /**
   * The name of the icon to display.
   */
  label: string;
  /**
   * fill color of the icon
   */
  fill?: string;
  /**
   * css overrides
   */
  css?: WPDS.CSS;
}

export const Icon = React.forwardRef<React.ReactSVGElement, IconInterface>(
  (
    {
      children,
      size = "100",
      fill = "currentColor",
      label,
      className = "",
      css = {},
      ...props
    }: IconInterface,
    ref
  ) => {
    const child = typeof children === "function" ? children() : children;

    if (!child) {
      throw new Error(
        "Icon requires an asset from WAM. https://build.washingtonpost.com/components/icon"
      );
    }

    const StyledIcon = styled(child, {
      size: theme.sizes[size] || size,
      fill,
    });

    return (
      <>
        <StyledIcon
          ref={ref}
          className={className}
          aria-hidden="true"
          focusable="false"
          role="img"
          css={css}
          {...props}
        />
        {label ? <VisuallyHidden>{label}</VisuallyHidden> : null}
      </>
    );
  }
);

type IconProps = React.ComponentPropsWithRef<typeof Icon>;

Icon.displayName = NAME;

export type { IconProps, IconInterface };
