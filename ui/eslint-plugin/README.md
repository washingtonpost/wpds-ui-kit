# ESLint Plugin

WPDS Linting rules

1. **theme-colors** - looks for colors properties in style objects that use hex values and suggests a design token replacement.

## Installation

- Install from npm
  ```
  npm i @washingtonpost/eslint-plugin-wpds/ --dev
  ```
- Add plugin and set level of rules in `eslint.rc`
  ```
  module.exports = {
    ...
    plugins: [
      "@washingtonpost/wpds",
    ],
    ...
    rules: [
      "@washingtonpost/wpds/theme-colors": "warn",
    ]
  }
  ```
