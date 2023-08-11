import { gql } from "graphql-request";

export const FragmentWork = gql`
  fragment FragmentWork on works {
    title
    series_title
    series_id
    id
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
