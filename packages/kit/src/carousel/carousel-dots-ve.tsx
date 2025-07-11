import React from "react";
import { PaginationDots } from "../pagination-dots";
import { CarouselContext } from "./carousel-root-ve";

const NAME = "CarouselDots";

export interface CarouselDotsVEProps {
  className?: string;
  style?: React.CSSProperties;
}

export type CarouselDotsProps = CarouselDotsVEProps & Omit<React.ComponentProps<typeof PaginationDots>, 'index' | 'amount'>;

export const CarouselDotsVE: React.FC<CarouselDotsProps> = ({ 
  className, 
  style, 
  ...props 
}) => {
  const { page, totalPages } = React.useContext(CarouselContext);
  
  return (
    <PaginationDots
      index={page + 1 || 1}
      amount={totalPages || 1}
      className={className}
      style={style}
      {...props}
    />
  );
};

CarouselDotsVE.displayName = NAME;
