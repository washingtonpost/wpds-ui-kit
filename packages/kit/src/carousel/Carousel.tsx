import { CarouselRoot } from "./CarouselRoot";
import { CarouselHeader } from "./CarouselHeader";
import { CarouselHeaderContent } from "./CarouselHeaderContent";
import { CarouselHeaderActions } from "./CarouselHeaderActions";
import { CarouselTitle } from "./CarouselTitle";
import { CarouselPreviousButton } from "./CarouselPreviousButton";
import { CarouselNextButton } from "./CarouselNextButton";
import { CarouselContent } from "./CarouselContent";
import { CarouselItem } from "./CarouselItem";
import { CarouselFooter } from "./CarouselFooter";
import { CarouselDots } from "./CarouselDots";

type CarouselProps = {
  Root: typeof CarouselRoot;
  Header: typeof CarouselHeader;
  HeaderContent: typeof CarouselHeaderContent;
  HeaderActions: typeof CarouselHeaderActions;
  Title: typeof CarouselTitle;
  PreviousButton: typeof CarouselPreviousButton;
  NextButton: typeof CarouselNextButton;
  Content: typeof CarouselContent;
  Item: typeof CarouselItem;
  Footer: typeof CarouselFooter;
  Dots: typeof CarouselDots;
};

/**
 * Carousel
 */
export const Carousel: CarouselProps = {
  Root: CarouselRoot,
  Header: CarouselHeader,
  HeaderContent: CarouselHeaderContent,
  HeaderActions: CarouselHeaderActions,
  Title: CarouselTitle,
  PreviousButton: CarouselPreviousButton,
  NextButton: CarouselNextButton,
  Content: CarouselContent,
  Item: CarouselItem,
  Footer: CarouselFooter,
  Dots: CarouselDots,
};
