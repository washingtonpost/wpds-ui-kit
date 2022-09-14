import { CarouselRoot } from "./CarouselRoot";
import { CarouselTitle } from "./CarouselTitle";
import { CarouselPreviousButton } from "./CarouselPreviousButton";
import { CarouselNextButton } from "./CarouselNextButton";

type CarouselProps = {
  Root: typeof CarouselRoot;
  Title: typeof CarouselTitle;
  PreviousButton: typeof CarouselPreviousButton;
  NextButton: typeof CarouselNextButton;
};

export const Carousel: CarouselProps = {
  Root: CarouselRoot,
  Title: CarouselTitle,
  PreviousButton: CarouselPreviousButton,
  NextButton: CarouselNextButton,
};
