import { useState } from "react";
import { useNotificationState } from "src/components/Elements/Notification/store";
import { useMutateLiveChat } from "src/features/live/api/useMutateLiveChat";
import { LiveTimer, Time } from "src/features/timer/types";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

type Props = {
  time: Time;
  mode: LiveTimer["mode"];
  episode_id: string;
};

export const useLiveChatInput = ({ episode_id, mode, time }: Props) => {
  const [value, setValue] = useState<string>("");
  const user = useUserState((state) => state.user);
  const { insetChat } = useMutateLiveChat();
  const onNotification = useNotificationState((state) => state.onShow);
  const authLoading = useGlobalState((state) => state.authLoading);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!value.trim() || authLoading) return;

      const object = {
        episode_id,
        content: value,
        comment_time: mode === "down" ? 0 : timeToSecond(time),
        commenter_name: user?.user_name || "匿名",
      };
      insetChat.mutateAsync({
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
  };

  return {
    value,
    setValue,
    onSubmitHandler,
    isLoading: insetChat.isLoading,
  };
};
