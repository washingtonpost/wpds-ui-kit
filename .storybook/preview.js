export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  playroom: {
    url:
      process.env.NODE_ENV === "production"
        ? "/playroom/"
        : "http://localhost:9000",
  },
  a11y: {
    element: "#root",
    manual: false,
  },
};
