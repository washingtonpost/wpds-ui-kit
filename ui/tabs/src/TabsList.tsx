import * as React from "react";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { styled, theme } from "@washingtonpost/wpds-theme";

const StyledTabsList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: "flex",
  boxShadow: `inset 0 -1px 0 0 ${theme.colors.faint}, 0 0 0 0 ${theme.colors.faint}`,
  gap: theme.space["075"],
  overflow: "auto",
  width: "fit-content",
  maxWidth: "100%",

  // hide scroll bar while allowing scroll
  scrollbarWidth: "none",
  "-ms-overflow-style": "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },

  variants: {
    align: {
      center: {
        justifyContent: "center",
      },
      left: {
        justifyContent: "left",
      },
    },
  },
});

export type TabsListProps = {
  children?: React.ReactNode;
  align?: "center" | "left" | undefined;
};

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ align = "left", children, ...props }: TabsListProps, ref) => {
    return (
      <StyledTabsList {...props} ref={ref} align={align}>
        {children}
      </StyledTabsList>
    );
  }
);

TabsList.displayName = "TabsList";
