import docgen from "react-docgen-typescript";

const cache = new Map();

export const getPropsTable = async (component = "icon") => {
  const options = {
    shouldExtractLiteralValuesFromEnum: true,
    savePropValueAsString: true,
    shouldExtractValuesFromUnion: true,
    propFilter: (prop) => {
      if (prop.declarations !== undefined && prop.declarations.length > 0) {
        const hasPropAdditionalDescription = prop.declarations.find(
          (declaration) => {
            return !declaration.fileName.includes("@types/react");
          }
        );

        return Boolean(hasPropAdditionalDescription);
      }

      return true;
    },
  };

  let propsArray = [];

  if (cache.has(component)) {
    console.log("cache hit: getPropsTable");

    propsArray = cache.get(component);

    return propsArray;
  } else {
    // Parse a file for docgen info
    try {
      const [{ props }] = docgen.parse(
        `node_modules/@washingtonpost/wpds-${component}/src/index.ts`,
        options
      );

      // Get the component's docgen info
      // object of objects into an array
      propsArray = Object.entries(props)
        .map(([key, value]) => {
          let rawType =
            value.type.name === "enum"
              ? value.type.raw.replace(/"/g, "").split("| ({")[0]
              : "";

          return {
            name: key,
            type: value.type.name,
            rawType,
            required: `${value.required}`,
            description: value.description,
            defaultValue:
              value.defaultValue === null
                ? "----"
                : JSON.stringify(value.defaultValue, null, 2)
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/({)|(})|(:)/g, "")
                    .replace(/(value)/g, ""),
          };
        })
        .filter((prop) => {
          return prop.name !== "css";
        })
        .filter((prop) => {
          return prop.name !== "as";
        });

      // add to cache
      cache.set(component, propsArray);
      return propsArray;
    } catch (error) {
      // no component found
      console.log(`No ${component} found inside getPropsTable`);
      return [];
    }
  }
};
