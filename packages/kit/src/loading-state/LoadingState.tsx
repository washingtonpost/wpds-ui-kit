import * as React from "react";
// import { Button, Divider, Icon, styled } from "@washingtonpost/wpds-ui-kit";

import type * as WPDS from "@washingtonpost/wpds-ui-kit";

const NAME = "LoadingState";

export type LoadingStateProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<"div">

export const LoadingState = React.forwardRef<HTMLDivElement, LoadingStateProps>(
  ({ ...props }, ref) => {
    return (
      <svg width="48" height="16" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="16" height="16" fill="none" stroke="black" />
        <rect x="16" y="0" width="16" height="16" fill="none" stroke="black" />
        <rect x="32" y="0" width="16" height="16" fill="none" stroke="black" />
      </svg>
    );
  }
);

LoadingState.displayName = NAME;
