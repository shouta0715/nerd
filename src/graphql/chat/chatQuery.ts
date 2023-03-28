import { gql } from "graphql-request";

export const GET_CHATS_EPISODE = gql`
  query GetChatsEpisode(
    $episode_id: uuid!
    $get_limit: Int!
    $_lt: Int!
    $_gte: Int!
  ) {
    chats_by_episode_id(
      args: {
        _episode_id: $episode_id
        get_limit: $get_limit
        _gte: $_gte
        _lt: $_lt
      }
      order_by: { comment_time: asc }
    ) {
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
        user_name
        id
      }
    }
  }
`;

export const GET_CHATS_WORK = gql`
  query GetChatsWork(
    $work_id: Int!
    $get_limit: Int!
    $_lt: Int!
    $_gte: Int!
  ) {
    chats_by_work_id(
      args: {
        _work_id: $work_id
        get_limit: $get_limit
        _gte: $_gte
        _lt: $_lt
      }
      order_by: { comment_time: asc }
    ) {
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
        user_name
        id
      }
    }
  }
`;
