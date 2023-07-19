import * as React from "react";
import { ComboboxOptionText } from "@reach/combobox";
import { styled } from "@washingtonpost/wpds-theme";

const StyledItemText = styled(ComboboxOptionText, {});

export type InputSearchItemTextProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithRef<typeof StyledItemText>;

export const InputSearchItemText = ({
  children,
  ...rest
}: InputSearchItemTextProps) => {
  return <StyledItemText {...rest}>{children}</StyledItemText>;
};

InputSearchItemText.displayName = "InputSearchItemText";
