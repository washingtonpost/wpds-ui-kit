import React from "react";
import { carouselItem } from "./Carousel.css";
import { CarouselContext } from "./carousel-root-ve";
import { isItemShown } from "./utils";

const NAME = "CarouselItem";

export interface CarouselItemVEProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  index?: number;
  itemsShownPerPage?: number;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  children?: React.ReactNode;
}

export type CarouselItemProps = CarouselItemVEProps & React.ComponentProps<'div'>;

export const CarouselItemVE = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ children, id, className, style, ...props }, ref) => {
    const internalRef = React.useRef<HTMLDivElement>(null);
    const [isShown, setIsShown] = React.useState(false);
    const { activeId, isTransitioning } = React.useContext(CarouselContext);

    React.useEffect(() => {
      if (!ref) return;
      typeof ref === "function"
        ? ref(internalRef.current)
        : (ref.current = internalRef.current);
    }, [ref, internalRef]);

    React.useEffect(() => {
      if (!isTransitioning) {
        setIsShown(isItemShown(internalRef));
      }
    }, [setIsShown, internalRef, isTransitioning]);

    const isFocused = id === activeId;

    return (
      <div
        {...props}
        ref={internalRef}
        className={`${carouselItem({ focused: isFocused })} ${className || ''}`}
        style={style}
        aria-hidden={isShown ? false : true}
        id={id}
        role="group"
        aria-roledescription="slide"
        tabIndex={isFocused ? 0 : -1}
      >
        {children}
      </div>
    );
  }
);

CarouselItemVE.displayName = NAME;
