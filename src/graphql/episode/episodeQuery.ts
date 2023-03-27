import { gql } from "graphql-request";

export const GET_TODAY_EPISODES = gql`
  query GetTodayEpisodes($where: episodes_bool_exp!) {
    episodes(where: $where, order_by: { start_time: asc }) {
      id
      title
      end_time
      start_time
      number
      has_next_episode
      has_prev_episode
      work {
        series_title
        title
        id
        series_id
        tid
      }
    }
  }
`;

export const GET_EPISODE = gql`
  query GetEpisode($id: uuid!) {
    episodes_by_pk(id: $id) {
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
  }
`;
