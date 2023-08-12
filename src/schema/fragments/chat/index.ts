import { gql } from "graphql-request";

export const ChatFragment = gql`
  fragment ChatFragment on chats {
    content
    work_id
    user_id
    comment_time
    id
    episode_id
    created_at
    commenter_name
    user {
      anonymous
      id
    }
  }
`;
