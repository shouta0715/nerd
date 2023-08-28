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

export const dailyEpisodeRankingDocument = graphql(`
  query GetDailyEpisodeRanking($_gte: timestamptz!) {
    daily_episodes_ranking(args: { _limit: 5 }) {
      ...DailyEpisodeFragment
      comments_aggregate(where: { created_at: { _gte: $_gte } }) {
        aggregate {
          count
        }
      }
      work {
        ...WorkFragment
      }
    }
  }
`);

export const dailyWorkRankingDocument = graphql(`
  query GetDailyWorkRanking($_gte: timestamptz!) {
    daily_works_ranking(args: { _limit: 5 }) {
      ...WorkFragment
      comments_aggregate(where: { created_at: { _gte: $_gte } }) {
        aggregate {
          count
        }
      }
    }
  }
`);

export const weeklyEpisodeRankingDocument = graphql(`
  query GetWeeklyEpisodeRanking($_gte: timestamptz!) {
    weekly_episodes_ranking(args: { _limit: 5 }) {
      ...DailyEpisodeFragment
      comments_aggregate(where: { created_at: { _gte: $_gte } }) {
        aggregate {
          count
        }
      }
      work {
        ...WorkFragment
      }
    }
  }
`);

export const weeklyWorkRankingDocument = graphql(`
  query GetWeeklyWorkRanking($_gte: timestamptz!) {
    weekly_works_ranking(args: { _limit: 5 }) {
      ...WorkFragment
      comments_aggregate(where: { created_at: { _gte: $_gte } }) {
        aggregate {
          count
        }
      }
    }
  }
`);
