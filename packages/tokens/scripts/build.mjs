import React from "react";
import { renderToString } from 'react-dom/server';
import { getCssText, globalStyles, darkModeGlobalStyles, darkTheme } from "@washingtonpost/wpds-theme";
import fs from "fs";

// eslint-disable-next-line testing-library/render-result-naming-convention
const css = renderToString(
    React.createElement("style", {
        dangerouslySetInnerHTML: { __html: getCssText() }
    })
);

// eslint-disable-next-line testing-library/render-result-naming-convention
const div = renderToString(
    React.createElement("div", {
        className: darkTheme
    })
);

globalStyles();
darkModeGlobalStyles();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const template = `
    ${css}
    ${div}
`;

// mkdir dist directory if it doesn't exist
fs.mkdirSync("./dist", { recursive: true });

fs.writeFileSync("./dist/styles.css", getCssText());
