import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-theme";

import { styled, theme } from "@washingtonpost/wpds-theme";
import { Search } from "@washingtonpost/wpds-assets";
import { Icon } from "@washingtonpost/wpds-icon";

import { InputSearchOtherState } from "./InputSearchOtherState";

export type InputSearchEmptyStateProps = {
  /** Override CSS */
  css?: WPDS.CSS;
};

const StyledSpan = styled("span", {});

const SearchIcon = (
  <Icon label="Search" size="200" fill={theme.colors.primary}>
    <Search />
  </Icon>
);

export const InputSearchEmptyState = ({
  ...rest
}: InputSearchEmptyStateProps): JSX.Element => {
  return (
    <InputSearchOtherState icon={SearchIcon} {...rest}>
      <StyledSpan css={{ color: theme.colors.gray80, marginTop: "$100" }}>
        No results found
      </StyledSpan>
      <StyledSpan css={{ marginTop: "$025" }}>
        Try a different key word
      </StyledSpan>
    </InputSearchOtherState>
  );
};

InputSearchEmptyState.displayName = "InputSearchEmptyState";
