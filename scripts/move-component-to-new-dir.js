const path = require("path");
const fs = require("fs");

// example of how to use it
// node scripts/move-component-to-new-dir.js navigation-menu

function moveComponentToNewDir(componentName) {
  const componentPath = path.resolve(__dirname, `../ui/${componentName}/src`);
  const newComponentPath = path.resolve(
    __dirname,
    `../packages/kit/${componentName}`
  );

  fs.renameSync(componentPath, newComponentPath);
  console.log(`Component ${componentName} moved to new directory`);
}

moveComponentToNewDir(process.argv[2]);
