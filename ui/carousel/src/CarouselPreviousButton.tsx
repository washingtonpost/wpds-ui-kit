import * as React from "react";
import { Button } from "@washingtonpost/wpds-button";
import { Icon } from "@washingtonpost/wpds-icon";
import { ChevronLeft } from "@washingtonpost/wpds-assets/";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "CarouselPreviousButton";

export type CarouselPreviousButtonProps = {
  css?: WPDS.CSS;
  onClick?: () => void;
};

export const CarouselPreviousButton: React.FC<CarouselPreviousButtonProps> = ({
  onClick,
  css,
  ...props
}) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <Button
      {...props}
      css={{ ...css, display: "inline-flex" }}
      onClick={handleClick}
      density="compact"
      icon="center"
      variant="primary"
    >
      <Icon label="Previous" size="100">
        <ChevronLeft />
      </Icon>
    </Button>
  );
};

CarouselPreviousButton.displayName = NAME;
