/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const tokens = require("@washingtonpost/wpds-ui-kit/src/theme/wpds.tokens.json");

module.exports = {
  meta: {
    type: "suggestion",
    hasSuggestions: true,
  },
  create: function (context) {
    return {
      Property(node) {
        if (
          node.value.type === "Literal" &&
          typeof node.value.value === "string" &&
          node.value.value.includes("#") &&
          isHex(
            node.value.value.substring(
              node.value.value.indexOf("#") + 1,
              node.value.value.indexOf("#") + 7
            )
          )
        ) {
          const hexValue = node.value.value.substring(
            node.value.value.indexOf("#"),
            node.value.value.indexOf("#") + 7
          );
          const colorName = getColorName(hexValue);
          context.report({
            node,
            message:
              "Use color tokens instead of hex values for maintainability. {{ hexValue }} can be replaced with {{ colorName }}",
            data: {
              colorName: colorName,
              hexValue: hexValue,
            },
            suggest: [
              {
                desc: "Use {{ colorName }} instead of {{ hexValue }}",
                data: {
                  colorName: colorName,
                  hexValue: hexValue,
                },
                fix: function (fixer) {
                  return fixer.replaceTextRange(
                    [
                      node.value.range[0] + node.value.value.indexOf("#") + 1,
                      node.value.range[0] + node.value.value.indexOf("#") + 8,
                    ],
                    colorName
                  );
                },
              },
            ],
          });
        }
      },
    };
  },
};

function isHex(h) {
  const regEx = /[0-9A-Fa-f]{6}/g;
  return regEx.test(h);
}

function getColorName(hex) {
  const tokenColor = Object.keys(tokens.color.static)
    .filter((token) => colorTokenToHex(tokens.color.static[token]) === hex)
    .reduce((prev, curr) => curr, undefined);

  let themeColor;
  let closestColor;

  if (tokenColor) {
    themeColor = Object.keys(tokens.color.theme)
      .filter((token) => {
        const value = tokens.color.theme[token].value;
        if (value) {
          const color = value.substring(1, value.length - 1);
          return color === tokenColor;
        } else {
          return false;
        }
      })
      .reduce((prev, curr) => curr, undefined);
  } else {
    closestColor = getClosestColor(hex);
  }

  return themeColor || tokenColor || closestColor;
}

function colorTokenToHex(token) {
  if (!token || !token.value || !token.value.includes("1)")) return;
  const rgb = getRgbFromToken(token);
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}

function getClosestColor(hexColor) {
  const rgbColor = hexToRgb(hexColor);
  const colors = Object.keys(tokens.color.static)
    .slice(1)
    .filter((key) => !key.includes("alpha"));

  return colors.reduce(
    (prev, curr) => {
      const currRgb = getRgbFromToken(tokens.color.static[curr]);
      return distance(rgbColor, currRgb) < prev[0]
        ? [distance(rgbColor, currRgb), curr]
        : prev;
    },
    [Number.POSITIVE_INFINITY, colors[0]]
  )[1];
}

function getRgbFromToken(token) {
  return token.value
    .substring(5, token.value.lastIndexOf(","))
    .split(",")
    .map((num) => parseInt(num, 10));
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function hexToRgb(hex) {
  return hex
    .slice(1)
    .replace(/^(.)(.)(.)$/gi, "$1$1$2$2$3$3")
    .match(/.{2}/g)
    .map((c) => parseInt(c, 16));
}

function distance(a, b) {
  return Math.sqrt(
    Math.pow(a[0] - b[0], 2) +
      Math.pow(a[1] - b[1], 2) +
      Math.pow(a[2] - b[2], 2)
  );
}
