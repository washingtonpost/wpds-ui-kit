import React from "react";

import { styled } from "../theme";
import { Icon } from "../icon";
import { Button } from "../button";

import type * as WPDS from "../theme";

import { Close } from "@washingtonpost/wpds-assets";

const StyledAlertBannerTrigger = styled(Button, {
  alignSelf: "flex-start",
});

type AlertBannerTriggerVariants = React.ComponentProps<
  typeof StyledAlertBannerTrigger
>;

export interface AlertBannerTriggerInterface
  extends AlertBannerTriggerVariants {
  css?: WPDS.CSS;
}

export const AlertBannerTrigger = React.forwardRef<
  HTMLButtonElement,
  AlertBannerTriggerInterface
>((props, ref) => {
  return (
    <StyledAlertBannerTrigger
      ref={ref}
      isOutline
      icon="center"
      variant="primary"
      css={{
        border: "none",
        ...props.css,
      }}
      {...props}
    >
      <Icon size="100" label="Close alert banner">
        <Close />
      </Icon>
    </StyledAlertBannerTrigger>
  );
});

export type AlertBannerTriggerProps = React.ComponentProps<
  typeof AlertBannerTrigger
>;

AlertBannerTrigger.displayName = "AlertBannerTrigger";
