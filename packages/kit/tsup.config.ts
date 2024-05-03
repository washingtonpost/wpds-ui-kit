import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/**/*@(ts|tsx)",
    "!src/**/*.test.(ts|tsx)",
    "!src/**/*.stories.(ts|tsx)",
  ],
  clean: true,
  format: ["cjs", "esm"],
  outDir: "dist",
  bundle: true,
  minify: true,
  sourcemap: true,
  target: "node18",
  treeshake: true,
  external: ["react", "react-dom"],
  dts: false
});
