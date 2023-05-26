import { CodegenConfig } from "@graphql-codegen/cli";
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
import { secret, endpoint } from "./secrets.json";

// export const overwrite = true;
const schema = {
  [endpoint]: {
    headers: {
      "x-hasura-admin-secret": secret,
    },
  },
};
const documents = "./src/graphql/**/*.ts";
const codegenConfig: CodegenConfig = {
  schema,
  documents,
  generates: {
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
        withHooks: true,
        fetcher: "graphql-request",
        exposeFetcher: true,
      },
    },
  },
};

export default codegenConfig;
