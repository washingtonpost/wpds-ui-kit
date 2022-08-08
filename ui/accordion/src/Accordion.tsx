import * as React from "react";
import { styled, keyframes } from "@stitches/react";
import { ChevronDown } from "@washingtonpost/wpds-assets";
import { theme } from "@washingtonpost/wpds-theme";
import { Icon } from "@washingtonpost/wpds-icon";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AccordionTriggerType, AccordionContentProps } from "./types";

export enum ACCORDION_TYPE {
  single = "single",
  multiple = "multiple",
}

export enum ACCORDION_DENSITY {
  compact = "compact",
  loose = "loose",
  default = "default",
}

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledItem = styled(AccordionPrimitive.Item, {
  borderBottom: `1px solid ${theme.colors.subtle}`,
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  flex: 1,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: theme.space[150],
  paddingBottom: theme.space[150],
  variants: {
    density: {
      default: {},
      compact: {
        paddingTop: theme.space[100],
        paddingBottom: theme.space[100],
      },
      loose: {
        paddingTop: theme.space[200],
        paddingBottom: theme.space[200],
      },
    },
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  color: theme.colors.primary,
  backgroundColor: theme.colors.gray700,
  display: "flex",
  width: "100%",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.colors.faint,
  },
  "&:focus-within": {
    position: "relative",
    zIndex: 1,
    boxShadow: `0 0 0 2px ${theme.colors.cta}`,
  },

  variants: {
    // these two classes are for the benefit of the docs only
    forcehover: {
      true: {
        cursor: "pointer",
        backgroundColor: theme.colors.faint,
      },
    },
    forcefocus: {
      true: {
        position: "relative",
        zIndex: 1,
        boxShadow: `0 0 0 2px ${theme.colors.cta}`,
      },
    },
  },
});

const StyledIcon = styled(Icon, {
  marginLeft: theme.space[150],
  minWidth: theme.fontSizes[100],
});

const StyledChevron = styled(ChevronDown, {
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(180deg)" },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  color: theme.colors.primary,

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerType
>(({ children, disabled = false, ...props }, ref) => (
  <StyledHeader disabled={disabled} {...props}>
    <StyledTrigger {...props} ref={ref}>
      {children}
      <StyledIcon label="Chevron Icon">
        <StyledChevron aria-hidden />
      </StyledIcon>
    </StyledTrigger>
  </StyledHeader>
));

const StyledContentText = styled("div", {
  background: theme.colors.gray700,
  paddingBottom: theme.space[150],
  paddingRight: theme.space[150],
});

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, ...props }, ref) => (
  <StyledContent {...props} ref={ref}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
));

const StyledAccordion = styled(AccordionPrimitive.Root, {
  width: "100%",
  variants: {
    disabled: {
      true: {
        [`${StyledHeader}`]: {
          pointerEvents: "none",
        },
      },
    },
  },
});

AccordionContent.displayName = "Accordion";
AccordionTrigger.displayName = "AccordionTrigger";

const Root = StyledAccordion;
const Item = StyledItem;
const Trigger = AccordionTrigger;
const Content = AccordionContent;

export const Accordion = {
  Root,
  Item,
  Trigger,
  Content,
};

export { Root, Item, Trigger, Content };
