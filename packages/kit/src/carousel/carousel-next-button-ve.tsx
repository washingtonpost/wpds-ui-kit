import React from "react";
import { Button } from "../button/button-ve";
import { IconVE } from "../icon/icon-ve";
import { ArrowRight } from "@washingtonpost/wpds-assets";
import { CarouselContext } from "./carousel-root-ve";

const NAME = "CarouselNextButton";

export interface CarouselNextButtonVEProps {
  className?: string;
  style?: React.CSSProperties;
  density?: "compact" | "default";
  icon?: "center" | "left" | "right" | "none";
  variant?: "primary" | "secondary" | "cta";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

export type CarouselNextButtonProps = CarouselNextButtonVEProps & Omit<React.ComponentProps<'button'>, keyof CarouselNextButtonVEProps>;

export const CarouselNextButtonVE: React.FC<CarouselNextButtonProps> = (
  {
    className,
    style,
    onClick,
    density = "compact",
    icon = "center",
    variant = "primary",
    children,
  }
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

    const buttonContent = children || (
      <IconVE label="next">
        <ArrowRight />
      </IconVE>
    );

    return (
      <Button
        onClick={handleClick}
        disabled={isDisabled}
        density={density}
        icon={icon}
        variant={variant}
        aria-label="Go to next page"
        className={className}
        style={style}
      >
        {buttonContent}
      </Button>
    );
  };

CarouselNextButtonVE.displayName = NAME;
