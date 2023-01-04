module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "jest",
    "react",
    "testing-library",
    "jest-dom",
    "use-encapsulation",
    "@washingtonpost/wpds",
  ],
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:testing-library/react",
    "plugin:testing-library/dom",
    "plugin:jest-dom/recommended",
    "plugin:storybook/recommended",
  ],
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
        "@washingtonpost/wpds/theme-colors": "warn",
        "no-restricted-syntax": [
          "error",
          {
            selector:
              "ImportDeclaration[source.value='react'][specifiers.0.type='ImportDefaultSpecifier']",
            message: "Default React import not allowed",
          },
        ],
      },
    },
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
      },
    },
  },
  rules: {
    "react/prop-types": 0,
  },
};
