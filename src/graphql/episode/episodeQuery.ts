import { gql } from "graphql-request";

export const UPDATE_TODAY_EPISODE = gql`
  mutation UpdateTodayEpisode(
    $tid: Int!
    $number: Int!
    $episodes_set_input: episodes_set_input!
  ) {
    update_episodes(
      where: {
        _and: { number: { _eq: $number }, work: { tid: { _eq: $tid } } }
      }
      _set: $episodes_set_input
    ) {
      returning {
        id
        start_time
        end_time
      }
    }
  }
`;

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
      episode_likes_aggregate {
        aggregate {
          count
        }
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

export const GET_NEXT_EPISODE = gql`
  query GetNextEpisodeId($number: Int!, $work_id: Int!) {
    episodes(
      where: { _and: { work_id: { _eq: $work_id }, number: { _eq: $number } } }
    ) {
      id
    }
  }
`;
