import React, { FC, memo } from "react";
import { Chats } from "src/features/chats/components/Chats";
import { useChatsEpisode } from "src/features/chats/hooks/useChatsEpisode";

type Props = {
  episode_id: string;
};

export const EpisodeChats: FC<Props> = memo(({ episode_id }) => {
  const { data, bottomRef, isBottom, entry, time, isLoading } =
    useChatsEpisode(episode_id);

  return (
    <Chats
      bottomRef={bottomRef}
      chats={data}
      entry={entry}
      isBottom={isBottom}
      isLoading={isLoading}
      time={time}
    />
  );
});
