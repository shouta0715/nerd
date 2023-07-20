import { useNotificationState } from "src/components/Elements/Notification/store";
import { useCommentInput } from "src/features/comments/hooks/useCommentInput";
import { CommentsFilter } from "src/features/comments/types";
import { useGlobalState } from "src/store/global/globalStore";
import { getIp } from "src/utils/getIp";

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
  const onNotification = useNotificationState((state) => state.onShow);
  const authLoading = useGlobalState((state) => state.authLoading);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!content.trim() || authLoading) return;
      const ip = await getIp();

      await insertWorkComment.mutateAsync({
        work_id,
        content,
        reply_to,
        replied_to_commenter_name,
        commenter_name: user?.user_name || "匿名",
        ip: ip || null,
      });
    } catch (error) {
      onNotification({
        title: "コメントの投稿に失敗しました",
        type: "error",
        message: "再度お試しください",
      });
    }

    reset();
  };

  return {
    onSubmitHandler,
    isLoading: insertWorkComment.isLoading,
  };
};
