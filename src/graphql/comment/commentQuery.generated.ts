import * as Types from '../../types/graphql';

import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
export type InsertChatCommentMutationVariables = Types.Exact<{
  object: Types.Chat_Comments_Insert_Input;
}>;


export type InsertChatCommentMutation = { __typename?: 'mutation_root', insert_chat_comments_one?: { __typename?: 'chat_comments', content: string, work_id?: number | null, user_id: string, comment_time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user: { __typename?: 'users', anonymous: boolean, user_name: string, photo_url?: string | null, id: string } } | null };

export type GetChatCommentsQueryVariables = Types.Exact<{
  episode_id: Types.Scalars['uuid'];
  get_limit: Types.Scalars['Int'];
  _lt: Types.Scalars['Int'];
  _gte: Types.Scalars['Int'];
}>;


export type GetChatCommentsQuery = { __typename?: 'query_root', chat_comments_by_episode_id: Array<{ __typename?: 'chat_comments', content: string, work_id?: number | null, user_id: string, comment_time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user: { __typename?: 'users', anonymous: boolean, user_name: string, id: string } }> };


export const InsertChatCommentDocument = `
    mutation InsertChatComment($object: chat_comments_insert_input!) {
  insert_chat_comments_one(object: $object) {
    content
    work_id
    user_id
    comment_time
    id
    episode_id
    created_at
    commenter_name
    user {
      anonymous
      user_name
      photo_url
      id
    }
  }
}
    `;
export const useInsertChatCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<InsertChatCommentMutation, TError, InsertChatCommentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<InsertChatCommentMutation, TError, InsertChatCommentMutationVariables, TContext>(
      ['InsertChatComment'],
      (variables?: InsertChatCommentMutationVariables) => fetcher<InsertChatCommentMutation, InsertChatCommentMutationVariables>(client, InsertChatCommentDocument, variables, headers)(),
      options
    );
useInsertChatCommentMutation.fetcher = (client: GraphQLClient, variables: InsertChatCommentMutationVariables, headers?: RequestInit['headers']) => fetcher<InsertChatCommentMutation, InsertChatCommentMutationVariables>(client, InsertChatCommentDocument, variables, headers);
export const GetChatCommentsDocument = `
    query GetChatComments($episode_id: uuid!, $get_limit: Int!, $_lt: Int!, $_gte: Int!) {
  chat_comments_by_episode_id(
    args: {_episode_id: $episode_id, get_limit: $get_limit, _gte: $_gte, _lt: $_lt}
    order_by: {comment_time: asc}
  ) {
    content
    work_id
    user_id
    comment_time
    id
    episode_id
    created_at
    commenter_name
    user {
      anonymous
      user_name
      id
    }
  }
}
    `;
export const useGetChatCommentsQuery = <
      TData = GetChatCommentsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetChatCommentsQueryVariables,
      options?: UseQueryOptions<GetChatCommentsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetChatCommentsQuery, TError, TData>(
      ['GetChatComments', variables],
      fetcher<GetChatCommentsQuery, GetChatCommentsQueryVariables>(client, GetChatCommentsDocument, variables, headers),
      options
    );
useGetChatCommentsQuery.fetcher = (client: GraphQLClient, variables: GetChatCommentsQueryVariables, headers?: RequestInit['headers']) => fetcher<GetChatCommentsQuery, GetChatCommentsQueryVariables>(client, GetChatCommentsDocument, variables, headers);