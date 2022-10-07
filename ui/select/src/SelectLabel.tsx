import React, { useEffect, useState } from "react";
import { SelectContext } from "./SelectRoot";

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

const RequiredTag = styled("span", {
  color: theme.colors.red100,
});

export const SelectLabel = ({ children, ...props }) => {
  const { currentValue, required } = React.useContext(SelectContext);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    if (currentValue.trim().length !== 0) {
      setIsFloating(true);
    }
  }, [currentValue]);

  return (
    <LabelInputWrapper {...props}>
      <TextInputLabel isFloating={isFloating}>
        {children}
        {required && <RequiredTag>*</RequiredTag>}
      </TextInputLabel>
    </LabelInputWrapper>
  );
};

SelectLabel.displayName = "SelectLabel";
