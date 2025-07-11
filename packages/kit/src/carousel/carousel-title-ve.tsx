import React from "react";
import { carouselTitle } from "./Carousel.css";
import { CarouselContext } from "./carousel-root-ve";

const NAME = "CarouselTitle";

export interface CarouselTitleVEProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
}

export type CarouselTitleProps = CarouselTitleVEProps &
  React.ComponentProps<"h2">;

export const CarouselTitleVE: React.FC<CarouselTitleProps> = ({
  children,
  className,
  style,
  id,
  ...props
}) => {
  const { setTitleId } = React.useContext(CarouselContext);
  const generatedId = React.useId();
  const titleId = id || generatedId;

  React.useEffect(() => {
    setTitleId(titleId);
  }, [titleId, setTitleId]);

  return (
    <h2
      id={titleId}
      className={`${carouselTitle} ${className || ""}`}
      style={style}
      {...props}
    >
      {children}
    </h2>
  );
};

CarouselTitleVE.displayName = NAME;
