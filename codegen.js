/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const { secret, endpoint } = require("./secrets.json");

// export const overwrite = true;
const schema = {
  [endpoint]: {
    headers: {
      "x-hasura-admin-secret": secret,
    },
  },
};
const documents = "./src/graphql/**/*.ts";
const codegenConfig = {
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

module.exports = codegenConfig;
