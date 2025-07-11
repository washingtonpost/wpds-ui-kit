import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig((options) => {
  const isProduction = !options.watch;

  return {
    entry: [
      "src/**/*@(ts|tsx)",
      "!src/**/*.test.(ts|tsx)",
      "!src/**/*.stories.(ts|tsx)",
    ],
    legacyOutput: true,
    clean: true,
    format: ["cjs", "esm"],
    outDir: "dist",
    bundle: true,
    minify: isProduction,
    sourcemap: !isProduction,
    splitting: true,
    target: "esnext",
    treeshake: true,
    external: [
      "react",
      "react-dom",
      "@vanilla-extract/css",
      "@vanilla-extract/recipes",
      "@vanilla-extract/sprinkles",
    ],
    esbuildPlugins: [
      vanillaExtractPlugin({
        identifiers: isProduction ? "short" : "debug",
      }),
    ],
  };
});
