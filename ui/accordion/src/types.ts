import type * as WPDS from "@washingtonpost/wpds-theme";
import { ACCORDION_TYPE, ACCORDION_DENSITY } from "./Accordion";
import type {
  AccordionTriggerProps,
  AccordionItemProps,
  AccordionContentProps,
} from "@radix-ui/react-accordion";

type AccordionType = {
  type: ACCORDION_TYPE;
  data: { heading: string; children: React.ReactNode; id: string }[];
  density?: ACCORDION_DENSITY;
  css?: WPDS.CSS;
  disabled?: boolean;
}

type AccordionMultipleType = AccordionType & {
  type: ACCORDION_TYPE.multiple;
  value: string[];
  defaultValue?: string[];
}
type AccordionSingleType = AccordionType & {
  type: ACCORDION_TYPE.single;
  collapsible?: boolean;
  value: string;
  defaultValue?: string;
}

type AccordionTriggerType = AccordionTriggerProps & {
  density?: ACCORDION_DENSITY;
}

export type {
  AccordionMultipleType,
  AccordionSingleType,
  AccordionTriggerType,
  // Radix's props
  AccordionTriggerProps,
  AccordionContentProps,
  AccordionItemProps,
};