import React, { forwardRef } from "react";
import { theme, styled, keyframes } from "../theme";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import type * as WPDS from "../theme";
import { AccordionContentProps as RadixAccordionContentProps } from "@radix-ui/react-accordion";

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const easeInOutExpo = `cubic-bezier(0.87, 0, 0.13, 1)`;

const AnimatedContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  color: theme.colors.primary,
  '&[data-state="open"]': {
    animation: `${slideDown} ${theme.transitions.normal} ${easeInOutExpo}`,
    "@reducedMotion": {
      animation: "none",
    },
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} ${theme.transitions.normal} ${easeInOutExpo}`,
    "@reducedMotion": {
      animation: "none",
    },
  },
});

const ContentContainer = styled("div", {
  paddingBottom: theme.space[150],
  paddingRight: theme.space[150],
  fontSize: theme.fontSizes[100],
});

type AccordionContentVariants = WPDS.VariantProps<typeof AnimatedContent>;
type CombinedProps = RadixAccordionContentProps & AccordionContentVariants;

export interface AccordionContentInterface extends CombinedProps {
  css?: WPDS.CSS;
}

export const AccordionContent = forwardRef<
  HTMLDivElement,
  AccordionContentInterface
>(({ children, ...props }: AccordionContentInterface, ref) => {
  const {
    padding = "",
    paddingTop = "",
    paddingBottom = "",
    paddingLeft = "",
    paddingRight = "",
    ...restOfCss
  } = props.css ? props.css : {};

  const otherProps = { ...props, css: { ...restOfCss } };

  return (
    <AnimatedContent {...otherProps} ref={ref}>
      <ContentContainer
        css={{ padding, paddingTop, paddingBottom, paddingLeft, paddingRight }}
      >
        {children}
      </ContentContainer>
    </AnimatedContent>
  );
});

AccordionContent.displayName = "AccordionContent";
