// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = function (file, { jscodeshift: j }, options) {
  const source = j(file.source);

  const wpdsImports = source
    .find(j.ImportDeclaration) // Find all nodes that match a type of `ImportDeclaration`
    .filter(
      (path) =>
        path.node.source.value.includes("@washingtonpost/wpds") &&
        path.node.source.value !== "@washingtonpost/wpds-assets"
    ); // Filter imports by source equal to the target ie "react"

  wpdsImports.forEach(
    (
      wpdsImport // Iterate over react imports
    ) => {
      console.log(j.importDeclaration);
      return (
        // Replace the existing node with a new one
        j(wpdsImport).replaceWith(
          // Build a new import declaration node based on the existing one
          j.importDeclaration(
            wpdsImport.node.specifiers, // copy over the existing import specificers
            j.stringLiteral(
              `../${wpdsImport.node.source.value.substring(
                wpdsImport.node.source.value.indexOf("wpds-") + 5
              )}`
            ), // Replace the source with our new source
            wpdsImport.node.importKind // ensure "type" imports are preserved
          )
        )
      );
    }
  );

  return source.toSource();
};

module.exports.parser = "tsx";
