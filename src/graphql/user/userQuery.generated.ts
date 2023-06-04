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
export type UserInfoFragment = { __typename?: 'users', id: string, photo_url?: string | null, user_name: string };

export type GetUserQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: string, photo_url?: string | null, user_name: string } | null };

export const UserInfoFragmentDoc = `
    fragment UserInfo on users {
  id
  photo_url
  user_name
}
    `;
export const GetUserDocument = `
    query GetUser($id: String!) {
  users_by_pk(id: $id) {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;
export const useGetUserQuery = <
      TData = GetUserQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetUserQueryVariables,
      options?: UseQueryOptions<GetUserQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUserQuery, TError, TData>(
      ['GetUser', variables],
      fetcher<GetUserQuery, GetUserQueryVariables>(client, GetUserDocument, variables, headers),
      options
    );
useGetUserQuery.fetcher = (client: GraphQLClient, variables: GetUserQueryVariables, headers?: RequestInit['headers']) => fetcher<GetUserQuery, GetUserQueryVariables>(client, GetUserDocument, variables, headers);