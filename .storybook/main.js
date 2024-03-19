import { dirname, join } from "path";
// add process.env
require("dotenv").config();

module.exports = {
  stories: ["../packages/kit/src/**/*.stories.tsx"],
  exclude: ["node_modules", "dist"],

  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
  ],

  previewBody: (body) => `${body}`,

  docs: {
    autodocs: true,
  },

  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {}
  }
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
