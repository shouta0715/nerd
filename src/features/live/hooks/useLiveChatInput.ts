import { useState } from "react";
import { useMutateLiveChat } from "src/features/live/api/useMutateLiveChat";
import { LiveTimer, Time } from "src/features/timer/types";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";
import { useUserState } from "src/store/user/userState";

type Props = {
  time: Time;
  mode: LiveTimer["mode"];
  episode_id: string;
};

export const useLiveChatInput = ({ episode_id, mode, time }: Props) => {
  const [content, setContent] = useState<string>("");
  const user = useUserState((state) => state.user);
  const { insetChat } = useMutateLiveChat();

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!content.trim()) return;
      const object = {
        episode_id,
        content: content.trim(),
        comment_time: mode === "down" ? 0 : timeToSecond(time),
        commenter_name: user?.user_name || "匿名",
      };
      await insetChat.mutateAsync({
        object,
      });
      setContent("");
    } catch (error) {
      //
    }
  };

  return {
    content,
    setContent,
    onSubmitHandler,
    isLoading: insetChat.isLoading,
  };
};
