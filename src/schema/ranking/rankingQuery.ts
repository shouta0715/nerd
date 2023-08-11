import { gql } from "graphql-request";

export const GET_RANKING = gql`
  query GetRanking() {
    works_all_ranking(args: { _limit: 10 }) {
      id
      title
      series_title
      series_id
      episodes {
        id
        title
        start_time
        number
        end_time
      }
      has_episodes
    }
  }
`;
