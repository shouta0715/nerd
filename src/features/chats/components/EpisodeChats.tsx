import React, { FC, memo } from "react";
import { Chats } from "src/features/chats/components/Chats";
import { useChatsEpisode } from "src/features/chats/hooks/useChatsEpisode";

type Props = {
  episode_id: string;
};

export const EpisodeChats: FC<Props> = memo(({ episode_id }) => {
  const { data, time, isPending, isSelfScroll } = useChatsEpisode(episode_id);

  return (
    <Chats
      chats={data}
      isPending={isPending}
      isSelfScroll={isSelfScroll}
      time={time}
    />
  );
});
