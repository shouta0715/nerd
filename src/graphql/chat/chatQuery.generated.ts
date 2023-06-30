import * as Types from '../../types/graphql';

import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
export type GetChatsEpisodeQueryVariables = Types.Exact<{
  episode_id: Types.Scalars['uuid']['input'];
  get_limit: Types.Scalars['Int']['input'];
  _lt: Types.Scalars['Int']['input'];
  _gte: Types.Scalars['Int']['input'];
}>;


export type GetChatsEpisodeQuery = { __typename?: 'query_root', chats_by_episode_id: Array<{ __typename?: 'chats', content: string, work_id?: number | null, user_id?: string | null, comment_time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user?: { __typename?: 'users', anonymous: boolean, id: string } | null }> };

export type GetChatsWorkQueryVariables = Types.Exact<{
  work_id: Types.Scalars['Int']['input'];
  get_limit: Types.Scalars['Int']['input'];
  _lt: Types.Scalars['Int']['input'];
  _gte: Types.Scalars['Int']['input'];
}>;


export type GetChatsWorkQuery = { __typename?: 'query_root', chats_by_work_id: Array<{ __typename?: 'chats', content: string, work_id?: number | null, user_id?: string | null, comment_time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user?: { __typename?: 'users', anonymous: boolean, id: string } | null }> };

export type InsertChatMutationVariables = Types.Exact<{
  object: Types.Chats_Insert_Input;
}>;


export type InsertChatMutation = { __typename?: 'mutation_root', insert_chats_one?: { __typename?: 'chats', content: string, work_id?: number | null, user_id?: string | null, comment_time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user?: { __typename?: 'users', anonymous: boolean, id: string } | null } | null };

export type GetZeroTimeChatsQueryVariables = Types.Exact<{
  episode_id: Types.Scalars['uuid']['input'];
  limit: Types.Scalars['Int']['input'];
  cursor?: Types.InputMaybe<Types.Scalars['timestamptz']['input']>;
}>;


export type GetZeroTimeChatsQuery = { __typename?: 'query_root', chats: Array<{ __typename?: 'chats', content: string, work_id?: number | null, user_id?: string | null, comment_time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user?: { __typename?: 'users', anonymous: boolean, id: string } | null }> };


export const GetChatsEpisodeDocument = `
    query GetChatsEpisode($episode_id: uuid!, $get_limit: Int!, $_lt: Int!, $_gte: Int!) {
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
      id
    }
  }
}
    `;
export const useGetChatsEpisodeQuery = <
      TData = GetChatsEpisodeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetChatsEpisodeQueryVariables,
      options?: UseQueryOptions<GetChatsEpisodeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetChatsEpisodeQuery, TError, TData>(
      ['GetChatsEpisode', variables],
      fetcher<GetChatsEpisodeQuery, GetChatsEpisodeQueryVariables>(client, GetChatsEpisodeDocument, variables, headers),
      options
    );
useGetChatsEpisodeQuery.fetcher = (client: GraphQLClient, variables: GetChatsEpisodeQueryVariables, headers?: RequestInit['headers']) => fetcher<GetChatsEpisodeQuery, GetChatsEpisodeQueryVariables>(client, GetChatsEpisodeDocument, variables, headers);
export const GetChatsWorkDocument = `
    query GetChatsWork($work_id: Int!, $get_limit: Int!, $_lt: Int!, $_gte: Int!) {
  chats_by_work_id(
    args: {_work_id: $work_id, get_limit: $get_limit, _gte: $_gte, _lt: $_lt}
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
      id
    }
  }
}
    `;
export const useGetChatsWorkQuery = <
      TData = GetChatsWorkQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetChatsWorkQueryVariables,
      options?: UseQueryOptions<GetChatsWorkQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetChatsWorkQuery, TError, TData>(
      ['GetChatsWork', variables],
      fetcher<GetChatsWorkQuery, GetChatsWorkQueryVariables>(client, GetChatsWorkDocument, variables, headers),
      options
    );
useGetChatsWorkQuery.fetcher = (client: GraphQLClient, variables: GetChatsWorkQueryVariables, headers?: RequestInit['headers']) => fetcher<GetChatsWorkQuery, GetChatsWorkQueryVariables>(client, GetChatsWorkDocument, variables, headers);
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
export const GetZeroTimeChatsDocument = `
    query GetZeroTimeChats($episode_id: uuid!, $limit: Int!, $cursor: timestamptz) {
  chats(
    where: {episode_id: {_eq: $episode_id}, comment_time: {_eq: 0}, created_at: {_gt: $cursor}}
    order_by: {created_at: desc}
    limit: $limit
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
      id
    }
  }
}
    `;
export const useGetZeroTimeChatsQuery = <
      TData = GetZeroTimeChatsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetZeroTimeChatsQueryVariables,
      options?: UseQueryOptions<GetZeroTimeChatsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetZeroTimeChatsQuery, TError, TData>(
      ['GetZeroTimeChats', variables],
      fetcher<GetZeroTimeChatsQuery, GetZeroTimeChatsQueryVariables>(client, GetZeroTimeChatsDocument, variables, headers),
      options
    );
useGetZeroTimeChatsQuery.fetcher = (client: GraphQLClient, variables: GetZeroTimeChatsQueryVariables, headers?: RequestInit['headers']) => fetcher<GetZeroTimeChatsQuery, GetZeroTimeChatsQueryVariables>(client, GetZeroTimeChatsDocument, variables, headers);