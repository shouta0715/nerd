/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNotificationState } from "src/components/Elements/Notification/store";
import { useMutateChatEpisode } from "src/features/chats/api/useMutateChatEpisode";
import { useSubmitChat } from "src/features/chats/hooks/useSubmitChat";

type Args = {
  episode_id: string;
};

export const useSubmitChatEpisode = ({ episode_id }: Args) => {
  const { insertChat } = useMutateChatEpisode();
  const { content, user, getTime, setContent } = useSubmitChat();
  const onNotification = useNotificationState((state) => state.onShow);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!content.trim()) return;
      const object = {
        episode_id,
        content,
        comment_time: getTime(),
        commenter_name: user?.user_name || "匿名",
      };
      insertChat.mutateAsync({
        object,
      });
      setContent("");
    } catch (error) {
      onNotification({
        title: "コメントの投稿に失敗しました",
        type: "error",
        message: "再度お試しください",
      });
    }
  };

  return {
    onSubmitHandler,
    isLoading: insertChat.isLoading,
    setContent,
    content,
  };
};
