import { gql } from "graphql-request";

export const GET_CHAT_COMMENTS = gql`
  query GetChatComments($episode_id: uuid!) {
    chat_comments(
      where: { _and: { episode_id: { _eq: $episode_id }, time: { _gt: 0 } } }
      order_by: { time: asc }
    ) {
      id
      time
      episode_id
      user {
        anonymous
        user_name
        photo_url
        id
      }
    }
  }
`;
