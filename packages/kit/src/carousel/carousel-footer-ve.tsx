import React from "react";
import { carouselFooter } from "./Carousel.css";

const NAME = "CarouselFooter";

export interface CarouselFooterVEProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export type CarouselFooterProps = CarouselFooterVEProps &
  React.ComponentProps<"div">;

export const CarouselFooterVE: React.FC<CarouselFooterProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  return (
    <div
      className={`${carouselFooter} ${className || ""}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

CarouselFooterVE.displayName = NAME;
