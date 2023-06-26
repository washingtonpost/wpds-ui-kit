import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-theme";
import { styled, theme } from "@washingtonpost/wpds-theme";

export type InputSearchListHeadingProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
};

const StyledListItem = styled("li", {
  borderBlockStart: `1px solid ${theme.colors.faint}`,
  color: theme.colors.accessible,
  fontSize: theme.fontSizes["087"],
  listStyle: "none",
  marginBlockStart: "$050",
  marginInline: "$075",
  paddingBlock: "$050",
});

export const InputSearchListHeading = ({
  children,
  ...rest
}: InputSearchListHeadingProps) => {
  return <StyledListItem {...rest}>{children}</StyledListItem>;
};

InputSearchListHeading.displayName = "InputSearchListHeading";
