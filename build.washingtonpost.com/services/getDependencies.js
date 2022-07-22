import packageJson from "./../package.json";
import packageJsonLock from "./../package-lock.json";

/**
 * Get deps for /components/Markdown/Components/Sandbox.js
 * @returns {object} dependencies
 */
export const getDependencies = async () => {
  return {
    "@washingtonpost/wpds-assets":
      packageJson.dependencies["@washingtonpost/wpds-assets"],
    "@washingtonpost/wpds-ui-kit":
      packageJson.dependencies["@washingtonpost/wpds-ui-kit"],
    ...packageJsonLock.packages["node_modules/@washingtonpost/wpds-ui-kit"]
      .dependencies,
    ...packageJsonLock.packages["node_modules/@washingtonpost/wpds-theme"]
      .peerDependencies,
    "@radix-ui/react-checkbox":
      packageJson.dependencies["@radix-ui/react-checkbox"],
    "@stitches/react": packageJson.dependencies["@stitches/react"],
  };
};
