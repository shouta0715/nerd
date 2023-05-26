import * as Types from '../../types/graphql';

import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
export type InsertLikeMutationVariables = Types.Exact<{
  object: Types.Likes_Insert_Input;
}>;


export type InsertLikeMutation = { __typename?: 'mutation_root', insert_likes_one?: { __typename?: 'likes', id: number, user_id?: string | null, comment_id: any } | null };

export type DeleteLikeMutationVariables = Types.Exact<{
  user_id: Types.Scalars['String']['input'];
  comment_id: Types.Scalars['uuid']['input'];
}>;


export type DeleteLikeMutation = { __typename?: 'mutation_root', delete_likes?: { __typename?: 'likes_mutation_response', returning: Array<{ __typename?: 'likes', id: number }> } | null };


export const InsertLikeDocument = `
    mutation InsertLike($object: likes_insert_input!) {
  insert_likes_one(
    object: $object
    on_conflict: {constraint: likes_user_id_comment_id_key}
  ) {
    id
    user_id
    comment_id
  }
}
    `;
export const useInsertLikeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<InsertLikeMutation, TError, InsertLikeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<InsertLikeMutation, TError, InsertLikeMutationVariables, TContext>(
      ['InsertLike'],
      (variables?: InsertLikeMutationVariables) => fetcher<InsertLikeMutation, InsertLikeMutationVariables>(client, InsertLikeDocument, variables, headers)(),
      options
    );
useInsertLikeMutation.fetcher = (client: GraphQLClient, variables: InsertLikeMutationVariables, headers?: RequestInit['headers']) => fetcher<InsertLikeMutation, InsertLikeMutationVariables>(client, InsertLikeDocument, variables, headers);
export const DeleteLikeDocument = `
    mutation DeleteLike($user_id: String!, $comment_id: uuid!) {
  delete_likes(where: {user_id: {_eq: $user_id}, comment_id: {_eq: $comment_id}}) {
    returning {
      id
    }
  }
}
    `;
export const useDeleteLikeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteLikeMutation, TError, DeleteLikeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteLikeMutation, TError, DeleteLikeMutationVariables, TContext>(
      ['DeleteLike'],
      (variables?: DeleteLikeMutationVariables) => fetcher<DeleteLikeMutation, DeleteLikeMutationVariables>(client, DeleteLikeDocument, variables, headers)(),
      options
    );
useDeleteLikeMutation.fetcher = (client: GraphQLClient, variables: DeleteLikeMutationVariables, headers?: RequestInit['headers']) => fetcher<DeleteLikeMutation, DeleteLikeMutationVariables>(client, DeleteLikeDocument, variables, headers);