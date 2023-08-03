import { gql } from "graphql-request";

export const FragmentWork = gql`
  fragment FragmentWork on works {
    title
    series_title
    series_id
    id
    has_episodes
  }
`;

export const FragmentEpisode = gql`
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

export const GET_SEASON_WORKS = gql`
  query GetSeasonWorks($season: String!, $year: Int!, $limit: Int) {
    works(
      where: {
        _and: {
          season_year: { _eq: $year }
          season_name: { _eq: $season }
          tid: { _is_null: false }
        }
      }
      limit: $limit
    ) {
      ...FragmentWork
      episodes(order_by: { number: desc_nulls_last }, limit: 8) {
        ...FragmentEpisode
      }
    }
  }
`;

export const SEARCH_WORKS = gql`
  query SearchWorks($search: String!, $limit: Int) {
    search_works(
      args: { search: $search, _limit: $limit }
      order_by: { series_title: asc }
    ) {
      ...FragmentWork
      episodes(order_by: { number: desc_nulls_last }, limit: 8) {
        ...FragmentEpisode
      }
    }
  }
`;

export const GET_WORK_SERIES = gql`
  query GetWorkSeries($id: Int!, $series_id: String!) {
    works_by_pk(id: $id) {
      ...FragmentWork
      episodes(order_by: { number: desc_nulls_last }) {
        ...FragmentEpisode
      }
    }
    works(
      where: { _and: { id: { _neq: $id }, series_id: { _eq: $series_id } } }
      order_by: [{ has_episodes: desc }]
    ) {
      ...FragmentWork
      episodes(order_by: { number: desc_nulls_last }, limit: 8) {
        ...FragmentEpisode
      }
    }
  }
`;

export const GET_WORK = gql`
  query GetWork($id: Int!) {
    works_by_pk(id: $id) {
      ...FragmentWork
    }
  }
`;

export const GET_SERIES = gql`
  query GetSeries($series_id: String!) {
    works(
      where: { series_id: { _eq: $series_id } }
      order_by: [{ has_episodes: desc }]
    ) {
      ...FragmentWork
      episodes(order_by: { number: desc_nulls_last }, limit: 8) {
        ...FragmentEpisode
      }
    }
  }
`;

export const GET_WEEKLY_WORKS = gql`
  query GetWeeklyWorks($limit: Int) {
    weekly_works(args: { limit_num: $limit }) {
      ...FragmentWork
      episodes(order_by: { number: desc_nulls_last }, limit: 8) {
        ...FragmentEpisode
      }
    }
  }
`;