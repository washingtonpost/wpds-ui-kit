import { forwardRef } from "react";
import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { theme, styled } from "../theme";
import { ActionMenuPortal } from "./ActionMenuPortal";
import { ContentStyles } from "./ActionMenuContent";

import type { DropdownMenuSubContentProps as RadixDropdownMenuSubContentProps } from "@radix-ui/react-dropdown-menu";
import type * as WPDS from "../theme";

const NAME = "ActionMenuSubContent";

const StyledSubContent = styled(ActionMenuPrimitive.SubContent, {
  ...ContentStyles,
  boxShadow: theme.shadows["400"],
});

const StyledPortal = styled(ActionMenuPortal, {
  variants: {
    hidden: {
      true: {
        display: "none",
      },
      false: {
        display: "initial",
      },
    },
  },
});

type ShadowProp = "small" | "large";

export type ActionMenuSubContentProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  shadowSize?: ShadowProp;
} & RadixDropdownMenuSubContentProps;

export const ActionMenuSubContent = forwardRef<
  HTMLDivElement,
  ActionMenuSubContentProps
>(({ children, ...props }: ActionMenuSubContentProps, ref) => {
  return (
    <StyledPortal>
      <StyledSubContent
        {...props}
        ref={ref}
        alignOffset={-2} // Offset the ActionMenuContent border
      >
        {children}
      </StyledSubContent>
    </StyledPortal>
  );
});

ActionMenuSubContent.displayName = NAME;
