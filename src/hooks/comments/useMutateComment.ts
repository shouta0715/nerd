import { useInsertCommentMutation } from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useMutateComment = () => {
  const client = useGlobalStore((state) => state.client);
  const mutateComment = useInsertCommentMutation(client, {
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return mutateComment;
};
