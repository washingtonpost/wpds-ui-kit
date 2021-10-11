module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../ui/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    if (process.env.VERCEL === "1") {
      config.output.publicPath = "/storybook/";
    }
    return config;
  },
  managerWebpack: async (config) => {
    if (process.env.VERCEL === "1") {
      config.output.publicPath = "/storybook/";
    }
    return config;
  },
};
