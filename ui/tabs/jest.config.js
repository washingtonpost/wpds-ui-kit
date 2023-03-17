/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts", "<rootDir>/setup-mock.js"],
  coverageReporters: ["text"],
  resetMocks: false,
};
