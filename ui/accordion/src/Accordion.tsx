import * as React from "react";
import { ChevronDown } from "@washingtonpost/wpds-assets";
import { theme, styled, keyframes } from "@washingtonpost/wpds-theme";
import { Icon } from "@washingtonpost/wpds-icon";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import type * as WPDS from "@washingtonpost/wpds-theme";
import {
  AccordionTriggerProps as RadixAccordionTriggerProps,
  AccordionContentProps as RadixAccordionContentProps,
  AccordionItemProps as RadixAccordionItemProps,
} from "@radix-ui/react-accordion";

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

const StyledHeader = styled(AccordionPrimitive.Header, {
  color: theme.colors.primary,
  backgroundColor: theme.colors.gray700,
  display: "flex",
  width: "100%",
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

type AccordionTriggerVariants = React.ComponentPropsWithRef<
  typeof StyledTrigger
>;
type AccordionTriggerType = AccordionTriggerVariants & {
  css?: WPDS.CSS;
  forcehover?: boolean;
  forcefocus?: boolean;
};
const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerType
>(({ children, ...props }, ref) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={ref}>
      {children}
      <StyledIcon label="Chevron Icon">
        <StyledChevron aria-hidden />
      </StyledIcon>
    </StyledTrigger>
  </StyledHeader>
));

type AccordionTriggerProps = React.ComponentProps<typeof AccordionTrigger>;
AccordionTrigger.displayName = "AccordionComponentHeader";

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

type AccordionContentVariant = React.ComponentProps<typeof StyledContent>;
type AccordionContentType = AccordionContentVariant &
  RadixAccordionContentProps & {
    css?: WPDS.CSS;
  };

const StyledContentText = styled("div", {
  background: theme.colors.gray700,
  paddingBottom: theme.space[150],
  paddingRight: theme.space[150],
});

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentType>(
  ({ children, ...props }, ref) => (
    <StyledContent {...props} ref={ref}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  )
);

type AccordionContentProps = React.ComponentPropsWithRef<
  typeof AccordionContent
>;
AccordionContent.displayName = "AccordionComponentContent";

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

type AccordionPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Root
>;
type StyledAccordionVariant = React.ComponentProps<typeof StyledAccordion>;
type AccordionProps = AccordionPrimitiveProps & StyledAccordionVariant;

const AccordionRoot = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ ...props }, ref) => <StyledAccordion {...props} ref={ref} />
);

type AccordionRootProps = React.ComponentPropsWithRef<typeof AccordionRoot>;

AccordionRoot.displayName = "AccordionComponentRoot";

const Root = AccordionRoot;
const Item = StyledItem;
const Content = AccordionContent;
const Trigger = AccordionTrigger;

export const Accordion = {
  Root,
  Item,
  Content,
  Trigger,
};

export type {
  AccordionRootProps,
  AccordionContentProps,
  AccordionTriggerProps,
  RadixAccordionItemProps,
  RadixAccordionContentProps,
  RadixAccordionTriggerProps,
};
