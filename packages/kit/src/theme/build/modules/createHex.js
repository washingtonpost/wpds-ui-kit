import rgbHex from "rgb-hex";
import * as fs from 'fs';
import Tokens from "../../wpds.tokens.json" assert { type: 'json' };

createHex(Tokens);
function createHex(Tokens) {
  const allColorsByHexesAndRGBA = {};
  const themes = Object.keys(Tokens.color);
  for (let index in themes) {
    var hexes = {};
    let theme = themes[index];
    if (theme === "theme") {
      break; // skip this entry
    }
    let colorsByTheme = Tokens.color[theme];

    for (let single_color in colorsByTheme) {
      if (single_color !== "description") {
        let value = colorsByTheme[single_color]["value"];
        let hex = rgbHex(value);
        hexes[single_color] = { rgba: value, hex: hex };
      }
      allColorsByHexesAndRGBA[theme] = hexes;
    }
  }
  fs.writeFile(
    "./src/hexcodes.tokens.json",
    JSON.stringify(allColorsByHexesAndRGBA),
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}