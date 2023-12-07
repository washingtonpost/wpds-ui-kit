import { dirname, join } from "path";
// add process.env
require("dotenv").config();

module.exports = {
  stories: ["../ui/(**|!(node_modules))/src/*.stories.@(ts|tsx|js|jsx)"],
  exclude: ["node_modules", "dist"],

  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
  ],

  previewBody: (body) => `${body}`,

  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },

  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },

  // typescript: {
  //   reactDocgen: "react-docgen-typescript",
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: (prop) =>
  //       prop.parent
  //         ? /@radix-ui/.test(prop.parent.fileName) ||
  //           !/node_modules/.test(prop.parent.fileName)
  //         : true,
  //     compilerOptions: {
  //       allowSyntheticDefaultImports: false,
  //     },
  //   },
  // },

  docs: {
    autodocs: true,
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
