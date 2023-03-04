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
      season_year
      season_name
      id
      has_episodes
      media_type_id
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
