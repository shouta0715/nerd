import { useInsertRequestMutation } from "src/graphql/request/requestQuery.generated";
import { client } from "src/libs/graphqlClient";

export const useMutateRequest = () => {
  return useInsertRequestMutation(client);
};
