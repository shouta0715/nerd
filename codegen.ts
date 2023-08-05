import { CodegenConfig } from "@graphql-codegen/cli";

import { secret, endpoint } from "./secrets.json";

// export const overwrite = true;
const schema = {
  [endpoint]: {
    headers: {
      "x-hasura-admin-secret": secret,
    },
  },
};

const config: CodegenConfig = {
  schema,
  documents: ["src/schema/**/*.ts", "!src/gql/**/*"],
  generates: {
    "./src/gql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },

  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;
