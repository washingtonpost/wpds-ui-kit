
const fs = require("fs");
const path = require("path").resolve;
const Tokens = require("../src/wpds.tokens.json");
const FigmaVariables = require("../src/color-tokens-figma-export.json")

const UpdateToUseFigmaVariables = () => {
    const variables = FigmaVariables.variables;
    let _Newtokens = JSON.parse(JSON.stringify(Tokens));
    for (let i = 0; i < variables.length; i++) {
        const v = variables[i];
        let name = v.name;
        const lightValue = `rgba(${v.resolvedValuesByMode["47:6"].resolvedValue.r},${v.resolvedValuesByMode["47:6"].resolvedValue.g},${v.resolvedValuesByMode["47:6"].resolvedValue.b},${v.resolvedValuesByMode["47:6"].resolvedValue.a})`;
        const darkValue = `rgba(${v.resolvedValuesByMode["47:9"].resolvedValue.r},${v.resolvedValuesByMode["47:9"].resolvedValue.g},${v.resolvedValuesByMode["47:9"].resolvedValue.b},${v.resolvedValuesByMode["47:9"].resolvedValue.a})`;
        //Split the name if it has static
        if (name.startsWith("Static/")) {
            name = name.split("Static/")[1]
            // _Newtokens.color.static[name].value = lightValue;
        } else if (name.startsWith("Theme/")) {
            name = name.split("Theme/")[1]
            _Newtokens.color.light = { ..._Newtokens.color.light, [name]: { value: lightValue } }
            _Newtokens.color.dark = { ..._Newtokens.color.light, [name]: { value: darkValue } }
        } else if (name.startsWith("Alpha/")) {
            name = name.split("Alpha/")[1]
        } else {
            _Newtokens.color.light[name].value = lightValue;
            _Newtokens.color.dark[name].value = darkValue;
        }
    }
    console.log(_Newtokens.color.dark.onCtaContainer)
}
UpdateToUseFigmaVariables()