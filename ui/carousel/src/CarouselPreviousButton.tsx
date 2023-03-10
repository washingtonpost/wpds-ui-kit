import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Button } from "@washingtonpost/wpds-button";
import { Icon } from "@washingtonpost/wpds-icon";
import { ArrowLeft } from "@washingtonpost/wpds-assets/";
import { CarouselContext } from "./CarouselRoot";

const NAME = "CarouselPreviousButton";

export type CarouselPreviousButtonProps = {
  asChild?: boolean;
} & React.ComponentPropsWithRef<typeof Button>;

export const CarouselPreviousButton = React.forwardRef<
  HTMLButtonElement,
  CarouselPreviousButtonProps
>(
  (
    {
      onClick,
      css,
      density = "compact",
      icon = "center",
      variant = "primary",
      asChild,
      ...props
    },
    ref
  ) => {
    const { page, setPage, totalPages } = React.useContext(CarouselContext);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (totalPages && page > 0) {
        setPage(page - 1);
        onClick && onClick(event);
      }
    };

    let isDisabled;
    if (totalPages) {
      isDisabled = page === 0;
    }

    return (
      <>
        {asChild ? (
          <Slot
            ref={ref}
            onClick={handleClick}
            disabled={isDisabled}
            {...props}
          />
        ) : (
          <Button
            css={{ display: "inline-flex", ...css }}
            onClick={handleClick}
            density={density}
            icon={icon}
            variant={variant}
            disabled={isDisabled}
            {...props}
            ref={ref}
            aria-label="previous slide"
          >
            <Icon label="Previous" size="100">
              <ArrowLeft />
            </Icon>
          </Button>
        )}
      </>
    );
  }
);

CarouselPreviousButton.displayName = NAME;
