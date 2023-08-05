/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { useNotificationState } from "src/components/Notification/store";
import { useMutateChatEpisode } from "src/features/chats/api/useMutateChatEpisode";
import { useSubmitChat } from "src/features/chats/hooks/useSubmitChat";
import { useGlobalState } from "src/store/global/globalStore";
import { getIp } from "src/utils/client/getIp";

type Args = {
  episode_id: string;
};

export const useSubmitChatEpisode = ({ episode_id }: Args) => {
  const { insertChat } = useMutateChatEpisode();
  const { setValue, user, getTime, value } = useSubmitChat();
  const onNotification = useNotificationState((state) => state.onShow);
  const authLoading = useGlobalState((state) => state.authLoading);
  const [ipLoading, setIpLoading] = useState(false);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!value.trim() || authLoading) return;
      setIpLoading(true);

      const ip = await getIp();

      const object = {
        episode_id,
        content: value,
        comment_time: getTime(),
        commenter_name: user?.user_name || "匿名",
        ip: ip || null,
      };
      await insertChat.mutateAsync({
        object,
      });
      setValue("");
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
    isLoading: insertChat.isPending || ipLoading,
    value,
    setValue,
  };
};
