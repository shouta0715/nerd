import { gql } from "graphql-request";

export const GET_SEASON_WORKS = gql`
  query GetSeasonWorks($season: String!, $year: Int!, $limit: Int) {
    works(
      where: {
        _and: {
          season_year: { _eq: $year }
          season_name: { _eq: $season }
          has_episodes: { _eq: true }
        }
      }
      limit: $limit
    ) {
      title
      tid
      series_title
      series_id
      id
      has_episodes
      episodes(order_by: { number: desc_nulls_last }, limit: 8) {
        title
        start_time
        number
        id
        has_prev_episode
        has_next_episode
        end_time
      }
    }
  }
`;

export const SEARCH_WORKS = gql`
  query SearchWorks($search: String!, $limit: Int) {
    search_works(args: { search: $search, _limit: $limit }) {
      id
      title
      series_title
      has_episodes
      series_id
    }
  }
`;
