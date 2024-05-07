import React from "react";
import { SelectContext } from "./SelectRoot";

import { styled, theme } from "../theme";
import { Icon } from "../icon";
import { ChevronUp, ChevronDown } from "@washingtonpost/wpds-assets";

import * as SelectPrimitive from "@radix-ui/react-select";
import type * as WPDS from "../theme";

const StyledContent = styled(SelectPrimitive.Content, {
  backgroundColor: theme.colors.secondary,
  borderTop: `none`,
  borderRight: `1px solid ${theme.colors.gray300}`,
  borderBottom: `1px solid ${theme.colors.gray300}`,
  borderLeft: `1px solid ${theme.colors.gray300}`,
  color: theme.colors.primary,
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  fontWeight: theme.fontWeights.light,
  lineHeight: theme.lineHeights["125"],
  paddingBlock: "11px",
  overflowWrap: "anywhere",
  maxHeight: "var(--radix-select-content-available-height)",
});

const StyledViewport = styled(SelectPrimitive.Viewport, {});

const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 25,
  backgroundColor: theme.colors["secondary"],
  cursor: "default",
  variants: {
    top: {
      true: {
        marginBlockStart: "-11px",
      },
    },
    bottom: {
      true: {
        marginBlockEnd: "-11px",
      },
    },
  },
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
>(({ children, css, ...props }: SelectContentProps, ref) => {
  const { contentWidth } = React.useContext(SelectContext);

  return (
    <SelectPrimitive.Portal>
      <StyledContent
        //make width match that of the trigger. Allow override
        css={{
          width: `${contentWidth}px`,
          ...css,
        }}
        {...props}
        position="popper"
        side="bottom"
        ref={ref}
      >
        <StyledScrollUpButton top>
          <Icon label="">
            <ChevronUp />
          </Icon>
        </StyledScrollUpButton>
        <StyledViewport>{children}</StyledViewport>
        <StyledScrollDownButton bottom>
          <Icon label="">
            <ChevronDown />
          </Icon>
        </StyledScrollDownButton>
      </StyledContent>
    </SelectPrimitive.Portal>
  );
});

SelectContent.displayName = "SelectContent";
