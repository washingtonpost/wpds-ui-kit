import React from "react";
import { styled, theme, keyframes } from "../theme";

import { Icon } from "../icon";
import { Loading } from "@washingtonpost/wpds-assets";
import type * as WPDS from "../theme";

import { InputSearchOtherState } from "./InputSearchOtherState";

export type InputSearchLoadingStateProps = {
  /** Override CSS */
  css?: WPDS.CSS;
};

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(359deg)" },
});

const StyledIcon = styled(Icon, {
  animation: `${rotate} linear 1.25s infinite`,
});

const LoadingIcon = (
  <StyledIcon label="Loading" size="200" fill={theme.colors.primary}>
    <Loading />
  </StyledIcon>
);

export const InputSearchLoadingState = ({
  ...rest
}: InputSearchLoadingStateProps): JSX.Element => {
  return <InputSearchOtherState icon={LoadingIcon} {...rest} />;
};

InputSearchLoadingState.displayName = "InputSearchLoadingState";
