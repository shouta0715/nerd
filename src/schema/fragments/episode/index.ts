import { gql } from "graphql-request";

export const EpisodeFragment = gql`
  fragment EpisodeFragment on episodes {
    id
    title
    end_time
    start_time
    number
    has_next_episode
    next_episode_id
    work {
      id
      title
      series_title
      series_id
      has_episodes
    }
  }
`;

export const TodayFragment = gql`
  fragment TodayFragment on episodes {
    id
    title
    end_time
    start_time
    number
    has_next_episode
    has_prev_episode
    next_episode_id
    work {
      id
      title
      series_title
      series_id
      has_episodes
      tid
    }
  }
`;

export const RankingEpisodeFragment = gql`
  fragment RankingEpisodeFragment on episodes {
    id
    title
    start_time
    number
    end_time
    has_next_episode
    next_episode_id
    comments_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export const DailyEpisodeFragment = gql`
  fragment DailyEpisodeFragment on episodes {
    id
    title
    start_time
    number
    end_time
    has_next_episode
    next_episode_id
  }
`;
