import * as React from "react";

import WPDS, { theme, styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ActionMenuContext } from "./context";

import { DropdownMenuContentProps as RadixDropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";

import { ActionMenuPortal } from "./ActionMenuPortal";

const NAME = "ActionMenuContent";

export const ContentStyles = {
  background: theme.colors.secondary,
  border: `solid 1px ${theme.colors.subtle}`,
  borderRadius: theme.radii["050"],
  boxShadow: theme.shadows["300"],
  color: theme.colors.primary,
  fontFamily: theme.fonts.subhead,
  fontSize: theme.fontSizes["050"],
  fontWeight: theme.fontWeights.regular,
  lineHeight: theme.sizes["100"],
  maxHeight: "var(--radix-dropdown-menu-content-available-height)",
  maxWidth: "var(--radix-dropdown-menu-content-available-width)",
  minWidth: "200px",
  overflow: "auto",
  width: "fit-content",
  padding: "1px",
};

const StyledContent = styled(ActionMenuPrimitive.Content, {
  ...ContentStyles,
});

export type ActionMenuContentProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuContentProps;

export const ActionMenuContent = React.forwardRef<
  HTMLDivElement,
  ActionMenuContentProps
>(({ children, ...props }: ActionMenuContentProps, ref) => {
  const context = React.useContext(ActionMenuContext);

  const handleInteractOutside = () => {
    const item = context?.stack.shift();

    context?.setStack([item ? item : ""]);
  };
  return (
    <ActionMenuPortal>
      <StyledContent
        {...props}
        ref={ref}
        onInteractOutside={handleInteractOutside}
        sideOffset={4}
      >
        {children}
      </StyledContent>
    </ActionMenuPortal>
  );
});

ActionMenuContent.displayName = NAME;
