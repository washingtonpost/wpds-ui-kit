import React from "react";
import { carouselHeaderActions } from "./Carousel.css";

const NAME = "CarouselHeaderActions";

export interface CarouselHeaderActionsVEProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export type CarouselHeaderActionsProps = CarouselHeaderActionsVEProps & React.ComponentProps<'div'>;

export const CarouselHeaderActionsVE: React.FC<CarouselHeaderActionsProps> = ({ 
  children, 
  className, 
  style, 
  ...props 
}) => {
  return (
    <div 
      className={`${carouselHeaderActions} ${className || ''}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

CarouselHeaderActionsVE.displayName = NAME;
