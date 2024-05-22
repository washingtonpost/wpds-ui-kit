const docgen = require("react-docgen-typescript");
const { JsxEmit } = require("typescript");

export const getPropsTable = async (component = "icon") => {
  const options = {
    propFilter: (prop) => {
      if (prop.declarations !== undefined && prop.declarations.length > 0) {
        const hasPropAdditionalDescription = prop.declarations.find(
          (declaration) => {
            return !declaration.fileName.includes("@types/react");
          },
        );

        return Boolean(hasPropAdditionalDescription);
      }

      return true;
    },
  };

  const customParser = docgen.withCompilerOptions(
    {
      esModuleInterop: true,
      jsx: JsxEmit.Preserve,
    },
    options,
  );

  // Parse a file for docgen info

  try {
    const componentsData = customParser.parse(
      `../packages/kit/src/${component}/index.ts`,
      options,
    );

    const generatedData = componentsData.map((component) => {
      const generatedProps = Object.entries(component?.props).map(
        ([key, value]) => {
          let rawType =
            value.type.name === "enum"
              ? value.type.raw.replace(/"/g, "").split("| ({")[0]
              : "";

          let description = value.description || "";
          if (key === "as") {
            description =
              "WPDS provides an as prop for changing which tag a component outputs.";
          }

          if (key === "css") {
            description =
              "WPDS provides a css prop for overriding styles easily. It’s like the style attribute, but it supports tokens, media queries, nesting and token-aware values. All WPDS Components include a css prop. Use it to pass in overrides.";
          }

          return {
            name: key,
            type: value.type.name,
            rawType,
            required: `${value.required}`,
            description,
            defaultValue:
              value.defaultValue === null
                ? "----"
                : JSON.stringify(value.defaultValue, null, 2)
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/({)|(})|(:)/g, "")
                    .replace(/(value)/g, ""),
          };
        },
      );
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
