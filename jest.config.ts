const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const customJestConfig = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["<rootDir>/e2e/","<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/src/graphql/","<rootDir>/src/libs/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleNameMapper: {
    "^.+\\.(svg)$": "<rootDir>/__mocks__/svg.tsx", 
  },
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "__reports__",
        filename: "jest.html",
      },
    ],
  ],
};

export default createJestConfig(customJestConfig);
