import { forwardRef, useContext } from "react";
import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { styled, theme } from "../theme";
import { ActionMenuContext } from "./context";

import type { DropdownMenuLabelProps as RadixDropdownMenuLabelProps } from "@radix-ui/react-dropdown-menu";
import type * as WPDS from "../theme";

const NAME = "ActionMenuLabel";

export const StyledLabel = styled(ActionMenuPrimitive.Label, {
  fontFamily: theme.fonts.subhead, // font family example
  fontSize: theme.fontSizes["075"],
  color: theme.colors.accessible,
  fontWeight: theme.fontWeights.regular,
  marginBottom: theme.space["025"],
  variants: {
    density: {
      loose: {
        paddingLeft: theme.space["100"],
        paddingRight: theme.space["100"],
        marginTop: theme.sizes["100"],
      },
      default: {
        paddingLeft: theme.space["075"],
        paddingRight: theme.space["075"],
        marginTop: theme.sizes["075"],
      },
      compact: {
        paddingLeft: theme.space["050"],
        paddingRight: theme.space["050"],
        marginTop: theme.sizes["050"],
      },
    },
  },
  defaultVariants: {
    density: "default",
  },
});

export type ActionMenuLabelProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuLabelProps;

export const ActionMenuLabel = forwardRef<HTMLDivElement, ActionMenuLabelProps>(
  ({ children, ...props }: ActionMenuLabelProps, ref) => {
    const context = useContext(ActionMenuContext);
    return (
      <StyledLabel
        {...props}
        ref={ref}
        density={context.density}
        className="action-menu-label"
      >
        {children}
      </StyledLabel>
    );
  }
);

ActionMenuLabel.displayName = NAME;
