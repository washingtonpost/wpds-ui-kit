import { defineConfig } from "tsup";

export default defineConfig({
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
  minify: true,
  sourcemap: true,
  splitting: true,
  target: "esnext",
  treeshake: true,
});
