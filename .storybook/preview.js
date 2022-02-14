import { globalStyles, darkTheme, theme } from "@washingtonpost/wpds-ui-kit";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    element: "#root",
    manual: false,
  },
  darkMode: {
    stylePreview: true,
    darkClass: darkTheme.className,
  },
  backgrounds: {
    default: "story",
    values: [
      {
        name: "story",
        value: theme.colors.gray500,
      },
    ],
  },
  layout: "centered",
};

function GlobalStyles(props) {
  globalStyles();
  return props.children;
}

export const decorators = [
  (renderStory) => <GlobalStyles>{renderStory()}</GlobalStyles>,
];
