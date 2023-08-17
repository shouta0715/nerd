import { useState } from "react";
import { useNotificationState } from "src/components/Notification/store";
import { useSubmitChat } from "src/features/chats/common/hooks/useSubmitChat";
import { useMutateChatWork } from "src/features/chats/works/api/useMutateChatWork";
import { useGlobalState } from "src/store/global/globalStore";

type Args = {
  work_id: number;
};

export const useSubmitWork = ({ work_id }: Args) => {
  const { insertChat } = useMutateChatWork();
  const { setValue, user, getTime, value, getIpAddress } = useSubmitChat();
  const authLoading = useGlobalState((state) => state.authLoading);
  const onNotification = useNotificationState((state) => state.onShow);
  const [ipLoading, setIpLoading] = useState(false);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!value.trim() || authLoading) return;
      setIpLoading(true);
      const ip = await getIpAddress();

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
    isLoading: insertChat.isPending || ipLoading,
    setValue,
    value,
  };
};
