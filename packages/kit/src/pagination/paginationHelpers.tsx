import { styled, theme } from "../theme";
import { Button } from "../button";

export const StyledButton = styled(Button, {
  width: "$200",
  height: "$200",
  minWidth: "$200",
  paddingRight: 0,
  paddingLeft: 0,
  fontWeight: theme.fontWeights.regular,
  fontSize: "$087",
  lineHeight: "16px",
  textDecoration: "none",
  transition: "background-color .05ms linear",
  variants: {
    disabled: {
      true: {
        color: theme.colors.onDisabled,
        pointerEvents: "none",
      },
    },
    hidden: {
      true: {
        display: "none",
      },
    },
    selected: {
      true: {
        fontWeight: theme.fontWeights.bold,
        pointerEvents: "none",
        backgroundColor: theme.colors.disabled,
      },
    },
    variant: {
      secondary: {
        border: "1px solid transparent",
        "&:hover": {
          border: "1px solid var(--wpds-colors-outline)",
        },
      },
    },
  },
});

export const StyledP = styled("p", {
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  color: "$gray80",
});

export const HideOnSmall = styled("div", {
  gap: "$025",
  fontFamily: theme.fonts.meta,
  color: "$gray80",
  display: "flex",
  variants: {
    compact: {
      false: {
        // don't display other variants on mobile/smaller screens
        "@sm": {
          display: "none",
        },
      },
    },
  },
});
