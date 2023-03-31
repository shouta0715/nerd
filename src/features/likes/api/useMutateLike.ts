import {
  useDeleteLikeMutation,
  useInsertLikeMutation,
} from "src/graphql/like/likeQuery.generated";
import { client } from "src/libs/graphqlClient";

export const useMutateLike = () => {
  const insertLike = useInsertLikeMutation(client);
  const deleteLike = useDeleteLikeMutation(client);

  return {
    insertLike,
    deleteLike,
    isLoading: insertLike.isLoading || deleteLike.isLoading,
  };
};
