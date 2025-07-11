import React from "react";
import { carouselHeaderContent } from "./Carousel.css";

const NAME = "CarouselHeaderContent";

export interface CarouselHeaderContentVEProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export type CarouselHeaderContentProps = CarouselHeaderContentVEProps &
  React.ComponentProps<"div">;

export const CarouselHeaderContentVE: React.FC<CarouselHeaderContentProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  return (
    <div
      className={`${carouselHeaderContent} ${className || ""}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

CarouselHeaderContentVE.displayName = NAME;
