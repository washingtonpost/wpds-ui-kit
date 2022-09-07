const docgen = require("react-docgen-typescript");

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

  // Parse a file for docgen info

  try {
    const componentsData = docgen.parse(
      `../ui/${component}/src/index.ts`,
      options
    );

    const generatedData = componentsData.map((component) => {
      const generatedProps = Object.entries(component?.props)
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
      return {
        displayName: component.displayName,
        description: component.description,
        props: generatedProps,
      };
    });

    return generatedData;
  } catch (error) {
    // no component found
    console.log(`No ${component} found inside getPropsTable`);
    return [];
  }
};
