/** @type {import('jest').Config} */
const config = {
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
  moduleNameMapper: {"^.+\\.(css|less|scss)$": "identity-obj-proxy"},
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};

export default config;


