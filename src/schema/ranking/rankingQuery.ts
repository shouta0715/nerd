import { gql } from "graphql-request";

export const GET_RANKING = gql`
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
`;

export const GET_DAILY_EPISODE_RANKING = gql`
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
`;

export const GET_DAILY_WORK_RANKING = gql`
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
`;

export const GET_WEEKLY_WORK_RANKING = gql`
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
`;

export const GET_WEEKLY_EPISODE_RANKING = gql`
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
`;
