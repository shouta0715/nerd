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
export type UpdateTodayEpisodeMutationVariables = Types.Exact<{
  tid: Types.Scalars['Int'];
  number: Types.Scalars['Int'];
  episodes_set_input: Types.Episodes_Set_Input;
}>;


export type UpdateTodayEpisodeMutation = { __typename?: 'mutation_root', update_episodes?: { __typename?: 'episodes_mutation_response', returning: Array<{ __typename?: 'episodes', id: any, start_time?: any | null, end_time?: any | null }> } | null };

export type GetTodayEpisodesQueryVariables = Types.Exact<{
  where: Types.Episodes_Bool_Exp;
}>;


export type GetTodayEpisodesQuery = { __typename?: 'query_root', episodes: Array<{ __typename?: 'episodes', id: any, title: string, end_time?: any | null, start_time?: any | null, number: number, has_next_episode: boolean, has_prev_episode: boolean, work: { __typename?: 'works', series_title: string, title: string, id: number, series_id?: string | null, tid?: number | null } }> };

export type GetEpisodeQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
}>;


export type GetEpisodeQuery = { __typename?: 'query_root', episodes_by_pk?: { __typename?: 'episodes', id: any, title: string, end_time?: any | null, start_time?: any | null, number: number, has_next_episode: boolean, has_prev_episode: boolean, next_episode_id?: any | null, prev_episode_id?: any | null, work: { __typename?: 'works', series_title: string, title: string, id: number, series_id?: string | null, tid?: number | null } } | null };


export const UpdateTodayEpisodeDocument = `
    mutation UpdateTodayEpisode($tid: Int!, $number: Int!, $episodes_set_input: episodes_set_input!) {
  update_episodes(
    where: {_and: {number: {_eq: $number}, work: {tid: {_eq: $tid}}}}
    _set: $episodes_set_input
  ) {
    returning {
      id
      start_time
      end_time
    }
  }
}
    `;
export const useUpdateTodayEpisodeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateTodayEpisodeMutation, TError, UpdateTodayEpisodeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateTodayEpisodeMutation, TError, UpdateTodayEpisodeMutationVariables, TContext>(
      ['UpdateTodayEpisode'],
      (variables?: UpdateTodayEpisodeMutationVariables) => fetcher<UpdateTodayEpisodeMutation, UpdateTodayEpisodeMutationVariables>(client, UpdateTodayEpisodeDocument, variables, headers)(),
      options
    );
useUpdateTodayEpisodeMutation.fetcher = (client: GraphQLClient, variables: UpdateTodayEpisodeMutationVariables, headers?: RequestInit['headers']) => fetcher<UpdateTodayEpisodeMutation, UpdateTodayEpisodeMutationVariables>(client, UpdateTodayEpisodeDocument, variables, headers);
export const GetTodayEpisodesDocument = `
    query GetTodayEpisodes($where: episodes_bool_exp!) {
  episodes(where: $where, order_by: {start_time: asc}) {
    id
    title
    end_time
    start_time
    number
    has_next_episode
    has_prev_episode
    work {
      series_title
      title
      id
      series_id
      tid
    }
  }
}
    `;
export const useGetTodayEpisodesQuery = <
      TData = GetTodayEpisodesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetTodayEpisodesQueryVariables,
      options?: UseQueryOptions<GetTodayEpisodesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetTodayEpisodesQuery, TError, TData>(
      ['GetTodayEpisodes', variables],
      fetcher<GetTodayEpisodesQuery, GetTodayEpisodesQueryVariables>(client, GetTodayEpisodesDocument, variables, headers),
      options
    );

useGetTodayEpisodesQuery.getKey = (variables: GetTodayEpisodesQueryVariables) => ['GetTodayEpisodes', variables];
;

useGetTodayEpisodesQuery.fetcher = (client: GraphQLClient, variables: GetTodayEpisodesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetTodayEpisodesQuery, GetTodayEpisodesQueryVariables>(client, GetTodayEpisodesDocument, variables, headers);
export const GetEpisodeDocument = `
    query GetEpisode($id: uuid!) {
  episodes_by_pk(id: $id) {
    id
    title
    end_time
    start_time
    number
    has_next_episode
    has_prev_episode
    next_episode_id
    prev_episode_id
    work {
      series_title
      title
      id
      series_id
      tid
    }
  }
}
    `;
export const useGetEpisodeQuery = <
      TData = GetEpisodeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetEpisodeQueryVariables,
      options?: UseQueryOptions<GetEpisodeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetEpisodeQuery, TError, TData>(
      ['GetEpisode', variables],
      fetcher<GetEpisodeQuery, GetEpisodeQueryVariables>(client, GetEpisodeDocument, variables, headers),
      options
    );

useGetEpisodeQuery.getKey = (variables: GetEpisodeQueryVariables) => ['GetEpisode', variables];
;

useGetEpisodeQuery.fetcher = (client: GraphQLClient, variables: GetEpisodeQueryVariables, headers?: RequestInit['headers']) => fetcher<GetEpisodeQuery, GetEpisodeQueryVariables>(client, GetEpisodeDocument, variables, headers);