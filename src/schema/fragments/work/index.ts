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

export const FragmentEpisode = gql`
  fragment FragmentEpisode on episodes {
    title
    start_time
    number
    id
    has_next_episode
    next_episode_id
    end_time
  }
`;
