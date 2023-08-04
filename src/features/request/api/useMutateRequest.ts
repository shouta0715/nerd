import { useMutation } from "@tanstack/react-query";
import { requestDocument } from "src/documents/request";
import {
  InsertRequestMutation,
  InsertRequestMutationVariables,
} from "src/gql/graphql";
import { Error } from "src/libs/error";
import { client } from "src/libs/graphqlClient";

export const useMutateRequest = () => {
  return useMutation<
    InsertRequestMutation,
    Error,
    InsertRequestMutationVariables
  >({
    mutationFn: (object) => client.request(requestDocument, object),
  });
};
