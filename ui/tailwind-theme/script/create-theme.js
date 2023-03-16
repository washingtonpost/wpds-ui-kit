/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path").resolve;
const util = require("util");
const tokens = require("@washingtonpost/wpds-theme/src/wpds.tokens.json");
/* eslint-enable @typescript-eslint/no-var-requires */

let theme = {
  borderRadius: {
    none: "0px",
    full: "9999px",
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
    sans: tokens.fonts.meta.value.split(","),
    serif: tokens.fonts.meta.value.split(","),
  },
  spacing: {
    px: "1px",
    0: "0px",
  },
  zIndex: {
    auto: "auto",
  },
};

function convertTokens() {
  for (var key in tokens) {
    switch (key) {
      case "color":
        handleColors();
        break;
      case "fonts":
        handleFonts();
        break;
      case "fontSize":
        handleConversion({ tokenKey: "fontSize", themeKey: "fontSize" });
        break;
      case "fontWeights":
        handleConversion({ tokenKey: "fontWeights", themeKey: "fontWeight" });
        break;
      case "lineHeight":
        handleConversion({ tokenKey: "lineHeight", themeKey: "lineHeight" });
        break;
      case "radii":
        handleConversion({ tokenKey: "radii", themeKey: "borderRadius" });
        break;
      case "shadow":
        handleConversion({ tokenKey: "shadow", themeKey: "boxShadow" });
        break;
      case "size":
        handleConversion({ tokenKey: "size", themeKey: "spacing" });
        break;
      case "z-index":
        handleConversion({ tokenKey: "z-index", themeKey: "zIndex" });
        break;
    }
  }
}

function handleColors() {
  Object.keys(tokens.color).forEach((key) => {
    if (key === "static") return;
    Object.keys(tokens.color[key]).forEach((color) => {
      if (color === "description") return;

      if (key === "theme") {
        let valueColor = tokens.color[key][color].value.substring(
          1,
          tokens.color[key][color].value.length - 1
        );

        if (valueColor.includes("-static")) {
          valueColor = valueColor.substring(0, valueColor.indexOf("-"));
          theme.colors[color] = tokens.color.static[valueColor].value;
        } else {
          theme.colors[color] = tokens.color.light[valueColor].value;
          theme.colors[color + "-dark"] = tokens.color.dark[valueColor].value;
        }
      } else {
        const numIndex = color
          .split("")
          .findIndex((char) => !isNaN(parseInt(char, 10)));
        const colorName = color.substring(0, numIndex);
        let colorNumber = color.substring(numIndex);
        if (key === "dark") {
          colorNumber += "-dark";
        }
        if (theme.colors[colorName] === undefined) {
          theme.colors[colorName] = {};
        }
        theme.colors[colorName][colorNumber] = tokens.color[key][color].value;
      }
    });
  });
}

function handleFonts() {
  Object.keys(tokens.fonts).forEach((key) => {
    theme.fontFamily[key] = tokens.fonts[key].value.split(",");
  });
}

function handleConversion({ tokenKey, themeKey }) {
  Object.keys(tokens[tokenKey]).forEach((key) => {
    if (key === "description") return;

    if (theme[themeKey] === undefined) {
      theme[themeKey] = {};
    }

    if (
      typeof tokens[tokenKey][key].value === "string" &&
      tokens[tokenKey][key].value.includes("{")
    ) {
      const keys = tokens[tokenKey][key].value
        .substring(1, tokens[tokenKey][key].value.length - 1)
        .split(".");
      const value = tokens[keys[0]][keys[1]].value;
      theme[themeKey][key] = value;
    } else {
      theme[themeKey][key] = tokens[tokenKey][key].value;
    }
  });
}

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
