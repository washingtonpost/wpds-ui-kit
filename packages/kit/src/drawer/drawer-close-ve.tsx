import React from "react";
import { DrawerContextVE } from "./drawer-root-ve";
import { Button } from "../button/button-ve";
import { IconVE } from "../icon/icon-ve";
import { Close } from "@washingtonpost/wpds-assets";
import { drawerCloseStyles } from "./Drawer.css";
import type { ButtonProps } from "../button/button-ve";

const NAME = "DrawerCloseVE";

type DrawerCloseVEProps = ButtonProps & {
  sticky?: boolean;
  /** @default compact */
  density?: "default" | "compact";
  /** @default center */
  icon?: "left" | "right" | "center" | "none";
  /** @default secondary */
  variant?: "primary" | "secondary" | "cta";
};

export const DrawerCloseVE: React.FC<DrawerCloseVEProps> = ({
  children,
  sticky = false,
  density = "compact",
  icon = "center",
  variant = "secondary",
  className,
  ...props
}) => {
  const context = React.useContext(DrawerContextVE);

  const closeClass = drawerCloseStyles({ sticky });

  return (
    <Button
      className={`${closeClass} ${className || ""}`}
      density={density}
      variant={variant}
      icon={icon}
      onClick={() => {
        context.onOpenChange(false);
      }}
      {...props}
    >
      {children ? (
        children
      ) : (
        <>
          <IconVE label="Close Drawer">
            <Close />
          </IconVE>
        </>
      )}
    </Button>
  );
};

DrawerCloseVE.displayName = NAME;

export type { DrawerCloseVEProps };
