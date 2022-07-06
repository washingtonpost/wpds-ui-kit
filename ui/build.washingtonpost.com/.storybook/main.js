// add process.env
require("dotenv").config();

module.exports = {
  stories: ["../ui/**/src/*.stories.@(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  previewBody: (body) => `${body}`,
  managerHead: (head) =>
    `${head}${
      process.env.VERCEL
        ? `<script>
    window['PREVIEW_URL'] = '/storybook/iframe.html';
</script>`
        : ""
    }`,
  webpackFinal: async (config, { configType }) => {
    if (process.env.VERCEL) {
      config.output.publicPath = "/storybook/";
    }
    return config;
  },
  managerWebpack: async (config) => {
    if (process.env.VERCEL) {
      config.output.publicPath = "/storybook/";
    }
    return config;
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
