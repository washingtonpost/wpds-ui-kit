import { styled, theme } from "@washingtonpost/wpds-theme";
import { InputLabel } from "@washingtonpost/wpds-input-label";

export const FloatingLabelStyles = {
  fontSize: theme.fontSizes["075"],
  lineHeight: theme.lineHeights["100"],
  transform: `translateY(${theme.space["050"]})`,
};

export const TextInputLabel = styled(InputLabel, {
  insetBlockStart: "0",
  insetInlineStart: "$050",
  position: "absolute",
  pointerEvents: "none",
  transform: `translateY(${theme.space["100"]})`,
  transition: theme.transitions.allFast,
  "@reducedMotion": {
    transition: "none",
  },

  variants: {
    isFloating: {
      true: FloatingLabelStyles,
    },
  },
});
