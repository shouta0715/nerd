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
export type UserInfoFragment = { __typename?: 'users', id: string, photo_url?: string | null, user_name: string };

export type GetUserQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: string, photo_url?: string | null, user_name: string } | null };

export type CreateUserMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  user_name?: Types.InputMaybe<Types.Scalars['String']>;
  photo_url?: Types.InputMaybe<Types.Scalars['String']>;
  ip?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: string, photo_url?: string | null, user_name: string } | null };

export type DeleteUserMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'mutation_root', delete_users_by_pk?: { __typename?: 'users', id: string } | null };

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
export const CreateUserDocument = `
    mutation CreateUser($id: String!, $user_name: String, $photo_url: String, $ip: String) {
  insert_users_one(
    object: {id: $id, user_name: $user_name, photo_url: $photo_url, ip: $ip}
    on_conflict: {constraint: users_pkey}
  ) {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;
export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
      ['CreateUser'],
      (variables?: CreateUserMutationVariables) => fetcher<CreateUserMutation, CreateUserMutationVariables>(client, CreateUserDocument, variables, headers)(),
      options
    );
useCreateUserMutation.fetcher = (client: GraphQLClient, variables: CreateUserMutationVariables, headers?: RequestInit['headers']) => fetcher<CreateUserMutation, CreateUserMutationVariables>(client, CreateUserDocument, variables, headers);
export const DeleteUserDocument = `
    mutation DeleteUser($id: String!) {
  delete_users_by_pk(id: $id) {
    id
  }
}
    `;
export const useDeleteUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteUserMutation, TError, DeleteUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteUserMutation, TError, DeleteUserMutationVariables, TContext>(
      ['DeleteUser'],
      (variables?: DeleteUserMutationVariables) => fetcher<DeleteUserMutation, DeleteUserMutationVariables>(client, DeleteUserDocument, variables, headers)(),
      options
    );
useDeleteUserMutation.fetcher = (client: GraphQLClient, variables: DeleteUserMutationVariables, headers?: RequestInit['headers']) => fetcher<DeleteUserMutation, DeleteUserMutationVariables>(client, DeleteUserDocument, variables, headers);