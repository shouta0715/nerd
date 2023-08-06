import { CodegenConfig } from "@graphql-codegen/cli";

// export const overwrite = true;
const schema = {
  [process.env.NEXT_PUBLIC_ENDPOINT as string]: {
    headers: {
      "x-hasura-admin-secret": process.env.ADMIN_SECRET as string,
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
