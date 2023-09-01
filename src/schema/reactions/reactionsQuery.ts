import { gql } from "graphql-request";

export const INSERT_REACTIONS = gql`
  mutation InsertReactions($objects: [reactions_insert_input!]!) {
    insert_reactions(objects: $objects) {
      returning {
        id
      }
    }
  }
`;

export const GET_REACTIONS_EPISODE = gql`
  query GetReactionsEpisode(
    $episode_id: uuid!
    $get_limit: Int!
    $_lt: Int!
    $_gte: Int!
  ) {
    reactions_by_episode_id(
      args: {
        _episode_id: $episode_id
        get_limit: $get_limit
        _gte: $_gte
        _lt: $_lt
      }
    ) {
      ...ReactionFragment
    }
  }
`;

export const GET_REACTIONS_WORK = gql`
  query GetReactionsWork(
    $work_id: Int!
    $get_limit: Int!
    $_lt: Int!
    $_gte: Int!
  ) {
    reactions_by_work_id(
      args: {
        _work_id: $work_id
        get_limit: $get_limit
        _gte: $_gte
        _lt: $_lt
      }
    ) {
      ...ReactionFragment
    }
  }
`;
