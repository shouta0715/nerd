import React, { FC } from "react";
import { ChatInput } from "src/features/chats/common/components/ChatInput";
import { useSubmitChatEpisode } from "src/features/chats/episodes/hooks/useSubmitChatEpisode";

type Props = {
  episode_id: string;
};

export const EpisodeChatInput: FC<Props> = ({ episode_id }) => {
  const { onSubmitHandler, isLoading, value, setValue } = useSubmitChatEpisode({
    episode_id,
  });

  return (
    <ChatInput
      isLoading={isLoading}
      onSubmitHandler={onSubmitHandler}
      setContent={setValue}
      value={value}
    />
  );
};
