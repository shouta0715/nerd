import { gql } from "graphql-request";

export const INSERT_LIKE = gql`
  mutation InsertLike($object: likes_insert_input!) {
    insert_likes_one(
      object: $object
      on_conflict: { constraint: likes_user_id_comment_id_key }
    ) {
      id
      user_id
      comment_id
    }
  }
`;

export const DELETE_LIKE = gql`
  mutation DeleteLike($user_id: String!, $comment_id: uuid!) {
    delete_likes(
      where: { user_id: { _eq: $user_id }, comment_id: { _eq: $comment_id } }
    ) {
      returning {
        id
      }
    }
  }
`;
