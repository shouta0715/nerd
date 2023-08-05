import { graphql } from "src/gql/gql";

export const chatsDocument = graphql(`
  query GetChats($episode_id: uuid!) {
    chats(
      where: { episode_id: { _eq: $episode_id }, comment_time: { _gte: 0 } }
      order_by: { comment_time: asc }
      limit: 100
    ) {
      ...ChatFragment
    }
  }
`);

export const episodeChatsDocument = graphql(`
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
      ...ChatFragment
    }
  }
`);

export const workChatsDocument = graphql(`
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
      ...ChatFragment
    }
  }
`);

export const insertChatDocument = graphql(`
  mutation InsertChat($object: chats_insert_input!) {
    insert_chats_one(object: $object) {
      ...ChatFragment
    }
  }
`);
