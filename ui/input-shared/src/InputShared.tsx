import * as React from "react";
import { css, theme, globalCss } from "@washingtonpost/wpds-theme";

export const FloatingLabelStyles = {
  fontSize: theme.fontSizes["075"],
  lineHeight: theme.lineHeights["100"],
  transform: `translateY(${theme.space["050"]})`,
};

export const sharedInputStyles = {
  borderRadius: theme.radii["012"],
  borderColor: theme.colors.subtle,
  borderStyle: "solid",
  borderWidth: "1px",
  backgroundColor: theme.colors.secondary,
  color: theme.colors.primary,
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  fontWeight: theme.fontWeights.light,
  lineHeight: theme.lineHeights["125"],

  "&:focus": {
    borderColor: theme.colors.signal,
    outline: "none",
  },
};

export const sharedInputVariants = {
  isInvalid: {
    true: {
      borderColor: theme.colors.error,
      "&:focus": {
        borderColor: theme.colors.error,
      },
    },
  },
  isDisabled: {
    true: {
      backgroundColor: theme.colors.disabled,
      borderColor: theme.colors.disabled,
      color: theme.colors.onDisabled,
    },
  },
};

export const RequiredIndicatorCSS = css({
  color: theme.colors.error,
});

export const globalInputAutoFillTriggerAnimations = globalCss({
  "@keyframes jsTriggerAutoFillStart": {
    from: {
      alpha: 1,
    },
  },
  "@keyframes jsTriggerAutoFillCancel": {
    from: {
      alpha: 1,
    },
  },
});

export const unstyledInputStyles = {
  backgroundColor: "transparent",
  border: "none",
  color: "inherit",
  display: "block",
  fontSize: "inherit",
  lineHeight: "inherit",
  paddingBlockStart: theme.space["125"],
  paddingBlockEnd: theme.space["050"],
  paddingInline: theme.space["050"],
  textOverflow: "ellipsis",
  width: "100%",
  "-webkit-appearance": "none",

  "&:focus": {
    outline: "none",
  },

  "&:disabled": {
    color: "inherit",
  },

  "&:-webkit-autofill": {
    "-webkit-box-shadow": `0 0 0 100px ${theme.colors.secondary} inset`,
    "-webkit-text-fill-color": `${theme.colors.primary}`,
    // used to trigger JS so that we can do the label shrinking
    animation: "jsTriggerAutoFillStart 200ms",
  },

  "&:not(:-webkit-autofill)": {
    // used to trigger JS so that we can stop the label shrinking
    animation: "jsTriggerAutoFillCancel 200ms",
  },

  // hide webkit-cancel-button on search type inputs
  "&::-webkit-search-cancel-button": {
    "-webkit-appearance": "none",
  },

  "@reducedMotion": {
    animation: "none",
  },
};

export const useFloating = (
  val,
  onFocus,
  onBlur,
  onChange,
  isAutofilled
): [
    boolean,
    React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  ] => {

  const [isFloating, setIsFloating] = React.useState(val ? true : false);
  const [isTouched, setIsTouched] = React.useState(val ? true : false);
  const [isFocused, setIsFocused] = React.useState(false);
  const prevValue = React.useRef();

  React.useEffect(() => {
    if (val || isAutofilled) {
      setIsFloating(true);
      setIsTouched(true);
    } else {
      if (!isFocused) {
        setIsFloating(false);
        setIsTouched(false);
      }
    }

    prevValue.current = val;
  }, [val, prevValue, isFloating, isFocused, setIsFloating, setIsTouched]);

  function handleFocus(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setIsFocused(true);
    setIsFloating(true);
    onFocus && onFocus(event);
  }

  function handleBlur(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setIsFocused(false);
    if (!isTouched) {
      setIsFloating(false);
    }
    onBlur && onBlur(event);
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    if (event.target.value) {
      setIsTouched(true);
    } else {
      setIsTouched(false);
    }
    onChange && onChange(event);
  }

  return [isFloating, handleFocus, handleBlur, handleChange];
};
