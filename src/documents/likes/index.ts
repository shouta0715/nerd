import { graphql } from "src/gql/gql";

export const insertLikes = graphql(`
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
`);

export const deleteLikes = graphql(`
  mutation DeleteLike($user_id: String!, $comment_id: uuid!) {
    delete_likes(
      where: { user_id: { _eq: $user_id }, comment_id: { _eq: $comment_id } }
    ) {
      returning {
        id
      }
    }
  }
`);
