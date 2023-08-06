import { gql } from "graphql-request";

export const WorkFragment = gql`
  fragment WorkFragment on works {
    id
    title
    series_title
    series_id
    has_episodes
  }
`;

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

export const GET_TODAY_EPISODES = gql`
  query GetTodayEpisodes($where: episodes_bool_exp!) {
    episodes(where: $where, order_by: { start_time: asc }) {
      ...TodayFragment
    }
  }
`;

export const GET_EPISODE = gql`
  query GetEpisode($id: uuid!) {
    episodes_by_pk(id: $id) {
      ...EpisodeFragment
      work {
        ...WorkFragment
      }
    }
  }
`;

export const GET_LIVE_IDS = gql`
  query GetLiveIds($where: episodes_bool_exp!) {
    episodes(where: $where, order_by: { start_time: asc }) {
      id
    }
  }
`;
