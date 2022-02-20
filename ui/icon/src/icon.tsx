import * as React from "react";
import { VisuallyHidden } from "@washingtonpost/wpds-visually-hidden";

const NAME = "Icon";

interface IconInterface extends React.HTMLAttributes<HTMLOrSVGImageElement> {
  size?: "16" | "24" | "32";
  label: string;
}

export const Icon = React.forwardRef<HTMLOrSVGImageElement, IconInterface>(
  ({ children, size = "16", label, ...props }, ref) => {
    const child = React.Children.only(children);

    return (
      <>
        {React.cloneElement(child as React.ReactElement, {
          "aria-hidden": true,
          focusable: false,
          width: size,
          height: size,
          role: "img",
          ref,
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
