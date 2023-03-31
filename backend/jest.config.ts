import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  extensionsToTreatAsEsm: [".ts"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json",
      useESM: true,
      isolatedModules: true,
    },
  },
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  transformIgnorePatterns: [
    "./node_modules/",
    "./dist/",
    "./files/",
    "./public/",
  ],
};
export default config;
