import React from "react";
import { vars } from "../theme/contracts.css";
import { Search } from "@washingtonpost/wpds-assets";
import { IconVE } from "../icon/icon-ve";
import { inputSearchEmptyStateText } from "./InputSearch.css";
import { InputSearchOtherStateVE } from "./input-search-other-state-ve";

export type InputSearchEmptyStateProps = {
  /** Override CSS */
  css?: React.CSSProperties;
  /** Text Displayed */
  text?: React.ReactNode;
} & React.ComponentPropsWithRef<"div">;

const SearchIcon = (
  <IconVE label="Search" size="200" style={{ fill: vars.colors.primary }}>
    <Search />
  </IconVE>
);

export const InputSearchEmptyStateVE = ({
  text = "No results found",
  ...rest
}: InputSearchEmptyStateProps): JSX.Element => {
  return (
    <InputSearchOtherStateVE icon={SearchIcon} {...rest}>
      <span className={inputSearchEmptyStateText}>{text}</span>
    </InputSearchOtherStateVE>
  );
};

InputSearchEmptyStateVE.displayName = "InputSearchEmptyStateVE";
