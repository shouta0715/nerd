import { gql } from "graphql-request";

export const INSERT_EPISODE_LIKE = gql`
  mutation InsertEpisodeLikes($object: episode_likes_insert_input!) {
    insert_episode_likes_one(object: $object) {
      user_id
      episode_id
    }
  }
`;

export const GET_EPISODE_LIKES = gql`
  query GetEpisodeLikes($episodeId: uuid!, $userId: String!) {
    episode_likes_by_pk(episode_id: $episodeId, user_id: $userId) {
      episode_id
    }
  }
`;

export const DELETE_EPISODE_LIKE = gql`
  mutation DeleteEpisodeLikes($episodeId: uuid!, $userId: String!) {
    delete_episode_likes_by_pk(episode_id: $episodeId, user_id: $userId) {
      user_id
      episode_id
    }
  }
`;
