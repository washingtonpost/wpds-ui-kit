import * as React from "react";

import { styled, theme } from "@washingtonpost/wpds-theme";

import { Icon } from "@washingtonpost/wpds-ui-kit";
import { Loading } from "@washingtonpost/wpds-assets";
import type * as WPDS from "@washingtonpost/wpds-theme";

import { SearchOtherState } from "./SearchOtherState";

export type SearchLoadingStateProps = {
  /** Override CSS */
  css?: WPDS.CSS;
  /**The input's label text, required for accessibility
   * @default Search
   */
};
const StyledSpan = styled("span", {});

const LoadingIcon = (
  <Icon label="Loading" size="200" fill={theme.colors.primary}>
    <Loading />
  </Icon>
);
//TODO: remove any return type from here
export const SearchLoadingState = ({
  ...rest
}: SearchLoadingStateProps): any => {
  return (
    <SearchOtherState icon={LoadingIcon} {...rest}>
      <StyledSpan css={{ color: theme.colors.gray80, marginTop: "$100" }}>
        Loading results
      </StyledSpan>
    </SearchOtherState>
  );
};

SearchLoadingState.displayName = "SearchLoadingState";
