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
    "@chromatic-com/storybook"
  ],

  previewBody: (body) => `${body}`,

  features: {
    interactionsDebugger: true,
  },

  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // Filter out third-party props from node_modules except @mui packages.
      propFilter: (prop) =>
        prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true,
    },
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
