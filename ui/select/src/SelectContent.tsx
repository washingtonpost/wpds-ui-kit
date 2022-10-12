import React, { useEffect } from "react";

import { styled, theme } from "@washingtonpost/wpds-theme";
import { Icon } from "@washingtonpost/wpds-icon";
import { ChevronUp, ChevronDown } from "@washingtonpost/wpds-assets";

import * as SelectPrimitive from "@radix-ui/react-select";
import type * as WPDS from "@washingtonpost/wpds-theme";

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: "hidden",
  backgroundColor: theme.colors.secondary,
  color: theme.colors.primary,
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  fontWeight: theme.fontWeights.light,
  lineHeight: theme.lineHeights["125"],
  maxWidth: "350px", //this should be based on the width of the trigger
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

export type SelectContentProps = {
  /** Used to insert select elements into the root component*/
  children?: React.ReactNode;
  /** Overrides for the input text styles. Padding overrides affect the input container and  */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof StyledContent>;

export const SelectContent = React.forwardRef<
  HTMLDivElement,
  SelectContentProps
>(({ children, ...props }: SelectContentProps, ref) => {
  // const contentRef = React.createRef();

  useEffect(() => {
    // contentRef.current.getBoundingClientRect();
  }, []);

  // let rect = StyledContent.getBoundingClientRect()
  return (
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
  );
});

SelectContent.displayName = "SelectContent";
