import { graphql } from "src/gql";

export const insertReactionsDocument = graphql(`
  mutation InsertReactions($objects: [reactions_insert_input!]!) {
    insert_reactions(objects: $objects) {
      returning {
        id
      }
    }
  }
`);

export const ReactionsEpisodeDocument = graphql(`
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
`);

export const ReactionsWorkDocument = graphql(`
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
`);
