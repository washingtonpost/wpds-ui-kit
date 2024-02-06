import { forwardRef } from "react";
import { ChevronDown } from "@washingtonpost/wpds-assets";
import { theme, styled } from "@washingtonpost/wpds-theme";
import { Icon } from "@washingtonpost/wpds-icon";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import type * as WPDS from "@washingtonpost/wpds-theme";
import {
  AccordionTriggerProps as RadixAccordionTriggerProps,
  AccordionHeaderProps as RadixAccordionHeaderProps,
} from "@radix-ui/react-accordion";

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
  },
  "&:focus-visible": {
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
    // this class is for the benefit of the docs only
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

const easeInOutExpo = `cubic-bezier(0.87, 0, 0.13, 1)`;

const StyledChevron = styled(ChevronDown, {
  transition: `transform ${theme.transitions.normal} ${easeInOutExpo}`,
  "[data-state=open] &": { transform: "rotate(180deg)" },
  "@reducedMotion": {
    transition: "none",
  },
});

type AccordionTriggerVariants = WPDS.VariantProps<typeof StyledTrigger>;

type AccordionTriggerCombined = RadixAccordionTriggerProps &
  AccordionTriggerVariants & {
    css?: WPDS.CSS;
    forcefocus?: boolean;
    children: React.ReactNode;
  };

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  color: theme.colors.primary,
  display: "flex",
  width: "100%",
  fontSize: theme.fontSizes[100],
});

type AccordionHeaderVariants = WPDS.VariantProps<typeof StyledHeader>;
type HeaderCombinedProps = RadixAccordionHeaderProps & AccordionHeaderVariants;

export interface AccordionHeaderInterface extends HeaderCombinedProps {
  css?: WPDS.CSS;
}

export const AccordionHeader = forwardRef<
  HTMLDivElement,
  AccordionHeaderInterface
>(({ children, ...props }: AccordionHeaderInterface, ref) => (
  <StyledHeader {...props} ref={ref}>
    {children}
  </StyledHeader>
));

AccordionHeader.displayName = "AccordionHeader";

export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  AccordionTriggerCombined
>((props: AccordionTriggerCombined, ref) => (
  <AccordionHeader>
    <StyledTrigger {...props} ref={ref}>
      {props.children}
      <StyledIcon label="Chevron Icon">
        <StyledChevron aria-hidden />
      </StyledIcon>
    </StyledTrigger>
  </AccordionHeader>
));

AccordionTrigger.displayName = "AccordionTrigger";
