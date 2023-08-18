import { useState } from "react";
import { useNotificationState } from "src/components/Notification/store";
import { useCommentInput } from "src/features/comments/common/hooks/useCommentInput";
import { useGlobalState } from "src/store/global/globalStore";

export const useWorkCommentInput = (work_id: number) => {
  const {
    content,
    reply_to,
    replied_to_commenter_name,
    user,
    reset,
    insertWorkComment,
    getIpAddress,
  } = useCommentInput(work_id);
  const onNotification = useNotificationState((state) => state.onShow);
  const authLoading = useGlobalState((state) => state.authLoading);
  const [ipLoading, setIpLoading] = useState(false);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!content.trim() || authLoading) return;

      setIpLoading(true);
      const ip = await getIpAddress();

      await insertWorkComment.mutateAsync({
        work_id,
        content,
        reply_to,
        replied_to_commenter_name,
        commenter_name: user?.user_name || "匿名",
        ip: ip || null,
      });
      reset();
    } catch (error) {
      onNotification({
        title: "コメントの投稿できませんでした。",
        type: "error",
        message: "再度お試しください",
      });
    }

    setIpLoading(false);
  };

  return {
    onSubmitHandler,
    isLoading: insertWorkComment.isPending || ipLoading,
  };
};
