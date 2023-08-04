import * as React from "react";
import WPDS, { theme, styled } from "@washingtonpost/wpds-theme";

const RightIcon = styled("div", {
  marginLeft: "auto",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

const LeftIcon = styled("div", {
  paddingRight: theme.space["050"],
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

export type ActionMenuIconProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  side?: "left" | "right";
};

export const ActionMenuIcon = React.forwardRef<
  HTMLDivElement,
  ActionMenuIconProps
>(({ children,
     side = "left",
     ...props }: ActionMenuIconProps, ref) => {
    return (

        (side === "left") ? 
            <LeftIcon {...props} ref={ref} className="action-menu-icon">{children}</LeftIcon> :
        <RightIcon {...props} ref={ref} className="action-menu-icon">{children}</RightIcon>
        

    );
});

ActionMenuIcon.displayName = "ActionMenuIcon";