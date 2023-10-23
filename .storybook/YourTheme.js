// .storybook/YourTheme.js

import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "#166dfc",
  colorSecondary: "#5784c5",

  // UI
  appBg: "#d3e7fa",
  // appContentBg: 'silver',
  // appBorderColor: 'grey',

  // Text colors
  textColor: "#111111",
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: "#6a6a6a",
  barSelectedColor: "#166dfc",
  // barBg: '#ffffff',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  // brandTitle: 'My custom storybook',
  // brandUrl: 'https://example.com',
  brandImage: "/brandImage.png"
  // brandTarget: '_self',
});
