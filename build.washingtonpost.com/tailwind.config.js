/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const WPDSTheme = require("@washingtonpost/wpds-tailwind-theme");

module.exports = {
  content: ["./docs/resources/tools/tailwind-theme.mdx"],
  theme: WPDSTheme,
  corePlugins: {
    preflight: false,
  },
};
