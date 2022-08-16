import * as React from "react";
import { DrawerContext } from "./DrawerRoot";
import { Button } from "@washingtonpost/wpds-button";
import { Icon } from "@washingtonpost/wpds-icon";
import { Close } from "@washingtonpost/wpds-assets";

//DrawerClose.propTypes = {
//  as: PropTypes.string,
//  className: PropTypes.string,
//  /** Should the close button be fixed and sit above text on scroll */
//  sticky: PropTypes.bool,
//};

const NAME = "DrawerClose";

interface DrawerCloseProps extends React.ComponentPropsWithRef<typeof Button> {
  sticky?: boolean;
}

export const DrawerClose = React.forwardRef<
  HTMLButtonElement,
  DrawerCloseProps
>(({ sticky = true, ...props }, ref) => {
  const context = React.useContext(DrawerContext);

  return (
    <Button
      ref={ref}
      onClick={() => {
        context.onOpenChange(false);
      }}
      color="white"
      aria-label="Close Drawer"
      className={
        sticky ? "sticky" : ""
        //getClasses("fr pointer", {
        //  "sticky z-1 top-sm right-sm": sticky,
        //  "mr-sm mt-sm": !sticky && !className,
        //  [className]: className,
        //})
      }
      {...props}
    >
      <Icon label="">
        <Close />
      </Icon>
    </Button>
  );
});

DrawerClose.displayName = NAME;

export type { DrawerCloseProps };
