import { toast } from "react-toastify";
import { useInsertCommentMutation } from "../../generated/graphql";
import { useGlobalStore } from "../../store/global/globalStore";

export const useMutateComment = () => {
  const client = useGlobalStore((state) => state.client);
  const mutateComment = useInsertCommentMutation(client, {
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return mutateComment;
};
