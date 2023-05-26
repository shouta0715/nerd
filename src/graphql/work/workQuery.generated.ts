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
export type FragmentWorkFragment = { __typename?: 'works', title: string, series_title: string, series_id?: string | null, id: number, has_episodes?: boolean | null };

export type FragmentEpisodeFragment = { __typename?: 'episodes', title: string, start_time?: any | null, number: number, id: any, has_next_episode: boolean, next_episode_id?: any | null, end_time?: any | null };

export type GetSeasonWorksQueryVariables = Types.Exact<{
  season: Types.Scalars['String']['input'];
  year: Types.Scalars['Int']['input'];
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetSeasonWorksQuery = { __typename?: 'query_root', works: Array<{ __typename?: 'works', title: string, series_title: string, series_id?: string | null, id: number, has_episodes?: boolean | null, episodes: Array<{ __typename?: 'episodes', title: string, start_time?: any | null, number: number, id: any, has_next_episode: boolean, next_episode_id?: any | null, end_time?: any | null }> }> };

export type SearchWorksQueryVariables = Types.Exact<{
  search: Types.Scalars['String']['input'];
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type SearchWorksQuery = { __typename?: 'query_root', search_works: Array<{ __typename?: 'works', title: string, series_title: string, series_id?: string | null, id: number, has_episodes?: boolean | null, episodes: Array<{ __typename?: 'episodes', title: string, start_time?: any | null, number: number, id: any, has_next_episode: boolean, next_episode_id?: any | null, end_time?: any | null }> }> };

export type GetWorkSeriesQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  series_id: Types.Scalars['String']['input'];
}>;


export type GetWorkSeriesQuery = { __typename?: 'query_root', works_by_pk?: { __typename?: 'works', title: string, series_title: string, series_id?: string | null, id: number, has_episodes?: boolean | null, episodes: Array<{ __typename?: 'episodes', title: string, start_time?: any | null, number: number, id: any, has_next_episode: boolean, next_episode_id?: any | null, end_time?: any | null }> } | null, works: Array<{ __typename?: 'works', title: string, series_title: string, series_id?: string | null, id: number, has_episodes?: boolean | null, episodes: Array<{ __typename?: 'episodes', title: string, start_time?: any | null, number: number, id: any, has_next_episode: boolean, next_episode_id?: any | null, end_time?: any | null }> }> };

export type GetWorkQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type GetWorkQuery = { __typename?: 'query_root', works_by_pk?: { __typename?: 'works', title: string, series_title: string, series_id?: string | null, id: number, has_episodes?: boolean | null } | null };

export type GetSeriesQueryVariables = Types.Exact<{
  series_id: Types.Scalars['String']['input'];
}>;


export type GetSeriesQuery = { __typename?: 'query_root', works: Array<{ __typename?: 'works', title: string, series_title: string, series_id?: string | null, id: number, has_episodes?: boolean | null, episodes: Array<{ __typename?: 'episodes', title: string, start_time?: any | null, number: number, id: any, has_next_episode: boolean, next_episode_id?: any | null, end_time?: any | null }> }> };

export type GetWeeklyWorksQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetWeeklyWorksQuery = { __typename?: 'query_root', weekly_works: Array<{ __typename?: 'works', title: string, series_title: string, series_id?: string | null, id: number, has_episodes?: boolean | null, episodes: Array<{ __typename?: 'episodes', title: string, start_time?: any | null, number: number, id: any, has_next_episode: boolean, next_episode_id?: any | null, end_time?: any | null }> }> };

export const FragmentWorkFragmentDoc = `
    fragment FragmentWork on works {
  title
  series_title
  series_id
  id
  has_episodes
}
    `;
export const FragmentEpisodeFragmentDoc = `
    fragment FragmentEpisode on episodes {
  title
  start_time
  number
  id
  has_next_episode
  next_episode_id
  end_time
}
    `;
export const GetSeasonWorksDocument = `
    query GetSeasonWorks($season: String!, $year: Int!, $limit: Int) {
  works(
    where: {_and: {season_year: {_eq: $year}, season_name: {_eq: $season}, tid: {_is_null: false}}}
    limit: $limit
  ) {
    ...FragmentWork
    episodes(order_by: {number: desc_nulls_last}, limit: 8) {
      ...FragmentEpisode
    }
  }
}
    ${FragmentWorkFragmentDoc}
${FragmentEpisodeFragmentDoc}`;
export const useGetSeasonWorksQuery = <
      TData = GetSeasonWorksQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetSeasonWorksQueryVariables,
      options?: UseQueryOptions<GetSeasonWorksQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetSeasonWorksQuery, TError, TData>(
      ['GetSeasonWorks', variables],
      fetcher<GetSeasonWorksQuery, GetSeasonWorksQueryVariables>(client, GetSeasonWorksDocument, variables, headers),
      options
    );
useGetSeasonWorksQuery.fetcher = (client: GraphQLClient, variables: GetSeasonWorksQueryVariables, headers?: RequestInit['headers']) => fetcher<GetSeasonWorksQuery, GetSeasonWorksQueryVariables>(client, GetSeasonWorksDocument, variables, headers);
export const SearchWorksDocument = `
    query SearchWorks($search: String!, $limit: Int) {
  search_works(
    args: {search: $search, _limit: $limit}
    order_by: {series_title: asc}
  ) {
    ...FragmentWork
    episodes(order_by: {number: desc_nulls_last}, limit: 8) {
      ...FragmentEpisode
    }
  }
}
    ${FragmentWorkFragmentDoc}
${FragmentEpisodeFragmentDoc}`;
export const useSearchWorksQuery = <
      TData = SearchWorksQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: SearchWorksQueryVariables,
      options?: UseQueryOptions<SearchWorksQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<SearchWorksQuery, TError, TData>(
      ['SearchWorks', variables],
      fetcher<SearchWorksQuery, SearchWorksQueryVariables>(client, SearchWorksDocument, variables, headers),
      options
    );
useSearchWorksQuery.fetcher = (client: GraphQLClient, variables: SearchWorksQueryVariables, headers?: RequestInit['headers']) => fetcher<SearchWorksQuery, SearchWorksQueryVariables>(client, SearchWorksDocument, variables, headers);
export const GetWorkSeriesDocument = `
    query GetWorkSeries($id: Int!, $series_id: String!) {
  works_by_pk(id: $id) {
    ...FragmentWork
    episodes(order_by: {number: desc_nulls_last}) {
      ...FragmentEpisode
    }
  }
  works(
    where: {_and: {id: {_neq: $id}, series_id: {_eq: $series_id}}}
    order_by: [{has_episodes: desc}]
  ) {
    ...FragmentWork
    episodes(order_by: {number: desc_nulls_last}, limit: 8) {
      ...FragmentEpisode
    }
  }
}
    ${FragmentWorkFragmentDoc}
${FragmentEpisodeFragmentDoc}`;
export const useGetWorkSeriesQuery = <
      TData = GetWorkSeriesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetWorkSeriesQueryVariables,
      options?: UseQueryOptions<GetWorkSeriesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetWorkSeriesQuery, TError, TData>(
      ['GetWorkSeries', variables],
      fetcher<GetWorkSeriesQuery, GetWorkSeriesQueryVariables>(client, GetWorkSeriesDocument, variables, headers),
      options
    );
useGetWorkSeriesQuery.fetcher = (client: GraphQLClient, variables: GetWorkSeriesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetWorkSeriesQuery, GetWorkSeriesQueryVariables>(client, GetWorkSeriesDocument, variables, headers);
export const GetWorkDocument = `
    query GetWork($id: Int!) {
  works_by_pk(id: $id) {
    ...FragmentWork
  }
}
    ${FragmentWorkFragmentDoc}`;
export const useGetWorkQuery = <
      TData = GetWorkQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetWorkQueryVariables,
      options?: UseQueryOptions<GetWorkQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetWorkQuery, TError, TData>(
      ['GetWork', variables],
      fetcher<GetWorkQuery, GetWorkQueryVariables>(client, GetWorkDocument, variables, headers),
      options
    );
useGetWorkQuery.fetcher = (client: GraphQLClient, variables: GetWorkQueryVariables, headers?: RequestInit['headers']) => fetcher<GetWorkQuery, GetWorkQueryVariables>(client, GetWorkDocument, variables, headers);
export const GetSeriesDocument = `
    query GetSeries($series_id: String!) {
  works(where: {series_id: {_eq: $series_id}}, order_by: [{has_episodes: desc}]) {
    ...FragmentWork
    episodes(order_by: {number: desc_nulls_last}, limit: 8) {
      ...FragmentEpisode
    }
  }
}
    ${FragmentWorkFragmentDoc}
${FragmentEpisodeFragmentDoc}`;
export const useGetSeriesQuery = <
      TData = GetSeriesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetSeriesQueryVariables,
      options?: UseQueryOptions<GetSeriesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetSeriesQuery, TError, TData>(
      ['GetSeries', variables],
      fetcher<GetSeriesQuery, GetSeriesQueryVariables>(client, GetSeriesDocument, variables, headers),
      options
    );
useGetSeriesQuery.fetcher = (client: GraphQLClient, variables: GetSeriesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetSeriesQuery, GetSeriesQueryVariables>(client, GetSeriesDocument, variables, headers);
export const GetWeeklyWorksDocument = `
    query GetWeeklyWorks($limit: Int) {
  weekly_works(args: {limit_num: $limit}) {
    ...FragmentWork
    episodes(order_by: {number: desc_nulls_last}, limit: 8) {
      ...FragmentEpisode
    }
  }
}
    ${FragmentWorkFragmentDoc}
${FragmentEpisodeFragmentDoc}`;
export const useGetWeeklyWorksQuery = <
      TData = GetWeeklyWorksQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetWeeklyWorksQueryVariables,
      options?: UseQueryOptions<GetWeeklyWorksQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetWeeklyWorksQuery, TError, TData>(
      variables === undefined ? ['GetWeeklyWorks'] : ['GetWeeklyWorks', variables],
      fetcher<GetWeeklyWorksQuery, GetWeeklyWorksQueryVariables>(client, GetWeeklyWorksDocument, variables, headers),
      options
    );
useGetWeeklyWorksQuery.fetcher = (client: GraphQLClient, variables?: GetWeeklyWorksQueryVariables, headers?: RequestInit['headers']) => fetcher<GetWeeklyWorksQuery, GetWeeklyWorksQueryVariables>(client, GetWeeklyWorksDocument, variables, headers);