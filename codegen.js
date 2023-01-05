import { secret } from "./secrets.json";

export const overwrite = true;
export const schema = {
  "https://anime-app-plus.hasura.app/v1/graphql": {
    headers: {
      "x-hasura-admin-secret": secret,
    },
  },
};
export const documents = "./src/graphql/**/*.ts";
export const generates = {
  "./src/generated/graphql.ts": {
    plugins: [
      "typescript",
      "typescript-operations",
      "typescript-graphql-request",
      "typescript-react-query",
    ],
    config: {
      fetcher: "graphql-request",
    },
  },
};
export const exposeQueryKeys = true;
