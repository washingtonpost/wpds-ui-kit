import * as React from "react";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import type * as WPDS from "@washingtonpost/wpds-theme";

import { styled, theme } from "@washingtonpost/wpds-theme";

const StyledTabsList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: "flex",
  boxShadow: `inset 0 -1px 0 0 ${theme.colors.faint}, 0 0 0 0 ${theme.colors.faint}`,
  gap: theme.space["075"],
  overflow: "auto",
  width: "fit-content",
  maxWidth: "100%",
  flex: 1,

  // hide scroll bar while allowing scroll
  scrollbarWidth: "none",
  "-ms-overflow-style": "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },

  variants: {
    align: {
      center: {
        margin: "0 auto",
      },
      left: {
        justifyContent: "left",
        margin: "0",
      },
    },
  },
});

type TabsListVariants = WPDS.VariantProps<typeof StyledTabsList>;

type TabsListProps = {
  children?: React.ReactNode;
  /** the alignment of the list content along the tab bar. Default is left aligned */
  align?: "center" | "left" | undefined;
  /** the overall size of the component. Default is default (theme.fontSizes[100]) */
  density?: "default" | "compact" | "loose" | undefined;
} & TabsListVariants &
  React.ComponentProps<typeof StyledTabsList>;

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ align = "left", children, ...props }: TabsListProps, ref) => {
    return (
      <StyledTabsList ref={ref} align={align} {...props}>
        {children}
      </StyledTabsList>
    );
  }
);

export type { TabsListProps };

TabsList.displayName = "TabsList";
