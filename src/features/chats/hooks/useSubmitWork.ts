import { useState } from "react";
import { useNotificationState } from "src/components/Elements/Notification/store";
import { useMutateChatWork } from "src/features/chats/api/useMutateChatWork";
import { useSubmitChat } from "src/features/chats/hooks/useSubmitChat";
import { useGlobalState } from "src/store/global/globalStore";
import { getIp } from "src/utils/getIp";

type Args = {
  work_id: number;
};

export const useSubmitWork = ({ work_id }: Args) => {
  const { insertChat } = useMutateChatWork();
  const { setValue, user, getTime, value } = useSubmitChat();
  const authLoading = useGlobalState((state) => state.authLoading);
  const onNotification = useNotificationState((state) => state.onShow);
  const [ipLoading, setIpLoading] = useState(false);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!value.trim() || authLoading) return;
      setIpLoading(true);
      const ip = await getIp();

      const object = {
        work_id,
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
    isLoading: insertChat.isLoading || ipLoading,
    setValue,
    value,
  };
};
