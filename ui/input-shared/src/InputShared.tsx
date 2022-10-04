import React from "react";
import { theme } from "@washingtonpost/wpds-theme";

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

  "&:focus": {
    outline: "none",
  },

  "&:disabled": {
    color: "inherit",
  },
};

export const useFloating = (
  val,
  onFocus,
  onBlur,
  onChange
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
    if (val && !isFloating) {
      setIsFloating(true);
      setIsTouched(true);
    } else if (!val && prevValue.current && !isFocused && isFloating) {
      setIsFloating(false);
      setIsTouched(false);
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
