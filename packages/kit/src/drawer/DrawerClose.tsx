import * as React from "react";
import { DrawerContext } from "./DrawerRoot";
import { styled, theme } from "../theme";
import { Button } from "../button";
import { Icon } from "../icon";
import { Close } from "@washingtonpost/wpds-assets";

const NAME = "DrawerClose";

const CloseButton = styled(Button, {
  variants: {
    sticky: {
      true: {
        position: "sticky",
        top: theme.space["100"],
        right: theme.space["100"],
        float: "right",
      },
    },
  },
});

type DrawerCloseProps = React.ComponentPropsWithRef<typeof CloseButton> & {
  sticky?: boolean;
  /** @default compact */
  density?: "default" | "compact";
  /** @default center */
  icon?: "left" | "right" | "center" | "none";
  /** @default secondary */
  variant?: "primary" | "secondary" | "cta";
};

export const DrawerClose = React.forwardRef<
  HTMLButtonElement,
  DrawerCloseProps
>(
  (
    {
      density = "compact",
      icon = "center",
      sticky = true,
      variant = "secondary",
      children,
      ...props
    },
    ref
  ) => {
    const context = React.useContext(DrawerContext);

    return (
      <CloseButton
        ref={ref}
        onClick={() => {
          context.onOpenChange(false);
        }}
        aria-label="Close Drawer"
        density={density}
        icon={icon}
        sticky={sticky}
        variant={variant}
        {...props}
      >
        <Icon label="">{children ? children : <Close />}</Icon>
      </CloseButton>
    );
  }
);

DrawerClose.displayName = NAME;

export type { DrawerCloseProps };
