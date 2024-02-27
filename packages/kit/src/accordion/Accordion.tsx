import React, { forwardRef } from "react";
import { theme, styled } from "../theme";
import type * as WPDS from "../theme";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AccordionTrigger, AccordionHeader } from "./AccordionTrigger";
import { AccordionItem } from "./AccordionItem";
import { AccordionContent } from "./AccordionContent";
import {
  AccordionSingleProps as RadixAccordionSingleProps,
  AccordionMultipleProps as RadixAccordionMultipleProps,
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

const StyledAccordion = styled(AccordionPrimitive.Root, {
  width: "100%",
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        [`${AccordionHeader}`]: {
          pointerEvents: "none",
          color: theme.colors.accessible,
        },
      },
    },
  },
});

type AccordionRootVariants = WPDS.VariantProps<typeof StyledAccordion>;

export type AccordionRootCombined = (
  | RadixAccordionSingleProps
  | RadixAccordionMultipleProps
) &
  AccordionRootVariants;

export const AccordionRoot = forwardRef<HTMLDivElement, AccordionRootCombined>(
  ({ ...props }: AccordionRootCombined, ref) => (
    <StyledAccordion {...props} ref={ref} />
  )
);

AccordionRoot.displayName = "AccordionRoot";

const Root = AccordionRoot;
const Item = AccordionItem;
const Content = AccordionContent;
const Trigger = AccordionTrigger;

export const Accordion = {
  Root,
  Item,
  Content,
  Trigger,
};
