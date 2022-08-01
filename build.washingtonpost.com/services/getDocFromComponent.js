import { parse, withCustomConfig } from "react-docgen-typescript";

/**
 * take a component source code and return the doc object
 */
export const getDocFromComponent = (component) => {
  const filePath = `node_modules/@washingtonpost/wpds-ui-kit/node_modules/@washingtonpost/wpds-${component}/src/${component}.tsx`;

  const tsConfigParser = withCustomConfig("./tsconfig.json", {
    savePropValueAsString: true,
  });

  const docs = tsConfigParser.parse(filePath, {
    savePropValueAsString: true,
  });

  return docs;
};
