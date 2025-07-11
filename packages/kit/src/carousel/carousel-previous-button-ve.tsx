import React from "react";
import { Button } from "../button/button-ve";
import { IconVE } from "../icon/icon-ve";
import { ArrowLeft } from "@washingtonpost/wpds-assets";
import { CarouselContext } from "./carousel-root-ve";

const NAME = "CarouselPreviousButton";

export interface CarouselPreviousButtonVEProps {
  className?: string;
  style?: React.CSSProperties;
  density?: "compact" | "default";
  icon?: "center" | "left" | "right" | "none";
  variant?: "primary" | "secondary" | "cta";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

export type CarouselPreviousButtonProps = CarouselPreviousButtonVEProps &
  Omit<React.ComponentProps<"button">, keyof CarouselPreviousButtonVEProps>;

export const CarouselPreviousButtonVE: React.FC<
  CarouselPreviousButtonProps
> = ({
  className,
  style,
  onClick,
  density = "compact",
  icon = "center",
  variant = "primary",
  children,
}) => {
  const { page, setPage } = React.useContext(CarouselContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (page > 0) {
      setPage(page - 1);
      onClick && onClick(event);
    }
  };

  const isDisabled = page === 0;

  const buttonContent = children || (
    <IconVE label="previous">
      <ArrowLeft />
    </IconVE>
  );

  return (
    <Button
      onClick={handleClick}
      disabled={isDisabled}
      density={density}
      icon={icon}
      variant={variant}
      aria-label="Go to previous page"
      className={className}
      style={style}
    >
      {buttonContent}
    </Button>
  );
};

CarouselPreviousButtonVE.displayName = NAME;
