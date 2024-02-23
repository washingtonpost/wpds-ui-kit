import * as React from "react";
import { ComboboxOption } from "@reach/combobox";
import { styled, theme } from "../theme";

const StyledListItem = styled(ComboboxOption, {
  color: theme.colors.primary,
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  fontWeight: theme.fontWeights.light,
  paddingBlock: "$050",
  paddingInline: "$075",
  "&:hover": {
    backgroundColor: theme.colors.gray400,
  },
  "&[aria-selected='true']": {
    backgroundColor: theme.colors.gray400,
  },
  "[data-user-value='true']": {
    fontWeight: theme.fontWeights.bold,
  },
});

export type InputSearchListItemProps = Omit<
  React.ComponentPropsWithRef<typeof StyledListItem>,
  "index"
>;

export const InputSearchListItem = ({
  children,
  value,
  ...rest
}: InputSearchListItemProps) => {
  return (
    <StyledListItem value={value} {...rest}>
      {children}
    </StyledListItem>
  );
};

InputSearchListItem.displayName = "InputSearchListItem";
