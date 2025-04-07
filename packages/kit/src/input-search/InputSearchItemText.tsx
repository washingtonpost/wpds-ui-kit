import React from "react";
import { styled } from "../theme";
import { InputSearchContext } from "./InputSearchRoot";

const StyledItemText = styled("span", {});

export type InputSearchItemTextProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithRef<typeof StyledItemText>;

export const InputSearchItemText = ({
  children,
  ...rest
}: InputSearchItemTextProps) => {
  const { state } = React.useContext(InputSearchContext);
  const { onClick } = { ...rest };

  const highlighted = (children as string).replace(
    new RegExp(state.inputValue, "gi"),
    (match) => (match ? `<mark>${match}</mark>` : "")
  );
  return (
    <StyledItemText
      {...rest}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: highlighted }}
    />
  );
};

InputSearchItemText.displayName = "InputSearchItemText";
