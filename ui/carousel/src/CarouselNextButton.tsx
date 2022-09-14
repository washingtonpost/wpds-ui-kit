import * as React from "react";
import { Button } from "@washingtonpost/wpds-button";
import { Icon } from "@washingtonpost/wpds-icon";
import { ChevronRight } from "@washingtonpost/wpds-assets/";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "CarouselNextButton";

export type CarouselNextButtonProps = {
  css?: WPDS.CSS;
  onClick?: () => void;
};

export const CarouselNextButton: React.FC<CarouselNextButtonProps> = ({
  css,
  onClick,
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
      <Icon label="Next" size="100">
        <ChevronRight />
      </Icon>
    </Button>
  );
};

CarouselNextButton.displayName = NAME;
