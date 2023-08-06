import { useMutateComment } from "src/features/comments/common/api/useMutateComment";

import { useInputCommentState } from "src/features/comments/common/store";
import { useUserState } from "src/store/user/userState";

export const useCommentInput = (id: string | number) => {
  const [{ reply_to, replied_to_commenter_name }, reset, content] =
    useInputCommentState((state) => [
      state.inputComment,
      state.resetInputComment,
      state.content,
    ]);
  const user = useUserState((state) => state.user);
  const { insertEpisodeComment, insertWorkComment } = useMutateComment(id);

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
