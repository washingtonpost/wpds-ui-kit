import * as React from "react";
import { PaginationDots } from "@washingtonpost/wpds-pagination-dots";
import { CarouselContext } from "./CarouselRoot";

const NAME = "CarouselDots";

export type CarouselDotsProps = Omit<
  React.ComponentPropsWithRef<typeof PaginationDots>,
  "index" | "amount"
>;

export const CarouselDots = React.forwardRef<HTMLDivElement, CarouselDotsProps>(
  ({ css, ...props }, ref) => {
    const { page, totalPages } = React.useContext(CarouselContext);
    return (
      <PaginationDots
        ref={ref}
        index={page + 1 || 1}
        amount={totalPages || 1}
        css={{
          position: "static",
          marginBlockStart: 0,
          transform: "none",
          ...css,
        }}
        {...props}
      />
    );
  }
);

CarouselDots.displayName = NAME;
