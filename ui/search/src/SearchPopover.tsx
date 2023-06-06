import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-theme";

import { ComboboxPopover } from "@reach/combobox";

export type SearchPopoverProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  portal?: boolean;
  /** Override CSS */
  css?: WPDS.CSS;
};

export const SearchPopover = ({
  children,
  portal = false,
  ...rest
}: SearchPopoverProps) => {
  return (
    <ComboboxPopover portal={portal} {...rest}>
      {children}
    </ComboboxPopover>
  );
};

SearchPopover.displayName = "SearchPopover";
