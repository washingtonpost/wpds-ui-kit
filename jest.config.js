
/** @type {import("jest").Config} */
module.exports = {
  roots: [
    "./ui"
  ],
  // preset: "ts-jest",
  testEnvironment: "./custom-env.ts",
  cacheDirectory: ".jest-cache",
  collectCoverage: true,
  coverageDirectory: "jest-coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    ".stories.js",
    "index.js"
  ],
  coverageProvider: "v8",
  coverageReporters: [
    "html",
    "text"
  ],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 65,
      lines: 80
    }
  },
  setupFilesAfterEnv: [
    "./scripts/setupTests.ts"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/eslint-plugin/"
  ],
  // transform: {
  //   "^.+\\.(j|t)sx?$": "babel-jest"
  // },
  transformIgnorePatterns: [`/node_modules/(?!(nanoid))`],
  testMatch: [
    "**/*.test.[jt]s?(x)"
  ],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/$1"
  }
};
