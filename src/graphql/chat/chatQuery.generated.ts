import * as Types from '../../types/graphql';

import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
export type GetChatsEpisodeQueryVariables = Types.Exact<{
  episode_id: Types.Scalars['uuid'];
  get_limit: Types.Scalars['Int'];
  _lt: Types.Scalars['Int'];
  _gte: Types.Scalars['Int'];
}>;


export type GetChatsEpisodeQuery = { __typename?: 'query_root', chats_by_episode_id: Array<{ __typename?: 'chats', content: string, work_id?: number | null, user_id: string, comment_time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user: { __typename?: 'users', anonymous: boolean, user_name: string, id: string } }> };

export type GetChatsWorkQueryVariables = Types.Exact<{
  work_id: Types.Scalars['Int'];
  get_limit: Types.Scalars['Int'];
  _lt: Types.Scalars['Int'];
  _gte: Types.Scalars['Int'];
}>;


export type GetChatsWorkQuery = { __typename?: 'query_root', chats_by_work_id: Array<{ __typename?: 'chats', content: string, work_id?: number | null, user_id: string, comment_time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user: { __typename?: 'users', anonymous: boolean, user_name: string, id: string } }> };


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
      user_name
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
      user_name
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