import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-theme";
import { styled, theme } from "@washingtonpost/wpds-theme";

import { ComboboxOption } from "@reach/combobox";

export type InputSearchListItemProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  value: string;
};

const StyledListItem = styled(ComboboxOption, {
  color: theme.colors.primary,
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
