import { useNotificationState } from "src/components/Elements/Notification/store";
import { useCommentInput } from "src/features/comments/hooks/useCommentInput";
import { CommentsFilter } from "src/features/comments/types";

export const useEpisodeCommentInput = (
  episode_id: string,
  filter: CommentsFilter
) => {
  const {
    content,
    reply_to,
    replied_to_commenter_name,
    user,
    reset,
    insertEpisodeComment,
  } = useCommentInput(filter);
  const onNotification = useNotificationState((state) => state.onShow);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!content.trim()) return;
      insertEpisodeComment.mutateAsync({
        episode_id,
        content,
        reply_to,
        replied_to_commenter_name,
        commenter_name: user?.user_name || "匿名",
      });
    } catch (error) {
      onNotification({
        title: "コメントの投稿に失敗しました",
        type: "error",
        message: "再度お試しください",
      });
    } finally {
      reset();
    }
  };

  return {
    onSubmitHandler,
    isLoading: insertEpisodeComment.isLoading,
  };
};
