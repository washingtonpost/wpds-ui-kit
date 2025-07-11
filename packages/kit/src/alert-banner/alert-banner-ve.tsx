import React from "react";
import { alertBannerRootClass, alertBannerIconClass } from "./AlertBanner.css";
import { Icon } from "../icon";
import { Button } from "../button";

import {
  Error,
  Success,
  Warning,
  Info as Information,
} from "@washingtonpost/wpds-assets";

const NAME = "AlertBannerVE";

const AlertIcons = {
  error: Error,
  success: Success,
  warning: Warning,
  information: Information,
};

type AlertIconType = keyof typeof AlertIcons;

export interface AlertBannerRootVEProps {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  className?: string;
  /** Alert variant */
  variant?: "error" | "success" | "warning" | "information";
  /** Whether the alert is dismissable */
  dismissable?: boolean;
}

export interface AlertBannerContentVEProps {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  className?: string;
}

export interface AlertBannerTriggerVEProps {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  className?: string;
  /** onClick handler for the trigger */
  onClick?: () => void;
}

export const AlertBannerContentVE = React.forwardRef<
  HTMLDivElement,
  AlertBannerContentVEProps
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
});
AlertBannerContentVE.displayName = "AlertBannerContentVE";

export const AlertBannerTriggerVE = React.forwardRef<
  HTMLButtonElement,
  AlertBannerTriggerVEProps
>(({ children, className, onClick, ...props }, ref) => {
  return (
    <button ref={ref} className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
});
AlertBannerTriggerVE.displayName = "AlertBannerTriggerVE";

export const AlertBannerRootVE = React.forwardRef<
  HTMLDivElement,
  AlertBannerRootVEProps
>(({ variant = "information", dismissable = true, children, className, ...props }, ref) => {
  const kids = React.Children.toArray(children);
  const contentNode = kids.find(
    (child) =>
      React.isValidElement(child) && child.type === AlertBannerContentVE
  );
  const triggerNode = kids.find(
    (child) =>
      React.isValidElement(child) && child.type === AlertBannerTriggerVE
  );

  const AlertIcon = AlertIcons[variant as AlertIconType];

  return (
    <div
      ref={ref}
      role="alert"
      className={`${alertBannerRootClass({ variant, dismissable })} ${className || ""}`}
      {...props}
    >
      <Button
        as="div"
        icon="center"
        variant="primary"
        isOutline
        css={{
          alignSelf: "flex-start",
          border: "none",
          borderRadius: 0,
          cursor: "auto",
          "@hover": {
            "&:hover": {
              background: "none",
            },
          },
        }}
      >
        <Icon size="100" label="">
          <AlertIcon className={alertBannerIconClass({ variant })} />
        </Icon>
      </Button>
      {contentNode}
      {dismissable ? triggerNode : ""}
    </div>
  );
});

AlertBannerRootVE.displayName = NAME;

// Main AlertBanner object
export const AlertBannerVE = {
  Root: AlertBannerRootVE,
  Content: AlertBannerContentVE,
  Trigger: AlertBannerTriggerVE,
};
