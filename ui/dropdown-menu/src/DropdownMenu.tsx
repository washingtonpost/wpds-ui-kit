import * as React from "react";
// import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
// import { Menu } from "@washingtonpost/wpds-assets";
// import { ChevronRight } from "@washingtonpost/wpds-assets";
// import { Check } from "@washingtonpost/wpds-assets";
// import { StarFull } from "@washingtonpost/wpds-assets";
import { styled, theme, CSS } from "@washingtonpost/wpds-theme";
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

// const NAME = "DropdownMenu";

const StyledDropdownMenu = styled("div", {
  appearance: "none",
  background: "transparent",
  border: "none",
  color: theme.colors.primary,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: theme.space["025"],
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  lineHeight: theme.lineHeights.meta,
  padding: theme.space["050"],
});

export type DropdownMenuProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: CSS;
} & React.ComponentPropsWithRef<typeof StyledDropdownMenu>;

export const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>
  (({ children, ...props }, ref) => {
    return (
      <StyledDropdownMenu {...props} ref={ref}>
        {children}
      </StyledDropdownMenu>
    );
  });