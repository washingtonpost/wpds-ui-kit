import * as React from "react";
import { DrawerContext } from "./DrawerRoot";
import { Button } from "@washingtonpost/wpds-button";
import { Close } from "@washingtonpost/wpds-assets";

//DrawerClose.propTypes = {
//  as: PropTypes.string,
//  className: PropTypes.string,
//  /** Should the close button be fixed and sit above text on scroll */
//  sticky: PropTypes.bool,
//};

export const DrawerClose = ({ as = "button", sticky = true, ...props }) => {
  const context = React.useContext(DrawerContext);

  return (
    <Button
      size="small"
      as={as}
      onClick={() => {
        context.onOpenChange(false);
      }}
      color="white"
      renderIcon={Close}
      ariaLabel="Close Drawer"
      className={
        sticky ? "sticky" : ""
        //getClasses("fr pointer", {
        //  "sticky z-1 top-sm right-sm": sticky,
        //  "mr-sm mt-sm": !sticky && !className,
        //  [className]: className,
        //})
      }
      {...props}
    />
  );
};
