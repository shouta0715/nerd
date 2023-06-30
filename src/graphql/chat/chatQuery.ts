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
        id
      }
    }
  }
`;

export const INSERT_CHAT = gql`
  mutation InsertChat($object: chats_insert_input!) {
    insert_chats_one(object: $object) {
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
  }
`;

export const GET_ZERO_TIME_CHATS = gql`
  query GetZeroTimeChats(
    $episode_id: uuid!
    $limit: Int!
    $cursor: timestamptz
  ) {
    chats(
      where: {
        episode_id: { _eq: $episode_id }
        comment_time: { _eq: 0 }
        created_at: { _gt: $cursor }
      }
      order_by: { created_at: desc }
      limit: $limit
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
        id
      }
    }
  }
`;
