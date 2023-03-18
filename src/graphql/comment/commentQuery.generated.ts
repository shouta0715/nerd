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
export type InsertChatMutationVariables = Types.Exact<{
  object: Types.Chats_Insert_Input;
}>;


export type InsertChatMutation = { __typename?: 'mutation_root', insert_chats_one?: { __typename?: 'chats', content: string, work_id?: number | null, user_id: string, comment_time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user: { __typename?: 'users', anonymous: boolean, user_name: string, photo_url?: string | null, id: string } } | null };

export type GetChatsQueryVariables = Types.Exact<{
  episode_id: Types.Scalars['uuid'];
  get_limit: Types.Scalars['Int'];
  _lt: Types.Scalars['Int'];
  _gte: Types.Scalars['Int'];
}>;


export type GetChatsQuery = { __typename?: 'query_root', chats_by_episode_id: Array<{ __typename?: 'chats', content: string, work_id?: number | null, user_id: string, comment_time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user: { __typename?: 'users', anonymous: boolean, user_name: string, id: string } }> };

export type GetCommentsQueryVariables = Types.Exact<{
  episode_id: Types.Scalars['uuid'];
  cursor?: Types.InputMaybe<Types.Scalars['timestamptz']>;
  limit: Types.Scalars['Int'];
}>;


export type GetCommentsQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', content: string, work_id?: number | null, user_id: string, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_count?: any | null, user: { __typename?: 'users', anonymous: boolean, user_name: string, id: string } }> };

export type GetRepliesQueryVariables = Types.Exact<{
  original_comment_id: Types.Scalars['uuid'];
  cursor_reply_to?: Types.InputMaybe<Types.Scalars['uuid']>;
  cursor_created_at?: Types.InputMaybe<Types.Scalars['timestamptz']>;
  reply_limit: Types.Scalars['Int'];
}>;


export type GetRepliesQuery = { __typename?: 'query_root', replies: Array<{ __typename?: 'comments', content: string, work_id?: number | null, user_id: string, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_to?: any | null, replied_to_commenter_name?: string | null, user: { __typename?: 'users', anonymous: boolean, user_name: string, id: string } }> };


export const InsertChatDocument = `
    mutation InsertChat($object: chats_insert_input!) {
  insert_chats_one(object: $object) {
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
export const useInsertChatMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<InsertChatMutation, TError, InsertChatMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<InsertChatMutation, TError, InsertChatMutationVariables, TContext>(
      ['InsertChat'],
      (variables?: InsertChatMutationVariables) => fetcher<InsertChatMutation, InsertChatMutationVariables>(client, InsertChatDocument, variables, headers)(),
      options
    );
useInsertChatMutation.fetcher = (client: GraphQLClient, variables: InsertChatMutationVariables, headers?: RequestInit['headers']) => fetcher<InsertChatMutation, InsertChatMutationVariables>(client, InsertChatDocument, variables, headers);
export const GetChatsDocument = `
    query GetChats($episode_id: uuid!, $get_limit: Int!, $_lt: Int!, $_gte: Int!) {
  chats_by_episode_id(
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
export const useGetChatsQuery = <
      TData = GetChatsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetChatsQueryVariables,
      options?: UseQueryOptions<GetChatsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetChatsQuery, TError, TData>(
      ['GetChats', variables],
      fetcher<GetChatsQuery, GetChatsQueryVariables>(client, GetChatsDocument, variables, headers),
      options
    );
useGetChatsQuery.fetcher = (client: GraphQLClient, variables: GetChatsQueryVariables, headers?: RequestInit['headers']) => fetcher<GetChatsQuery, GetChatsQueryVariables>(client, GetChatsDocument, variables, headers);
export const GetCommentsDocument = `
    query GetComments($episode_id: uuid!, $cursor: timestamptz, $limit: Int!) {
  comments(
    where: {episode_id: {_eq: $episode_id}, created_at: {_lt: $cursor}, reply_to: {_is_null: true}}
    order_by: {created_at: desc}
    limit: $limit
  ) {
    content
    work_id
    user_id
    id
    episode_id
    created_at
    commenter_name
    user {
      anonymous
      user_name
      id
    }
    reply_count
  }
}
    `;
export const useGetCommentsQuery = <
      TData = GetCommentsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCommentsQueryVariables,
      options?: UseQueryOptions<GetCommentsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCommentsQuery, TError, TData>(
      ['GetComments', variables],
      fetcher<GetCommentsQuery, GetCommentsQueryVariables>(client, GetCommentsDocument, variables, headers),
      options
    );
useGetCommentsQuery.fetcher = (client: GraphQLClient, variables: GetCommentsQueryVariables, headers?: RequestInit['headers']) => fetcher<GetCommentsQuery, GetCommentsQueryVariables>(client, GetCommentsDocument, variables, headers);
export const GetRepliesDocument = `
    query GetReplies($original_comment_id: uuid!, $cursor_reply_to: uuid, $cursor_created_at: timestamptz, $reply_limit: Int!) {
  replies(
    args: {original_comment_id: $original_comment_id, cursor_reply_to: $cursor_reply_to, cursor_created_at: $cursor_created_at, reply_limit: $reply_limit}
  ) {
    content
    work_id
    user_id
    id
    episode_id
    created_at
    commenter_name
    reply_to
    replied_to_commenter_name
    user {
      anonymous
      user_name
      id
    }
  }
}
    `;
export const useGetRepliesQuery = <
      TData = GetRepliesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetRepliesQueryVariables,
      options?: UseQueryOptions<GetRepliesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetRepliesQuery, TError, TData>(
      ['GetReplies', variables],
      fetcher<GetRepliesQuery, GetRepliesQueryVariables>(client, GetRepliesDocument, variables, headers),
      options
    );
useGetRepliesQuery.fetcher = (client: GraphQLClient, variables: GetRepliesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetRepliesQuery, GetRepliesQueryVariables>(client, GetRepliesDocument, variables, headers);