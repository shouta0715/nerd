import { useMutation } from "@tanstack/react-query";
import { requestInsertDocument } from "src/documents/request";
import {
  InsertRequestMutation,
  InsertRequestMutationVariables,
} from "src/gql/graphql";
import { client } from "src/libs/client/graphql";
import { Error } from "src/libs/error";

export const useMutateRequest = () => {
  return useMutation<
    InsertRequestMutation,
    Error,
    InsertRequestMutationVariables
  >({
    mutationFn: (object) => client.request(requestInsertDocument, object),
  });
};
