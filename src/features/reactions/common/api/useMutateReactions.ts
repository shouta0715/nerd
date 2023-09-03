import { useMutation } from "@tanstack/react-query";
import { insertReactionsDocument } from "src/documents/reactions";
import {
  InsertReactionsMutation,
  InsertReactionsMutationVariables,
} from "src/gql/graphql";
import { client } from "src/libs/client/graphql";
import { Error } from "src/libs/error";

export const useMutateReactions = () => {
  return useMutation<
    InsertReactionsMutation,
    Error,
    InsertReactionsMutationVariables
  >({
    mutationFn: (object) => client.request(insertReactionsDocument, object),
  });
};
