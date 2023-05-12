import * as React from "react";
import { SelectContext } from "./Select";

import { theme, styled } from "@washingtonpost/wpds-theme";
import { InputLabel } from "@washingtonpost/wpds-input-label";

import type * as WPDS from "@washingtonpost/wpds-theme";

const LabelInputWrapper = styled("div", {
  flex: 1,
  position: "relative"
});

const TextInputLabel = styled(InputLabel, {
  whiteSpace: "nowrap",
  insetBlockStart: "0",
  position: "absolute",
  cursor: "pointer",
  transform: `translateY(${theme.space["100"]})`,
  transition: theme.transitions.allFast,
  "@reducedMotion": {
    transition: "none"
  },

  variants: {
    isFloating: {
      true: {
        fontSize: theme.fontSizes["075"],
        lineHeight: theme.lineHeights["100"],
        transform: `translateY(${theme.space["050"]})`
      }
    },

    isDisabled: {
      true: {
        cursor: "not-allowed",
        color: theme.colors.onDisabled
      }
    }
  }
});

// occupy space in the DOM so that the container
// knows to take up the same space as the absolutely positioned label
const HiddenSpanToOccupySpace = styled("span", {
  visibility: "hidden"
});

const RequiredTag = styled("span", {
  color: theme.colors.red100
});

type SelectLabelVariants = WPDS.VariantProps<typeof TextInputLabel>;

type SelectLabelProps = SelectLabelVariants & {
  /** Used to insert select elements into the root component*/
  children?: React.ReactNode;
  /** Overrides for the input text styles. Padding overrides affect the input container and  */
  css?: WPDS.CSS;
};

export const SelectLabel = ({ children, ...props }: SelectLabelProps) => {
  const { currentValue, required, disabled, isFloating, setIsFloating } =
    React.useContext(SelectContext);

  React.useEffect(() => {
    if (currentValue && currentValue.trim().length !== 0) {
      setIsFloating(true);
    }
  }, [currentValue, isFloating, setIsFloating]);

  return (
    <LabelInputWrapper {...props}>
      <TextInputLabel isFloating={isFloating} isDisabled={disabled}>
        {children}
        {required && <RequiredTag>*</RequiredTag>}
      </TextInputLabel>
      {!isFloating && (
        <HiddenSpanToOccupySpace aria-hidden={true}>
          {children}
        </HiddenSpanToOccupySpace>
      )}
    </LabelInputWrapper>
  );
};

SelectLabel.displayName = "SelectLabel";
