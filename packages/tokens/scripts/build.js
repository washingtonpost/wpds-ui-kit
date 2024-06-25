const React = require("react");
const { renderToString } = require("react-dom/server");
const { getCssText, darkTheme } = require("@washingtonpost/wpds-ui-kit");
const fs = require("fs");

// Needed in order for the react render (with stitches) to generate the dark color tokens
// eslint-disable-next-line testing-library/render-result-naming-convention
const css = renderToString(
  React.createElement("style", {
    dangerouslySetInnerHTML: { __html: getCssText() },
  })
);

// Needed in order for the react render (with stitches) to generate the dark color tokens
// eslint-disable-next-line testing-library/render-result-naming-convention
const div = renderToString(
  React.createElement("div", {
    className: darkTheme,
  })
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const template = `
    ${css}
    ${div}
`;

// mkdir dist directory if it doesn't exist
fs.mkdirSync("./dist", { recursive: true });

fs.writeFileSync("./dist/raw.css", getCssText());
