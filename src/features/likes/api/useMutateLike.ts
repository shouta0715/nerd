import { useMutation } from "@tanstack/react-query";
import { deleteLikes, insertLikes } from "src/documents/likes";
import {
  DeleteLikeMutation,
  DeleteLikeMutationVariables,
  InsertLikeMutation,
  InsertLikeMutationVariables,
} from "src/gql/graphql";
import { Error } from "src/libs/error";
import { client } from "src/libs/graphqlClient";

export const useMutateLike = () => {
  const insertLike = useMutation<
    InsertLikeMutation,
    Error,
    InsertLikeMutationVariables
  >({
    mutationFn: (object) => client.request(insertLikes, object),
  });
  const deleteLike = useMutation<
    DeleteLikeMutation,
    Error,
    DeleteLikeMutationVariables
  >({
    mutationFn: (object) => client.request(deleteLikes, object),
  });

  return {
    insertLike,
    deleteLike,
    isLoading: insertLike.isPending || deleteLike.isPending,
  };
};
