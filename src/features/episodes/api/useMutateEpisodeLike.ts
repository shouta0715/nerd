import {
  useDeleteEpisodeLikesMutation,
  useInsertEpisodeLikesMutation,
} from "src/generated/graphql";
import { useGlobalStore } from "src/store/global/globalStore";

export const useMutateEpisodeLike = () => {
  const client = useGlobalStore((state) => state.client);

  const insertLikesMutation = useInsertEpisodeLikesMutation(client);
  const deleteLikeMutation = useDeleteEpisodeLikesMutation(client);

  return {
    insertLikesMutation,
    deleteLikeMutation,
  };
};
