import { graphql } from "src/gql/gql";

export const rankingDocument = graphql(`
  query GetRanking {
    works_all_ranking(args: { _limit: 5 }) {
      ...WorkFragment
      comments_aggregate {
        aggregate {
          count
        }
      }
      episodes(limit: 1, order_by: { comments_aggregate: { count: desc } }) {
        ...RankingEpisodeFragment
      }
    }
  }
`);
