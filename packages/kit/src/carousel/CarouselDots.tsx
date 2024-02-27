import React from "react";
import { PaginationDots } from "../pagination-dots";
import { CarouselContext } from "./CarouselRoot";

const NAME = "CarouselDots";

export type CarouselDotsProps = Omit<
  React.ComponentPropsWithRef<typeof PaginationDots>,
  "index" | "amount"
>;

export const CarouselDots = React.forwardRef<HTMLDivElement, CarouselDotsProps>(
  ({ ...props }, ref) => {
    const { page, totalPages } = React.useContext(CarouselContext);
    return (
      <PaginationDots
        ref={ref}
        index={page + 1 || 1}
        amount={totalPages || 1}
        {...props}
      />
    );
  }
);

CarouselDots.displayName = NAME;
