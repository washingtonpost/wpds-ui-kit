import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-theme";
import { styled, theme } from "@washingtonpost/wpds-theme";

import { ComboboxOption } from "@reach/combobox";

export type SearchListItemProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  key: any;
  value: any;
};

const StyledListItem = styled(ComboboxOption, {
  listStyle: "none",
  height: "$200",
  paddingTop: "$025",
  "&:hover": {
    backgroundColor: theme.colors.gray400,
  },
  "[data-user-value='true']": {
    fontWeight: "$bold",
  },
});

export const SearchListItem = ({
  children,
  key,
  value,
  ...rest
}: SearchListItemProps) => {
  return (
    <StyledListItem key={key} value={value} {...rest}>
      {children}
    </StyledListItem>
  );
};

SearchListItem.displayName = "SearchListItem";
