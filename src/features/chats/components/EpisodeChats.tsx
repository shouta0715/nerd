import React, { FC, memo } from "react";
import { Chats } from "src/features/chats/components/Chats";
import { useChatsEpisode } from "src/features/chats/hooks/useChatsEpisode";

type Props = {
  episode_id: string;
};

export const EpisodeChats: FC<Props> = memo(({ episode_id }) => {
  const { data, time, isLoading, isSelfScroll } = useChatsEpisode(episode_id);

  return (
    <Chats
      chats={data}
      isLoading={isLoading}
      isSelfScroll={isSelfScroll}
      time={time}
    />
  );
});
