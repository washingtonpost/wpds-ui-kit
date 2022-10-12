import * as React from "react";
import { theme, styled, keyframes } from "@washingtonpost/wpds-theme";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import type * as WPDS from "@washingtonpost/wpds-theme";
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
  '&[data-state="open"]': {
    animation: `${slideDown} ${theme.transitions.normal} ${easeInOutExpo}`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} ${theme.transitions.normal} ${easeInOutExpo}`,
  },
});

const ContentContainer = styled("div", {
  color: theme.colors.primary,
  paddingBottom: theme.space[150],
  paddingRight: theme.space[150],
});

type AccordionContentVariants = WPDS.VariantProps<typeof AnimatedContent>;
type CombinedProps = RadixAccordionContentProps & AccordionContentVariants;

export interface AccordionContentInterface extends CombinedProps {
  css?: WPDS.CSS;
}

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentInterface
>(({ children, ...props }: AccordionContentInterface, ref) => (
  <AnimatedContent {...props} ref={ref}>
    <ContentContainer>{children}</ContentContainer>
  </AnimatedContent>
));

AccordionContent.displayName = "AccordionContent";
