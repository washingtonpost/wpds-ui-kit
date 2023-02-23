// credit to radix-ui
// https://github.com/radix-ui/website/blob/main/lib/bundlephobia.ts
import fetch from "node-fetch";

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
      size = cache.get(name);

      return size;
    } else {
      const bundlephobiaResponse = await fetch(
        `https://bundlephobia.com/api/size?package=@washingtonpost/wpds-${name}@latest`
      );

      const data = await bundlephobiaResponse.json();

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
