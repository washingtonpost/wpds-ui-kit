const path = require("path");
const fs = require("fs");

// example of how to use it
// node scripts/move-component-to-new-dir.js navigation-menu

function moveComponentToNewDir(componentName) {
  const componentPath = path.resolve(__dirname, `../ui/${componentName}/src`);
  const newComponentPath = path.resolve(
    __dirname,
    `../packages/kit/src/${componentName}`
  );

  fs.renameSync(componentPath, newComponentPath);
  console.log(`Component ${componentName} moved to new directory`);

  // now add the new component directory to the index.ts file
  // like this: export * from "./navigation-menu";
  const indexPath = path.resolve(__dirname, `../packages/kit/src/index.ts`);
  const indexContent = fs.readFileSync(indexPath, "utf8");
  const newContent = `export * from "./${componentName}";\n${indexContent}`;
  fs.writeFileSync(indexPath, newContent);

  console.log(`Component ${componentName} added to index.ts`);

  // take deps from the old package.json and add them to the new package.json
  const packageJsonPath = path.resolve(
    __dirname,
    `../ui/${componentName}/package.json`
  );
  const newPackageJsonPath = path.resolve(
    __dirname,
    `../packages/kit/package.json`
  );
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  const newPackageJson = JSON.parse(
    fs.readFileSync(newPackageJsonPath, "utf8")
  );
  newPackageJson.dependencies = {
    ...newPackageJson.dependencies,
    ...packageJson.dependencies,
  };

  fs.writeFileSync(newPackageJsonPath, JSON.stringify(newPackageJson, null, 2));
  console.log(`Dependencies added to package.json`);
}

moveComponentToNewDir(process.argv[2]);
