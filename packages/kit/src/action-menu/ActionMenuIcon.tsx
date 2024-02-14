import { forwardRef } from "react";
import { theme, styled } from "../theme";

import type * as WPDS from "../theme";

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

const IconPlaceholder = styled("div", {
  width: theme.space["100"],
});

export type ActionMenuIconProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  side?: "left" | "right";
};

export const ActionMenuIcon = forwardRef<HTMLDivElement, ActionMenuIconProps>(
  ({ children, side = "left", ...props }: ActionMenuIconProps, ref) => {
    return side === "left" ? (
      <LeftIcon {...props} ref={ref} className="action-menu-icon">
        {children ? (
          children
        ) : (
          <IconPlaceholder data-testid="icon-placeholder" />
        )}
      </LeftIcon>
    ) : (
      <RightIcon {...props} ref={ref} className="action-menu-icon">
        {children ? (
          children
        ) : (
          <IconPlaceholder data-testid="icon-placeholder" />
        )}
      </RightIcon>
    );
  }
);

ActionMenuIcon.displayName = "ActionMenuIcon";
