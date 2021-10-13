module.exports = {
  stories: ["../ui/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-playroom",
    "@storybook/addon-a11y",
  ],
  webpackFinal: async (config, { configType }) => {
    if (process.env.NODE_ENV === "production") {
      config.output.publicPath = "/storybook/";
    }
    return config;
  },
  managerWebpack: async (config) => {
    if (process.env.NODE_ENV === "production") {
      config.output.publicPath = "/storybook/";
    }
    return config;
  },
};
