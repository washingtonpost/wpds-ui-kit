import { ACCORDION_DENSITY } from "./Accordion";
import type {
  AccordionTriggerProps,
  AccordionItemProps,
  AccordionContentProps,
} from "@radix-ui/react-accordion";

type AccordionTriggerType = AccordionTriggerProps & {
  density?: ACCORDION_DENSITY;
  disabled?: boolean;
  forcefocus?: boolean;
  forcehover?: boolean;
}

type AccordionHeaderType = {
  forcehover?: boolean;
  forcefocus?: boolean;
}

export type {
  AccordionTriggerType,
  AccordionHeaderType,
  // Radix's props
  AccordionTriggerProps,
  AccordionContentProps,
  AccordionItemProps,
};