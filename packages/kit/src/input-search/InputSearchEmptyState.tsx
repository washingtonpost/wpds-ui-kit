import * as React from "react";

import type * as WPDS from "../theme";

import { styled, theme } from "../theme";
import { Search } from "@washingtonpost/wpds-assets";
import { Icon } from "../icon";

import { InputSearchOtherState } from "./InputSearchOtherState";

export type InputSearchEmptyStateProps = {
  /** Override CSS */
  css?: WPDS.CSS;
  /** Text Displayed */
  text?: React.ReactNode;
};

const StyledSpan = styled("span", {
  color: theme.colors.gray80,
  marginTop: theme.space["100"],
});

const SearchIcon = (
  <Icon label="Search" size="200" fill={theme.colors.primary}>
    <Search />
  </Icon>
);

export const InputSearchEmptyState = ({
  text = "No results found",
  ...rest
}: InputSearchEmptyStateProps): JSX.Element => {
  return (
    <InputSearchOtherState icon={SearchIcon} {...rest}>
      <StyledSpan>{text}</StyledSpan>
    </InputSearchOtherState>
  );
};

InputSearchEmptyState.displayName = "InputSearchEmptyState";
