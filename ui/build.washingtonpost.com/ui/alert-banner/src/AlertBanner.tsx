import * as React from "react";

import { theme, styled, css } from "@washingtonpost/wpds-theme";
import { Icon } from "@washingtonpost/wpds-icon";
import { Button } from "@washingtonpost/wpds-button";
import { AppBar } from "@washingtonpost/wpds-app-bar";

import type * as WPDS from "@washingtonpost/wpds-theme";

import Error from "@washingtonpost/wpds-assets/asset/error";
import Success from "@washingtonpost/wpds-assets/asset/success";
import Warning from "@washingtonpost/wpds-assets/asset/warning";
import Information from "@washingtonpost/wpds-assets/asset/info";
import Close from "@washingtonpost/wpds-assets/asset/close";

const StyledAlertBannerTrigger = styled(Button, {
  alignSelf: "flex-start",
  marginTop: "$025",
});

type AlertBannerTriggerVariants = React.ComponentProps<
  typeof StyledAlertBannerTrigger
>;

interface AlertBannerTriggerInterface extends AlertBannerTriggerVariants {
  css?: WPDS.CSS;
}

const AlertBannerTrigger = React.forwardRef<
  HTMLButtonElement,
  AlertBannerTriggerInterface
>((props, ref) => {
  return (
    <StyledAlertBannerTrigger
      ref={ref}
      style="outline"
      icon="center"
      variant="primary"
      css={{
        border: "none",
        ...props.css,
      }}
      {...props}
    >
      <Icon size="$100" label="Close alert banner">
        <Close fill="currentColor" className={closeIcon()} />
      </Icon>
    </StyledAlertBannerTrigger>
  );
});
type AlertBannerTriggerProps = React.ComponentProps<typeof AlertBannerTrigger>;
AlertBannerTrigger.displayName = "AlertBannerTrigger";

const StyledAlertBannerContent = styled("p", {
  width: "100%",
  display: "inline-block",
  justifyContent: "center",
  alignItems: "flex-start",
  margin: "0 auto",
  flexDirection: "column",
  py: "$050",
  marginTop: "0",
});
const AlertBannerContent = StyledAlertBannerContent;
type AlertBannerContentProps = React.ComponentProps<typeof AlertBannerContent>;

const alertIcon = css({
  fill: "currentColor",
  flex: "0 0 auto",
});

const closeIcon = css({
  fill: "currentColor",
});

const StyledAlertBanner = styled(AppBar, {
  width: "100%",
  flexDirection: "row",
  justifyContent: "flex-start",
  color: theme.colors.primary,
  alignItems: "center",
  fontFamily: "$meta",
  fontSize: "$100",
  fontWeight: "$light",
  lineHeight: "$125",
  minHeight: "40px",
  $$alertBannerIconColor: theme.colors.error,

  [`& .${alertIcon}`]: {
    color: "$$alertBannerIconColor",
  },

  variants: {
    /** 4 predefined alert banners each tied to our symantic messaging on our site. They are Warning, Information, Success, and Error. */
    variant: {
      error: {
        background: theme.colors.red300,
        $$alertBannerIconColor: theme.colors.error,
      },
      success: {
        background: theme.colors.green300,
        $$alertBannerIconColor: theme.colors.success,
      },
      warning: {
        background: theme.colors.orange300,
        $$alertBannerIconColor: theme.colors.warning,
      },
      information: {
        background: theme.colors.blue300,
        $$alertBannerIconColor: theme.colors.signal,
      },
    },
    /** The alert banner can be permanent or dismissable. */
    dismissable: {
      false: {
        paddingRight: "$050",
      },
    },
  },
  defaultVariants: {
    variant: "information",
    dismissable: true,
  },
});

const AlertIcons = {
  error: Error,
  success: Success,
  warning: Warning,
  information: Information,
};

type AlertIconType = keyof typeof AlertIcons;

type AlertBannerVariants = React.ComponentProps<typeof StyledAlertBanner>;

const AlertBannerRoot = React.forwardRef<HTMLDivElement, AlertBannerVariants>(
  (
    {
      variant = "information" as AlertBannerVariants["variant"],
      dismissable = true as AlertBannerVariants["dismissable"],
      children,
      ...props
    },
    ref
  ) => {
    const kids = React.Children.toArray(children);
    const contentNode = kids.find(
      (child) =>
        React.isValidElement(child) && child.type === AlertBannerContent
    );
    const triggerNode = kids.find(
      (child) =>
        React.isValidElement(child) && child.type === AlertBannerTrigger
    );

    const AlertIcon = AlertIcons[variant as AlertIconType];

    return (
      <StyledAlertBanner
        ref={ref}
        role="alert"
        variant={variant}
        dismissable={dismissable}
        {...props}
      >
        <Button
          as="div"
          icon="center"
          variant="primary"
          style="outline"
          css={{
            alignSelf: "flex-start",
            border: "none",
            marginTop: "$025",
            borderRadius: 0,
            cursor: "auto",
            "@hover": {
              "&:hover": {
                background: "none",
              },
            },
          }}
        >
          <Icon size="$100" label="">
            <AlertIcon className={alertIcon()} />
          </Icon>
        </Button>
        {contentNode}

        {dismissable ? triggerNode : ""}
      </StyledAlertBanner>
    );
  }
);
AlertBannerRoot.displayName = "AlertBannerRoot";
type AlertBannerProps = React.ComponentProps<typeof AlertBannerRoot>;

const Root = AlertBannerRoot;
const Trigger = AlertBannerTrigger;
const Content = AlertBannerContent;

export const AlertBanner = {
  Root,
  Trigger,
  Content,
};

export { Root, Trigger, Content };

export type {
  AlertBannerProps,
  AlertBannerTriggerProps,
  AlertBannerContentProps,
  AlertBannerTriggerInterface,
};
