import * as React from "react";
import { Button } from "@washingtonpost/wpds-button";
import { Icon } from "@washingtonpost/wpds-icon";
import { ArrowLeft } from "@washingtonpost/wpds-assets/";
import { CarouselContext } from "./CarouselRoot";

const NAME = "CarouselPreviousButton";

export type CarouselPreviousButtonProps = React.ComponentPropsWithRef<
  typeof Button
>;

export const CarouselPreviousButton = React.forwardRef<
  HTMLButtonElement,
  CarouselPreviousButtonProps
>(({ onClick, css, ...props }) => {
  const { page, setPage, totalPages } = React.useContext(CarouselContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (totalPages && page > 0) {
      setPage(page - 1);
      onClick && onClick(event);
    }
  };

  return (
    <Button
      css={{ display: "inline-flex", ...css }}
      onClick={handleClick}
      density="compact"
      icon="center"
      variant="primary"
      {...props}
    >
      <Icon label="Previous" size="100">
        <ArrowLeft />
      </Icon>
    </Button>
  );
});

CarouselPreviousButton.displayName = NAME;
