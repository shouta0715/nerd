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
    episodes(where: $where) {
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