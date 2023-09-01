import { gql } from "graphql-request";

export const ReactionFragment = gql`
  fragment ReactionFragment on reactions {
    id
    push_count
    emoji_type
    reactions_time
  }
`;
