import { styled, theme } from "@washingtonpost/wpds-theme";
import { InputLabel } from "@washingtonpost/wpds-input-label";
import { FloatingLabelStyles } from "@washingtonpost/wpds-input-shared";

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
