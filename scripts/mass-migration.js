const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

// take list of folders from ./ui/[componentName]
// use that list to process this make cmd `v2-migrate-component navigation-menu` iteratively over the list of folders

function getDirectories() {
  return fs
    .readdirSync(path.resolve(__dirname, "../ui"), { withFileTypes: true })
    .filter((dirent) => {
      // exclude "eslint-plugin", "tokens", "tailwind-theme", "kit"
      if (
        dirent.name === "eslint-plugin" ||
        dirent.name === "tokens" ||
        dirent.name === "tailwind-theme" ||
        dirent.name === "kit"
      ) {
        return false;
      }

      // filter out files already moved to packages/kit
      return dirent.isDirectory() &&
        !fs.existsSync(
          path.resolve(__dirname, `../packages/kit/src/${dirent.name}`)
        )
        ? true
        : false;
    })
    .map((dirent) => dirent.name);
}

const componentNames = getDirectories();

// run make cmd `v2-migrate-component navigation-menu` iteratively over the list of folders
componentNames.forEach((componentName) => {
  console.log(`Migrating ${componentName}...`);
  const makeCmd = `make v2-migrate-component componentName=${componentName}`;
  console.log(`Running: ${makeCmd}`);
  execSync(makeCmd, { stdio: "inherit" });
});
