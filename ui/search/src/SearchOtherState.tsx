import * as React from "react";

import { styled, theme } from "@washingtonpost/wpds-theme";

import type * as WPDS from "@washingtonpost/wpds-theme";

export type SearchOtherStateProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  /**The input's label text, required for accessibility
   * @default Search
   */
  //TODO: remove the any type
  icon: any;
};

const StyledStateContainer = styled("div", {
  display: "flex",
  height: "200px",
  width: "100%",
  background: theme.colors.secondary,
  justifyContent: "center",
  alignItems: "center",
});

const StyledContentContainer = styled("div", {
  height: "120px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const StyledIconContainer = styled("div", {
  background: theme.colors.alpha25,
  height: theme.sizes[350],
  width: theme.sizes[350],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100%",
});

//TODO: remove any return type from here
export const SearchOtherState = ({
  icon,
  children,
  ...rest
}: SearchOtherStateProps): any => {
  return (
    <StyledStateContainer {...rest}>
      <StyledContentContainer>
        <StyledIconContainer>{icon}</StyledIconContainer>
        {children}
      </StyledContentContainer>
    </StyledStateContainer>
  );
};

SearchOtherState.displayName = "SearchEmptyState";
