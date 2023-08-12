import { gql } from "graphql-request";

const _ = gql`
  fragment CommentFragment on comments {
    content
    work_id
    user_id
    id
    episode_id
    created_at
    commenter_name
    user {
      anonymous
      id
    }
    reply_count
    is_like
    likes_aggregate {
      aggregate {
        count
      }
    }
  }
`;
