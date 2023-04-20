/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutateChatEpisode } from "src/features/chats/api/useMutateChatEpisode";
import { useSubmitChat } from "src/features/chats/hooks/useSubmitChat";

type Args = {
  episode_id: string;
};

export const useSubmitChatEpisode = ({ episode_id }: Args) => {
  const { insertChat } = useMutateChatEpisode();
  const { content, user, getTime, setContent } = useSubmitChat();

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
      //
    }
  };

  return {
    onSubmitHandler,
    isLoading: insertChat.isLoading,
    setContent,
    content,
  };
};
