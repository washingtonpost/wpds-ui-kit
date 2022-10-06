import * as React from "react";

import { styled, theme } from "@washingtonpost/wpds-theme";
import { Icon } from "@washingtonpost/wpds-icon";
import { ChevronUp, ChevronDown } from "@washingtonpost/wpds-assets";

import * as SelectPrimitive from "@radix-ui/react-select";

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: "hidden",
  backgroundColor: theme.colors.secondary,
  color: theme.colors.primary,
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  fontWeight: theme.fontWeights.light,
  lineHeight: theme.lineHeights["125"],
});

const StyledViewport = styled(SelectPrimitive.Viewport, {});

const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 25,
  backgroundColor: theme.colors["secondary"],
  cursor: "default",
};

const StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
);

const StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
);

export const SelectContent = React.forwardRef<
  HTMLDivElement,
  typeof StyledContent
>(({ children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <StyledContent {...props} ref={ref}>
      <StyledScrollUpButton>
        <Icon label="">
          <ChevronUp />
        </Icon>
      </StyledScrollUpButton>
      <StyledViewport>{children}</StyledViewport>
      <StyledScrollDownButton>
        <Icon label="">
          <ChevronDown />
        </Icon>
      </StyledScrollDownButton>
    </StyledContent>
  </SelectPrimitive.Portal>
));

SelectContent.displayName = "SelectContent";
