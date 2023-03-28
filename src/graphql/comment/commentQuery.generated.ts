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
export type GetCommentsQueryVariables = Types.Exact<{
  episode_id: Types.Scalars['uuid'];
  cursor?: Types.InputMaybe<Types.Scalars['timestamptz']>;
  limit: Types.Scalars['Int'];
}>;


export type GetCommentsQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', content: string, work_id?: number | null, user_id: string, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_count?: any | null, user: { __typename?: 'users', anonymous: boolean, user_name: string, id: string } }> };

export type GetRepliesQueryVariables = Types.Exact<{
  _reply_to: Types.Scalars['uuid'];
  cursor: Types.Scalars['timestamptz'];
  reply_limit: Types.Scalars['Int'];
}>;


export type GetRepliesQuery = { __typename?: 'query_root', replies: Array<{ __typename?: 'comments', content: string, work_id?: number | null, user_id: string, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_to?: any | null, replied_to_commenter_name?: string | null, user: { __typename?: 'users', anonymous: boolean, user_name: string, id: string } }> };


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
    query GetReplies($_reply_to: uuid!, $cursor: timestamptz!, $reply_limit: Int!) {
  replies(
    args: {_reply_to: $_reply_to, cursor: $cursor, reply_limit: $reply_limit}
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