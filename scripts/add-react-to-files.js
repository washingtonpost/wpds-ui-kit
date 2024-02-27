module.exports = function (file, { jscodeshift: j }, options) {
  // exclude test.tsx files
  if (file.path.includes("test.tsx")) {
    return file.source;
  }

  const root = j(file.source);

  // Find all JSX elements
  const jsxElements = root.find(j.JSXElement);

  console.log(jsxElements.length, file.path);

  // Check if there are any JSX elements in the file
  if (jsxElements.length === 0) {
    return file.source;
  }

  // Check if React import already exists
  const reactImport = root.find(j.ImportDeclaration, {
    source: {
      value: "react",
    },
  });

  console.log("boop", reactImport.length, file.path);

  // If React import doesn't exist, add it
  if (reactImport.length === 0) {
    const importStatement = j.importDeclaration(
      [j.importDefaultSpecifier(j.identifier("React"))],
      j.literal("react")
    );
    root.find(j.Program).get("body", 0).insertBefore(importStatement);
  } else {
    // If React import does exist, check if it's being used
    const reactImportSpecifier = reactImport.find(j.ImportDefaultSpecifier);
    if (reactImportSpecifier.length === 0) {
      // If it's not being used, add it
      reactImport
        .get("specifiers")
        .unshift(j.importDefaultSpecifier(j.identifier("React")));
    }
  }

  return root.toSource();
};

module.exports.parser = "tsx";
