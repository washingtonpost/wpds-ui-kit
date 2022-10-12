import React, { useEffect, useState } from "react";
import { SelectContext } from "./SelectRoot";

import { theme, styled } from "@washingtonpost/wpds-theme";
import { InputLabel } from "@washingtonpost/wpds-input-label";

import type * as WPDS from "@washingtonpost/wpds-theme";

const LabelInputWrapper = styled("div", {
  flex: 1,
  position: "relative",
});

const TextInputLabel = styled(InputLabel, {
  insetBlockStart: "0",
  insetInlineStart: "$050",
  position: "absolute",
  cursor: "pointer",
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

    isDisabled: {
      true: {
        cursor: "not-allowed",
        color: theme.colors.onDisabled,
      },
    },
  },
});

const RequiredTag = styled("span", {
  color: theme.colors.red100,
});

export type SelectLabelProps = {
  /** Used to insert select elements into the root component*/
  children?: React.ReactNode;
  /** Overrides for the input text styles. Padding overrides affect the input container and  */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof TextInputLabel>;

export const SelectLabel = ({ children, ...props }) => {
  const { currentValue, required, disabled } = React.useContext(SelectContext);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    if (currentValue && currentValue.trim().length !== 0) {
      setIsFloating(true);
    }
  }, [currentValue]);

  return (
    <LabelInputWrapper {...props}>
      <TextInputLabel isFloating={isFloating} isDisabled={disabled}>
        {children}
        {required && <RequiredTag>*</RequiredTag>}
      </TextInputLabel>
    </LabelInputWrapper>
  );
};

SelectLabel.displayName = "SelectLabel";
