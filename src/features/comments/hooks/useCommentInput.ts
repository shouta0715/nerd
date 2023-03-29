import { useMutateComment } from "src/features/comments/api/useMutate";
import { useInputCommentState } from "src/features/comments/store";
import { useUserState } from "src/store/user/userState";

export const useCommentInput = () => {
  const [{ content, reply_to, replied_to_commenter_name }, reset] =
    useInputCommentState((state) => [
      state.inputComment,
      state.resetInputComment,
    ]);
  const user = useUserState((state) => state.user);
  const { insertEpisodeComment, insertWorkComment } = useMutateComment();

  return {
    content,
    reply_to,
    replied_to_commenter_name,
    user,
    reset,
    insertEpisodeComment,
    insertWorkComment,
  };
};
