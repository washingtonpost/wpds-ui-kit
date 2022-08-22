import * as React from "react";
import { DrawerContext } from "./DrawerRoot";
import { styled, theme } from "@washingtonpost/wpds-theme";
import { Button } from "@washingtonpost/wpds-button";
import { Icon } from "@washingtonpost/wpds-icon";
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
};

export const DrawerClose = React.forwardRef<
  HTMLButtonElement,
  DrawerCloseProps
>(({ sticky = true, ...props }, ref) => {
  const context = React.useContext(DrawerContext);

  return (
    <CloseButton
      ref={ref}
      onClick={() => {
        context.onOpenChange(false);
      }}
      aria-label="Close Drawer"
      sticky={sticky}
      density="compact"
      icon="center"
      {...props}
    >
      <Icon label="">
        <Close />
      </Icon>
    </CloseButton>
  );
});

DrawerClose.displayName = NAME;

export type { DrawerCloseProps };
