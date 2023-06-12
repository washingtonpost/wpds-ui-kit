/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path").resolve;
const util = require("util");
const tokens = require("@washingtonpost/wpds-theme/src/wpds.tokens.json");
/* eslint-enable @typescript-eslint/no-var-requires */

let theme = {
  borderRadius: {
    none: "0px",
  },
  boxShadow: {
    none: "none",
  },
  colors: {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: tokens.color.static.gray0.value,
    white: tokens.color.static.gray700.value,
  },
  fontFamily: {
    sans: "var(--wpds-fonts-meta)",
    serif: "var(--wpds-fonts-body)",
  },
  spacing: {
    px: "1px",
    0: "0px",
  },
  zIndex: {
    auto: "auto",
  },
};

function createThemeFile() {
  try {
    convertTokens();
    fs.mkdir(path(__dirname, "../dist"), () => {
      let Data = `module.exports = ${util.inspect(theme, false, 2, false)}
`;
      fs.writeFile(
        path(__dirname, "../dist/wpds-theme.js"),
        Data,
        "utf8",
        () => {
          console.log("Created theme file in ../dist/wpds-theme.js");
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
}

createThemeFile();

function convertTokens() {
  for (var key in tokens) {
    let themeKey;

    switch (key) {
      case "color":
        themeKey = "colors";
        break;
      case "fonts":
        themeKey = "fontFamily";
        break;
      case "fontSize":
        themeKey = "fontSize";
        break;
      case "fontWeights":
        themeKey = "fontWeight";
        break;
      case "lineHeight":
        themeKey = "lineHeight";
        break;
      case "radii":
        themeKey = "borderRadius";
        break;
      case "shadow":
        themeKey = "boxShadow";
        break;
      case "size":
        themeKey = "spacing";
        break;
      case "z-index":
        themeKey = "zIndex";
        break;
    }
    if (themeKey === "colors") {
      handleColors();
    } else {
      handleConversion({ tokenKey: key, themeKey: themeKey });
    }
  }
}

function handleColors() {
  Object.keys(tokens.color).forEach((key) => {
    Object.keys(tokens.color[key]).forEach((color) => {
      if (color === "description") return;
      if (key === "dark") return;

      const colorVar = `var(--wpds-colors-${color}${
        key === "static" ? `-${key}` : ""
      })`;

      if (key === "theme") {
        theme.colors[color] = colorVar;
      } else {
        const numIndex = color
          .split("")
          .findIndex((char) => !isNaN(parseInt(char, 10)));
        const colorName = color.substring(0, numIndex);
        let colorNumber =
          color.substring(numIndex) + (key === "static" ? `-${key}` : "");
        if (theme.colors[colorName] === undefined) {
          theme.colors[colorName] = {};
        }
        theme.colors[colorName][colorNumber] = colorVar;
      }
    });
  });
}

function handleConversion({ tokenKey, themeKey }) {
  Object.keys(tokens[tokenKey]).forEach((key) => {
    if (key === "description") return;

    if (theme[themeKey] === undefined) {
      theme[themeKey] = {};
    }
    theme[themeKey][key] = `var(--wpds-${getVarFromKey(tokenKey)}-${key})`;
  });
}

function getVarFromKey(key) {
  switch (key) {
    case "fontSize":
    case "size":
    case "shadow":
    case "lineHeight":
      return key + "s";
    case "z-index":
      return "zIndices";
    default:
      return key;
  }
}
