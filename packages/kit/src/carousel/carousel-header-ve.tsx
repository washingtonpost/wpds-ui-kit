import React from "react";
import { carouselHeader } from "./Carousel.css";

const NAME = "CarouselHeader";

export interface CarouselHeaderVEProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export type CarouselHeaderProps = CarouselHeaderVEProps & React.ComponentProps<'div'>;

export const CarouselHeaderVE: React.FC<CarouselHeaderProps> = ({ 
  children, 
  className, 
  style, 
  ...props 
}) => {
  return (
    <div 
      className={`${carouselHeader} ${className || ''}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

CarouselHeaderVE.displayName = NAME;
