import { useMutateComment } from "src/features/comments/api/useMutate";
import { useInputCommentState } from "src/features/comments/store";
import { CommentsFilter } from "src/features/comments/types";
import { useUserState } from "src/store/user/userState";

export const useCommentInput = (filter: CommentsFilter) => {
  const [{ content, reply_to, replied_to_commenter_name }, reset] =
    useInputCommentState((state) => [
      state.inputComment,
      state.resetInputComment,
    ]);
  const user = useUserState((state) => state.user);
  const { insertEpisodeComment, insertWorkComment } = useMutateComment(filter);

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
