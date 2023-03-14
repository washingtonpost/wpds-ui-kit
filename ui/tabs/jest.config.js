/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "custom-env.ts",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  coverageReporters: ["text"],
};
