/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteEpisodeLikesMutation,
  useInsertEpisodeLikesMutation,
} from "src/graphql/like/likeQuery.generated";
import { client } from "src/libs/graphqlClient";

export const useMutateEpisodeLike = () => {
  const insertLikesMutation = useInsertEpisodeLikesMutation(client);
  const deleteLikeMutation = useDeleteEpisodeLikesMutation(client);

  return {
    insertLikesMutation,
    deleteLikeMutation,
  };
};
