import { useState } from "react";
import { useNotificationState } from "src/components/Notification/store";
import { useCommentInput } from "src/features/comments/common/hooks/useCommentInput";

import { useGlobalState } from "src/store/global/globalStore";

export const useEpisodeCommentInput = (episode_id: string) => {
  const {
    content,
    reply_to,
    replied_to_commenter_name,
    user,
    reset,
    insertEpisodeComment,
    getIpAddress,
  } = useCommentInput(episode_id);
  const onNotification = useNotificationState((state) => state.onShow);
  const authLoading = useGlobalState((state) => state.authLoading);
  const [ipLoading, setIpLoading] = useState(false);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!content.trim() || authLoading) return;

      setIpLoading(true);
      const ip = await getIpAddress();

      await insertEpisodeComment.mutateAsync({
        episode_id,
        content,
        reply_to,
        replied_to_commenter_name,
        commenter_name: user?.user_name || "匿名",
        ip: ip || null,
      });
      reset();
    } catch (error) {
      onNotification({
        title: "コメントの投稿に失敗しました",
        type: "error",
        message: "再度お試しください",
      });
    }

    setIpLoading(false);
  };

  return {
    onSubmitHandler,
    isLoading: insertEpisodeComment.isPending || ipLoading,
  };
};
