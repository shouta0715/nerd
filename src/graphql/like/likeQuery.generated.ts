import * as Types from "../../types/graphql";

import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";

function fetcher<TData, TVariables extends { [key: string]: any }>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  requestHeaders?: RequestInit["headers"]
) {
  return async (): Promise<TData> =>
    client.request({
      document: query,
      variables,
      requestHeaders,
    });
}
export type InsertEpisodeLikesMutationVariables = Types.Exact<{
  object: Types.Episode_Likes_Insert_Input;
}>;

export type InsertEpisodeLikesMutation = {
  __typename?: "mutation_root";
  insert_episode_likes_one?: {
    __typename?: "episode_likes";
    user_id: string;
    episode_id: any;
  } | null;
};

export type GetEpisodeLikesQueryVariables = Types.Exact<{
  episodeIds: Array<Types.Scalars["uuid"]> | Types.Scalars["uuid"];
}>;

export type GetEpisodeLikesQuery = {
  __typename?: "query_root";
  episode_likes: Array<{
    __typename?: "episode_likes";
    episode_id: any;
    user_id: string;
  }>;
};

export type DeleteEpisodeLikesMutationVariables = Types.Exact<{
  episodeId: Types.Scalars["uuid"];
  userId: Types.Scalars["String"];
}>;

export type DeleteEpisodeLikesMutation = {
  __typename?: "mutation_root";
  delete_episode_likes_by_pk?: {
    __typename?: "episode_likes";
    user_id: string;
    episode_id: any;
  } | null;
};

export const InsertEpisodeLikesDocument = `
    mutation InsertEpisodeLikes($object: episode_likes_insert_input!) {
  insert_episode_likes_one(object: $object) {
    user_id
    episode_id
  }
}
    `;
export const useInsertEpisodeLikesMutation = <
  TError = unknown,
  TContext = unknown
>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    InsertEpisodeLikesMutation,
    TError,
    InsertEpisodeLikesMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<
    InsertEpisodeLikesMutation,
    TError,
    InsertEpisodeLikesMutationVariables,
    TContext
  >(
    ["InsertEpisodeLikes"],
    (variables?: InsertEpisodeLikesMutationVariables) =>
      fetcher<InsertEpisodeLikesMutation, InsertEpisodeLikesMutationVariables>(
        client,
        InsertEpisodeLikesDocument,
        variables,
        headers
      )(),
    options
  );
useInsertEpisodeLikesMutation.fetcher = (
  client: GraphQLClient,
  variables: InsertEpisodeLikesMutationVariables,
  headers?: RequestInit["headers"]
) =>
  fetcher<InsertEpisodeLikesMutation, InsertEpisodeLikesMutationVariables>(
    client,
    InsertEpisodeLikesDocument,
    variables,
    headers
  );
export const GetEpisodeLikesDocument = `
    query GetEpisodeLikes($episodeIds: [uuid!]!) {
  episode_likes(where: {episode_id: {_in: $episodeIds}}) {
    episode_id
    user_id
  }
}
    `;
export const useGetEpisodeLikesQuery = <
  TData = GetEpisodeLikesQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables: GetEpisodeLikesQueryVariables,
  options?: UseQueryOptions<GetEpisodeLikesQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetEpisodeLikesQuery, TError, TData>(
    ["GetEpisodeLikes", variables],
    fetcher<GetEpisodeLikesQuery, GetEpisodeLikesQueryVariables>(
      client,
      GetEpisodeLikesDocument,
      variables,
      headers
    ),
    options
  );

useGetEpisodeLikesQuery.getKey = (variables: GetEpisodeLikesQueryVariables) => [
  "GetEpisodeLikes",
  variables,
];
useGetEpisodeLikesQuery.fetcher = (
  client: GraphQLClient,
  variables: GetEpisodeLikesQueryVariables,
  headers?: RequestInit["headers"]
) =>
  fetcher<GetEpisodeLikesQuery, GetEpisodeLikesQueryVariables>(
    client,
    GetEpisodeLikesDocument,
    variables,
    headers
  );
export const DeleteEpisodeLikesDocument = `
    mutation DeleteEpisodeLikes($episodeId: uuid!, $userId: String!) {
  delete_episode_likes_by_pk(episode_id: $episodeId, user_id: $userId) {
    user_id
    episode_id
  }
}
    `;
export const useDeleteEpisodeLikesMutation = <
  TError = unknown,
  TContext = unknown
>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    DeleteEpisodeLikesMutation,
    TError,
    DeleteEpisodeLikesMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<
    DeleteEpisodeLikesMutation,
    TError,
    DeleteEpisodeLikesMutationVariables,
    TContext
  >(
    ["DeleteEpisodeLikes"],
    (variables?: DeleteEpisodeLikesMutationVariables) =>
      fetcher<DeleteEpisodeLikesMutation, DeleteEpisodeLikesMutationVariables>(
        client,
        DeleteEpisodeLikesDocument,
        variables,
        headers
      )(),
    options
  );
useDeleteEpisodeLikesMutation.fetcher = (
  client: GraphQLClient,
  variables: DeleteEpisodeLikesMutationVariables,
  headers?: RequestInit["headers"]
) =>
  fetcher<DeleteEpisodeLikesMutation, DeleteEpisodeLikesMutationVariables>(
    client,
    DeleteEpisodeLikesDocument,
    variables,
    headers
  );
