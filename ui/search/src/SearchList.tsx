import * as React from "react";

import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

import { ComboboxList } from "@reach/combobox";

export type SearchListProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
};

const StyledList = styled(ComboboxList, {
  paddingLeft: 0,
  margin: 0,
  background: theme.colors.secondary,
  alignItems: "center",
  overflowY: "scroll",
});
export const SearchList = ({ children, css, ...rest }: SearchListProps) => {
  return (
    <StyledList {...rest} css={{ maxHeight: "300px", ...css }}>
      {children}
    </StyledList>
  );
};

SearchList.displayName = "SearchList";
