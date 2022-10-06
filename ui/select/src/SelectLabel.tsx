import * as React from "react";

import { theme, styled } from "@washingtonpost/wpds-theme";
import { InputLabel } from "@washingtonpost/wpds-input-label";

const LabelInputWrapper = styled("div", {
  flex: 1,
  position: "relative",
  cursor: "pointer",
});

const TextInputLabel = styled(InputLabel, {
  insetBlockStart: "0",
  insetInlineStart: "$050",
  position: "absolute",
  pointerEvents: "pointer",
  transform: `translateY(${theme.space["100"]})`,
  transition: theme.transitions.allFast,
  variants: {
    isFloating: {
      true: {
        fontSize: theme.fontSizes["075"],
        lineHeight: theme.lineHeights["100"],
        transform: `translateY(${theme.space["050"]})`,
      },
    },
  },
});

export const SelectLabel = ({ children, ...props }) => (
  <LabelInputWrapper {...props}>
    <TextInputLabel isFloating={true}>{children}</TextInputLabel>
  </LabelInputWrapper>
);

SelectLabel.displayName = "SelectLabel";
