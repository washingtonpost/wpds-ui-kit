import { AccordionRootVE } from './accordion-root-ve';
import { AccordionItemVE } from './accordion-item-ve';
import { AccordionTriggerVE, AccordionHeaderVE } from './accordion-trigger-ve';
import { AccordionContentVE } from './accordion-content-ve';

export type AccordionVEProps = {
  Root: typeof AccordionRootVE;
  Item: typeof AccordionItemVE;
  Header: typeof AccordionHeaderVE;
  Trigger: typeof AccordionTriggerVE;
  Content: typeof AccordionContentVE;
};

/**
 * Accordion (vanilla-extract implementation)
 */
export const AccordionVE: AccordionVEProps = {
  Root: AccordionRootVE,
  Item: AccordionItemVE,
  Header: AccordionHeaderVE,
  Trigger: AccordionTriggerVE,
  Content: AccordionContentVE,
};

// Individual exports
export {
  AccordionRootVE,
  AccordionItemVE,
  AccordionHeaderVE,
  AccordionTriggerVE,
  AccordionContentVE,
};

// Default export
export default AccordionVE;
