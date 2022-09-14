import * as React from "react";
import { PaginationDots } from "@washingtonpost/wpds-pagination-dots";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "CarouselDots";

export type CarouselDotsProps = {
  index?: number;
  amount?: number;
  css?: WPDS.CSS;
};

export const CarouselDots: React.FC<CarouselDotsProps> = ({
  index = 0,
  amount = 3,
  ...props
}) => {
  return <PaginationDots index={index} amount={amount} {...props} />;
};

CarouselDots.displayName = NAME;
