import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Button } from "@washingtonpost/wpds-button";
import { Icon } from "@washingtonpost/wpds-icon";
import { ArrowRight } from "@washingtonpost/wpds-assets/";
import { CarouselContext } from "./CarouselRoot";

const NAME = "CarouselNextButton";

export type CarouselNextButtonProps = {
  asChild?: boolean;
} & React.ComponentPropsWithRef<typeof Button>;

export const CarouselNextButton = React.forwardRef<
  HTMLButtonElement,
  CarouselNextButtonProps
>(
  (
    {
      css,
      onClick,
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
      if (totalPages && page < totalPages - 1) {
        setPage(page + 1);
        onClick && onClick(event);
      }
    };

    let isDisabled;
    if (totalPages) {
      isDisabled = page === totalPages - 1;
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
            ref={ref}
            css={{ display: "inline-flex", ...css }}
            onClick={handleClick}
            density={density}
            icon={icon}
            variant={variant}
            disabled={isDisabled}
            {...props}
            aria-label="next slide"
          >
            <Icon label="Next" size="100">
              <ArrowRight />
            </Icon>
          </Button>
        )}
      </>
    );
  }
);

CarouselNextButton.displayName = NAME;
