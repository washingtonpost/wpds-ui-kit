import { CarouselRootVE } from "./carousel-root-ve";
import { CarouselHeaderVE } from "./carousel-header-ve";
import { CarouselHeaderContentVE } from "./carousel-header-content-ve";
import { CarouselHeaderActionsVE } from "./carousel-header-actions-ve";
import { CarouselTitleVE } from "./carousel-title-ve";
import { CarouselPreviousButtonVE } from "./carousel-previous-button-ve";
import { CarouselNextButtonVE } from "./carousel-next-button-ve";
import { CarouselContentVE } from "./carousel-content-ve";
import { CarouselItemVE } from "./carousel-item-ve";
import { CarouselFooterVE } from "./carousel-footer-ve";
import { CarouselDotsVE } from "./carousel-dots-ve";

type CarouselVEProps = {
  Root: typeof CarouselRootVE;
  Header: typeof CarouselHeaderVE;
  HeaderContent: typeof CarouselHeaderContentVE;
  HeaderActions: typeof CarouselHeaderActionsVE;
  Title: typeof CarouselTitleVE;
  PreviousButton: typeof CarouselPreviousButtonVE;
  NextButton: typeof CarouselNextButtonVE;
  Content: typeof CarouselContentVE;
  Item: typeof CarouselItemVE;
  Footer: typeof CarouselFooterVE;
  Dots: typeof CarouselDotsVE;
};

/**
 * Carousel - vanilla-extract implementation
 */
export const CarouselVE: CarouselVEProps = {
  Root: CarouselRootVE,
  Header: CarouselHeaderVE,
  HeaderContent: CarouselHeaderContentVE,
  HeaderActions: CarouselHeaderActionsVE,
  Title: CarouselTitleVE,
  PreviousButton: CarouselPreviousButtonVE,
  NextButton: CarouselNextButtonVE,
  Content: CarouselContentVE,
  Item: CarouselItemVE,
  Footer: CarouselFooterVE,
  Dots: CarouselDotsVE,
};

// Re-export individual components
export { CarouselRootVE };
export { CarouselHeaderVE };
export { CarouselHeaderContentVE };
export { CarouselHeaderActionsVE };
export { CarouselTitleVE };
export { CarouselPreviousButtonVE };
export { CarouselNextButtonVE };
export { CarouselContentVE };
export { CarouselItemVE };
export { CarouselFooterVE };
export { CarouselDotsVE };

// Re-export types
export type { CarouselRootVEProps } from "./carousel-root-ve";
export type { CarouselHeaderVEProps } from "./carousel-header-ve";
export type { CarouselHeaderContentVEProps } from "./carousel-header-content-ve";
export type { CarouselHeaderActionsVEProps } from "./carousel-header-actions-ve";
export type { CarouselTitleVEProps } from "./carousel-title-ve";
export type { CarouselPreviousButtonVEProps } from "./carousel-previous-button-ve";
export type { CarouselNextButtonVEProps } from "./carousel-next-button-ve";
export type { CarouselContentVEProps } from "./carousel-content-ve";
export type { CarouselItemVEProps } from "./carousel-item-ve";
export type { CarouselFooterVEProps } from "./carousel-footer-ve";
export type { CarouselDotsVEProps } from "./carousel-dots-ve";
