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
export type GetTodayEpisodesQueryVariables = Types.Exact<{
  where: Types.Episodes_Bool_Exp;
}>;


export type GetTodayEpisodesQuery = { __typename?: 'query_root', episodes: Array<{ __typename?: 'episodes', id: any, title: string, end_time?: any | null, start_time?: any | null, number: number, has_next_episode: boolean, has_prev_episode: boolean, work: { __typename?: 'works', series_title: string, title: string, id: number, series_id?: string | null, tid?: number | null } }> };

export type GetEpisodeQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
}>;


export type GetEpisodeQuery = { __typename?: 'query_root', episodes_by_pk?: { __typename?: 'episodes', id: any, title: string, end_time?: any | null, start_time?: any | null, number: number, has_next_episode: boolean, next_episode_id?: any | null, work: { __typename?: 'works', series_title: string } } | null };


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
    next_episode_id
    work {
      series_title
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
useGetEpisodeQuery.fetcher = (client: GraphQLClient, variables: GetEpisodeQueryVariables, headers?: RequestInit['headers']) => fetcher<GetEpisodeQuery, GetEpisodeQueryVariables>(client, GetEpisodeDocument, variables, headers);