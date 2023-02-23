import {
  useDeleteEpisodeLikesMutation,
  useInsertEpisodeLikesMutation,
} from "src/generated/graphql";
import { useGlobalState } from "src/store/global/globalStore";

export const useMutateEpisodeLike = () => {
  const client = useGlobalState((state) => state.client);

  const insertLikesMutation = useInsertEpisodeLikesMutation(client);
  const deleteLikeMutation = useDeleteEpisodeLikesMutation(client);

  return {
    insertLikesMutation,
    deleteLikeMutation,
  };
};
