/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const WPDSTheme = require("./dist/wpds-theme");

module.exports = {
  content: ["./app/index.html"],
  theme: WPDSTheme,
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
