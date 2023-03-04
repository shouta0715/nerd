import * as Types from '../types/graphql';

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
export type GetMediaTypesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetMediaTypesQuery = { __typename?: 'query_root', media_types: Array<{ __typename?: 'media_types', id: number, name: string }> };


export const GetMediaTypesDocument = `
    query GetMediaTypes {
  media_types(order_by: {id: asc}) {
    id
    name
  }
}
    `;
export const useGetMediaTypesQuery = <
      TData = GetMediaTypesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetMediaTypesQueryVariables,
      options?: UseQueryOptions<GetMediaTypesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetMediaTypesQuery, TError, TData>(
      variables === undefined ? ['GetMediaTypes'] : ['GetMediaTypes', variables],
      fetcher<GetMediaTypesQuery, GetMediaTypesQueryVariables>(client, GetMediaTypesDocument, variables, headers),
      options
    );

useGetMediaTypesQuery.getKey = (variables?: GetMediaTypesQueryVariables) => variables === undefined ? ['GetMediaTypes'] : ['GetMediaTypes', variables];
;

useGetMediaTypesQuery.fetcher = (client: GraphQLClient, variables?: GetMediaTypesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetMediaTypesQuery, GetMediaTypesQueryVariables>(client, GetMediaTypesDocument, variables, headers);