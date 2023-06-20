import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-theme";
import { styled, theme } from "@washingtonpost/wpds-theme";

import { ComboboxOption } from "@reach/combobox";

export type SearchListItemProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  value: string;
};

const StyledListItem = styled(ComboboxOption, {
  listStyle: "none",
  paddingBlock: "$050",
  paddingInline: "$075",
  "&:hover": {
    backgroundColor: theme.colors.gray400,
  },
  "&[aria-selected='true']": {
    backgroundColor: theme.colors.gray400,
  },
  "[data-user-value='true']": {
    fontWeight: "$bold",
  },
});

export const SearchListItem = ({
  children,
  value,
  ...rest
}: SearchListItemProps) => {
  return (
    <StyledListItem value={value} {...rest}>
      {children}
    </StyledListItem>
  );
};

SearchListItem.displayName = "SearchListItem";
