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
export type InsertRequestMutationVariables = Types.Exact<{
  object: Types.Request_Works_Insert_Input;
}>;


export type InsertRequestMutation = { __typename?: 'mutation_root', insert_request_works_one?: { __typename?: 'request_works', id: number } | null };


export const InsertRequestDocument = `
    mutation InsertRequest($object: request_works_insert_input!) {
  insert_request_works_one(object: $object) {
    id
  }
}
    `;
export const useInsertRequestMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<InsertRequestMutation, TError, InsertRequestMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<InsertRequestMutation, TError, InsertRequestMutationVariables, TContext>(
      ['InsertRequest'],
      (variables?: InsertRequestMutationVariables) => fetcher<InsertRequestMutation, InsertRequestMutationVariables>(client, InsertRequestDocument, variables, headers)(),
      options
    );
useInsertRequestMutation.fetcher = (client: GraphQLClient, variables: InsertRequestMutationVariables, headers?: RequestInit['headers']) => fetcher<InsertRequestMutation, InsertRequestMutationVariables>(client, InsertRequestDocument, variables, headers);