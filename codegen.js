/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
import { secret } from "./secrets.json";

// export const overwrite = true;
export const schema = {
  "https://anime-app-plus.hasura.app/v1/graphql": {
    headers: {
      "x-hasura-admin-secret": secret,
    },
  },
};
export const documents = "./src/graphql/**/*.ts";
export const generates = {
  "src/types/graphql.ts": {
    plugins: ["typescript"],
  },
  "src/": {
    preset: "near-operation-file",
    presetConfig: {
      baseTypesPath: "types/graphql.ts",
    },
    plugins: ["typescript-operations", "typescript-react-query"],
    config: {
      fetcher: "graphql-request",
      exposeFetcher: true,
    },
  },
};
