import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-theme";

import { styled, theme } from "@washingtonpost/wpds-theme";
import { Search } from "@washingtonpost/wpds-assets";
import { Icon } from "@washingtonpost/wpds-icon";

import { SearchOtherState } from "./SearchOtherState";

export type SearchEmptyStateProps = {
  /** Override CSS */
  css?: WPDS.CSS;
  /**The input's label text, required for accessibility
   * @default Search
   */
  label?: string;
};

const StyledSpan = styled("span", {});

const SearchIcon = (
  <Icon label="Search" size="200" fill={theme.colors.primary}>
    <Search />
  </Icon>
);

//TODO: remove any return type from here
export const SearchEmptyState = ({
  ...rest
}: SearchEmptyStateProps): JSX.Element => {
  return (
    <SearchOtherState icon={SearchIcon} {...rest}>
      <StyledSpan css={{ color: theme.colors.gray80, marginTop: "$100" }}>
        No results found
      </StyledSpan>
      <StyledSpan css={{ marginTop: "$025" }}>
        Try a different key word
      </StyledSpan>
    </SearchOtherState>
  );
};

SearchEmptyState.displayName = "SearchEmptyState";
