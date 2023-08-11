import { gql } from "graphql-request";

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
