/** @type {import("jest").Config} */
module.exports = {
  "roots": [
    "./ui"
  ],
  "preset": "ts-jest",
  "testEnvironment": "./custom-env.ts",
  "globals": {
    "ts-jest": {
      "tsconfig": "tsconfig.test.json"
    }
  },
  "cacheDirectory": ".jest-cache",
  "collectCoverage": true,
  "coverageDirectory": "jest-coverage",
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    ".stories.js",
    "index.js"
  ],
  "coverageProvider": "v8",
  "coverageReporters": [
    "html",
    "text"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 75,
      "functions": 65,
      "lines": 80
    }
  },
  "setupFilesAfterEnv": [
    "./scripts/setupTests.ts"
  ],
  "testPathIgnorePatterns": [
    "/node_modules/(?!nanoid)",
    "/eslint-plugin/"
  ],
  "testMatch": [
    "**/*.test.[jt]s?(x)"
  ],
  "moduleNameMapper": {
    [`^nanoid(/(.*)|$)`]: `nanoid$1`,
    "^~/(.*)$": "<rootDir>/$1"
  }
};
