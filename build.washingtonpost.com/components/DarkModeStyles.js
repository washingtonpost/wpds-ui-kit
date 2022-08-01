import { darkTheme, globalCss, theme } from "@washingtonpost/wpds-ui-kit";

export const darkModeStyles = globalCss({
  "@dark": {
    ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
      const currentColor = darkTheme.colors[currentColorKey];
      const currentColorValue =
        currentColor.value.substring(0, 1) === "$"
          ? `$colors${currentColor.value}`
          : currentColor.value;

      return {
        [currentColor.variable]: currentColorValue,
        ...varSet,
      };
    }, {}),
  },
  body: {
    background: theme.colors.secondary,
    // style the scrollbar
    "&::-webkit-scrollbar": {
      width: "calc($087 / 2)",
      height: "calc($087 / 2)",
      backgroundColor: theme.colors.subtle,
    },
    // style the scrollbar handle
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.colors.alpha50,
      borderRadius: "0",
    },
    // style the scrollbar handle on hover
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: theme.colors.alpha50,
    },
  },
});
