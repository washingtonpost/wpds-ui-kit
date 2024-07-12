import React, { forwardRef } from "react";
import { theme, styled } from "../theme";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import type * as WPDS from "../theme";
import { AccordionItemProps as RadixAccordionItemProps } from "@radix-ui/react-accordion";

const StyledAccordionItem = styled(AccordionPrimitive.Item, {
  borderBottom: `1px solid ${theme.colors.outline}`,
});

type AccordionItemProps = WPDS.VariantProps<typeof StyledAccordionItem> &
  RadixAccordionItemProps;

export interface AccordionItemInterface extends AccordionItemProps {
  css?: WPDS.CSS;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemInterface>(
  ({ children, ...props }: AccordionItemInterface, ref) => (
    <StyledAccordionItem {...props} ref={ref}>
      {children}
    </StyledAccordionItem>
  )
);

AccordionItem.displayName = "AccordionItem";
