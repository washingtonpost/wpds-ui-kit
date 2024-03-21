import React from "react";

import { styled, theme } from "../theme";

import type * as WPDS from "../theme";

export type InputSearchOtherStateProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  /**The input's label text, required for accessibility
   * @default Search
   */
  icon: React.ReactNode;
};

const StyledStateContainer = styled("div", {
  display: "flex",
  height: "200px",
  width: "100%",
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
export const InputSearchOtherState = ({
  icon,
  children,
  ...rest
}: InputSearchOtherStateProps): JSX.Element => {
  return (
    <StyledStateContainer {...rest}>
      <StyledContentContainer>
        <StyledIconContainer>{icon}</StyledIconContainer>
        {children}
      </StyledContentContainer>
    </StyledStateContainer>
  );
};

InputSearchOtherState.displayName = "InputSearchEmptyState";
