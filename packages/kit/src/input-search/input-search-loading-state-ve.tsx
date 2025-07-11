import React from "react";
import { vars } from '../theme/contracts.css';
import { IconVE } from "../icon/icon-ve";
import { Loading } from "@washingtonpost/wpds-assets";
import { inputSearchLoadingIcon } from './InputSearch.css';
import { InputSearchOtherStateVE } from "./input-search-other-state-ve";

export type InputSearchLoadingStateProps = {
  /** Override CSS */
  css?: React.CSSProperties;
} & React.ComponentPropsWithRef<"div">;

const LoadingIcon = (
  <IconVE 
    label="Loading" 
    size="200" 
    style={{ fill: vars.colors.primary }}
    className={inputSearchLoadingIcon}
  >
    <Loading />
  </IconVE>
);

export const InputSearchLoadingStateVE = ({
  ...rest
}: InputSearchLoadingStateProps): JSX.Element => {
  return <InputSearchOtherStateVE icon={LoadingIcon} {...rest} />;
};

InputSearchLoadingStateVE.displayName = "InputSearchLoadingStateVE";
