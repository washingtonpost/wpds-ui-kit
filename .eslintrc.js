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
    "plugin:react/jsx-runtime",
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
      },
    },
    // warning  'React' is defined but never used  @typescript-eslint/no-unused-vars -- allow unused React
    {
      files: ["**/*.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            varsIgnorePattern: "React",
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
