import { gql } from "graphql-request";

export const GET_SEASON_WORKS = gql`
  query GetSeasonWorks($season: String!, $year: Int!) {
    works(
      where: {
        _and: {
          season_year: { _eq: $year }
          season_name: { _eq: $season }
          has_episodes: { _eq: true }
        }
      }
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
      episodes {
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