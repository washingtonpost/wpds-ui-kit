// credit to radix-ui
// https://github.com/radix-ui/website/blob/main/lib/bundlephobia.ts
const { getPackageStats } = require("package-build-stats");

export function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

const cache = new Map();

export async function getPackageData(name) {
  let size = null;
  try {
    if (cache.has(name)) {
      console.log("cache hit: getPackageData");
      size = cache.get(name);

      return size;
    } else {
      const data = await getPackageStats(`@washingtonpost/wpds-${name}@latest`);

      if (data.error) {
        throw new Error(data.error);
      }

      size = data?.size && formatBytes(data?.size);

      // add to cache
      cache.set(name, size);

      return size;
    }
  } catch (e) {
    // no component found
    console.log(`Error in getPackageData for ${name} component`);
    return size;
  }
}
