import { styled, theme } from "../theme";
import { InputLabel } from "../input-label";
import { FloatingLabelStyles } from "../input-shared";

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
