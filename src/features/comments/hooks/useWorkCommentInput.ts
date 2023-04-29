import { useCommentInput } from "src/features/comments/hooks/useCommentInput";
import { CommentsFilter } from "src/features/comments/types";

export const useWorkCommentInput = (
  work_id: number,
  filter: CommentsFilter
) => {
  const {
    content,
    reply_to,
    replied_to_commenter_name,
    user,
    reset,
    insertWorkComment,
  } = useCommentInput(filter);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (content === "") return;
    await insertWorkComment.mutateAsync({
      work_id,
      content,
      reply_to,
      replied_to_commenter_name,
      commenter_name: user?.user_name || "匿名",
    });

    reset();
  };

  return {
    onSubmitHandler,
    isLoading: insertWorkComment.isLoading,
  };
};
