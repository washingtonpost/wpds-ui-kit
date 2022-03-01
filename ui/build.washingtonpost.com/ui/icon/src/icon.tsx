import * as React from "react";
import { VisuallyHidden } from "@washingtonpost/wpds-visually-hidden";

const NAME = "Icon";

interface IconInterface extends React.HTMLAttributes<HTMLOrSVGImageElement> {
  size?: "$100" | "$150" | "$200";
  label: string;
  children?: React.ReactNode;
}

const Sizes = {
  $100: "1rem",
  $150: "1.5rem",
  $200: "2rem",
};

export const Icon = React.forwardRef<HTMLOrSVGImageElement, IconInterface>(
  ({ children, size = "$100", label, ...props }, ref) => {
    const child = React.Children.only(children);

    return (
      <>
        {React.cloneElement(child as React.ReactElement, {
          "aria-hidden": true,
          focusable: false,
          width: Sizes[size] || size,
          height: Sizes[size] || size,
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
