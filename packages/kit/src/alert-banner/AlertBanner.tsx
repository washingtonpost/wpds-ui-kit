import React from "react";

import { theme, styled } from "../theme";
import { Icon } from "../icon";
import { Button } from "../button";
import { AppBar } from "../app-bar";

import type * as WPDS from "../theme";

import {
  Error,
  Success,
  Warning,
  Info as Information,
  Close,
} from "@washingtonpost/wpds-assets";

const StyledAlertBannerTrigger = styled(Button, {
  alignSelf: "flex-start",
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
type AlertBannerTriggerProps = React.ComponentProps<typeof AlertBannerTrigger>;
AlertBannerTrigger.displayName = "AlertBannerTrigger";

const StyledAlertBannerContent = styled("p", {
  marginBlock: "0.625rem",
  flex: "1",
});
const AlertBannerContent = StyledAlertBannerContent;
type AlertBannerContentProps = React.ComponentProps<typeof AlertBannerContent>;

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

  variants: {
    /** 4 predefined alert banners each tied to our symantic messaging on our site. They are Warning, Information, Success, and Error. */
    variant: {
      error: {
        background: theme.colors.red600,
      },
      success: {
        background: theme.colors.green600,
      },
      warning: {
        background: theme.colors.orange600,
      },
      information: {
        background: theme.colors.blue600,
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

export type AlertBannerVariants = React.ComponentPropsWithRef<typeof StyledAlertBanner>;

const AlertBannerRoot: any = React.forwardRef<HTMLDivElement, AlertBannerVariants>(
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

    const StyledAlertIcon = styled(AlertIcon, {
      $$alertBannerIconColor: theme.colors.signal,
      fill: "$$alertBannerIconColor",
      flex: "0 0 auto",

      variants: {
        variant: {
          error: {
            $$alertBannerIconColor: theme.colors.error,
          },
          success: {
            $$alertBannerIconColor: theme.colors.success,
          },
          warning: {
            $$alertBannerIconColor: theme.colors.warning,
          },
          information: {
            $$alertBannerIconColor: theme.colors.signal,
          },
        },
      },

      defaultVariants: {
        variant: "information",
      },
    });

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
            <StyledAlertIcon variant={variant} />
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

export type {
  AlertBannerProps,
  AlertBannerTriggerProps,
  AlertBannerContentProps,
  AlertBannerTriggerInterface,
};
