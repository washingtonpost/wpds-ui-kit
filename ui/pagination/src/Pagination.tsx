import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-ui-kit";

const NAME = "Pagination";

export type PaginationProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<"div">;

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({ ...props }, ref) => {
    return <div {...props} ref={ref} />;
  }
);

Pagination.displayName = NAME;
