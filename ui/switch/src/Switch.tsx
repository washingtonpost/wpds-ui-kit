import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "Switch";

export type SwitchProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<"div">

export const Switch = React.forwardRef<HTMLDivElement, SwitchProps>(
  ({ ...props }, ref) => {
    return <div {...props} ref={ref} />;
  }
);

Switch.displayName = NAME;
