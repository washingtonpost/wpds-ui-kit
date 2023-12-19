const { declare } = require("@babel/helper-plugin-utils");
const { types: t } = require("@babel/core");
const { stringify } = require("@stitches/stringify");
const fs = require("fs");

const appendHashtoClassName = (className) => {
  const hash = // implement MurmurHash alphanumeric hash
    Math.random().toString(36).substring(2, 6) +
    Math.random().toString(36).substring(2, 6);

  return `${className}-${hash}`;
};

module.exports = declare((api) => {
  api.assertVersion(7);

  return {
    visitor: {
      Program: {
        enter(path, state) {
          path.traverse({
            CallExpression(path) {
              let stylesheet = ``;
              // styled function call
              if (
                t.isIdentifier(path.node.callee) &&
                path.node.callee.name === "styled"
              ) {
                const args = path.node.arguments;
                const [stringLiteral, objectPattern] = args;
                const inlineStyles = {};
                const variantProps = [];
                // deep merge variantPropsPush so that variants options are merged together
                // so size can have large and small in the same object as properties
                const variantPropsPush = (prop) => {
                  const existingProp = variantProps.find(
                    (p) => p.key.name === prop.key.name
                  );
                  if (existingProp) {
                    existingProp.value.properties.push(
                      ...prop.value.properties
                    );
                  } else {
                    variantProps.push(prop);
                  }
                };
                objectPattern.properties.forEach((prop) => {
                  if (prop.key.name === "variants") {
                    // each variant is an element and each variant has a modifier
                    // in the BEM css naming convention
                    // e.g. button--primary
                    // e.g. size--small
                    const variants = prop.value.properties;
                    // each variant needs to be collected into its own CSS class
                    // e.g. .button--primary { ... }
                    // e.g. .size--small { ... }
                    const variantClasses = variants.map((variant) => {
                      const variantName = variant.key.name;
                      const variantModifiers = variant.value.properties;
                      const variantModifierClasses = variantModifiers.map(
                        (modifier) => {
                          const elementName = modifier.key.name;
                          // iterate over the properties and log raw values
                          const inlineStyles = {};
                          modifier.value.properties.forEach((prop) => {
                            inlineStyles[prop.key.name] = prop.value.value;
                          });
                          // stringify inline styles
                          const inlineStylesString = stringify(inlineStyles);
                          // create a class name to reference these styles
                          // take the function name and append a random string
                          const className = appendHashtoClassName(
                            `wpds-${stringLiteral.value}-${elementName}`
                          );

                          variantPropsPush(
                            t.objectProperty(
                              t.identifier(variantName),
                              t.objectExpression([
                                t.objectProperty(
                                  t.identifier(elementName),
                                  t.stringLiteral(className)
                                ),
                              ])
                            )
                          );

                          // write to a stylesheet
                          stylesheet += `.${className} { ${inlineStylesString} }`;
                        }
                      );
                      return variantModifierClasses.join("");
                    });

                    // add variant classes to stylesheet
                    stylesheet += variantClasses.join("");
                  } else {
                    // add property to inline styles
                    inlineStyles[prop.key.name] = prop.value.value;
                  }
                });

                // any calls to the variant props need to be replaced with the class name
                // e.g. <Button primary> -> <Button className="button--primary">

                // stringify inline styles
                const inlineStylesString = stringify(inlineStyles);
                // create a class name to reference these styles
                // take the function name and append a random string
                const className = appendHashtoClassName(
                  `wpds-${stringLiteral.value}`
                );

                // write to a stylesheet
                stylesheet += `.${className} { ${inlineStylesString} }`;
                // write stylesheet to file
                // print location of js file
                console.log(state.file.opts.filename);
                // create a directory for the css files in the same location as the js file
                // take file name off this string and create a dist directory
                const dir = state.file.opts.filename
                  .split("/")
                  .slice(0, -1)
                  .join("/");
                if (!fs.existsSync(`${dir}/dist`)) {
                  fs.mkdirSync(`${dir}/dist`);
                }
                // write the stylesheet to the dist directory
                fs.writeFileSync(
                  `${dir}/dist/${state.file.opts.filename
                    .split("/")
                    .pop()}.css`,
                  stylesheet
                );
                // add imported stylesheet to the top of the file
                const cssFileName = state.file.opts.filename.split("/").pop();
                path
                  .findParent((path) => path.isProgram())
                  .unshiftContainer(
                    "body",
                    t.importDeclaration(
                      [t.importDefaultSpecifier(t.identifier("css"))],
                      t.stringLiteral(
                        // take the file name and append a random string
                        `./dist/${cssFileName}.css`
                      )
                    )
                  );

                // replace second argument/object pattern with an object of props with the class name
                path.node.arguments[1] = t.objectExpression([
                  t.objectProperty(
                    t.identifier("base"),
                    t.stringLiteral(className)
                  ),
                  // add variant props so that their values are the class names so that they can be used in the stylesheet
                  // deep merge so that variants options are merged together
                  // so size can have large and small in the same object as properties
                  // add to variants object
                  t.objectProperty(
                    t.identifier("variants"),
                    t.objectExpression(variantProps)
                  ),
                ]);
              }
            },

            // if we have a css prop log it
            // the css prop will be a runtime overide of the styles
            // using a <style> element
            JSXOpeningElement(path) {
              if (
                path.node.attributes.some(
                  (attr) =>
                    t.isJSXAttribute(attr) &&
                    t.isJSXIdentifier(attr.name) &&
                    attr.name.name === "css"
                )
              ) {
                // get the css prop
                const cssProp = path.node.attributes.find(
                  (attr) =>
                    t.isJSXAttribute(attr) &&
                    t.isJSXIdentifier(attr.name) &&
                    attr.name.name === "css"
                );
                // get the value of the css prop
                const cssPropValue = cssProp.value.expression.value;
                // log the value of the css prop
                console.log(cssPropValue);
              }
            },
          });
        },
      },
    },
  };
});
