import React, { FC } from "react";
import { Chats } from "src/features/chats/common/components/Chats";
import { useChatsEpisode } from "src/features/chats/episodes/hooks/useChatsEpisode";

type Props = {
  episode_id: string;
};

export const EpisodeChats: FC<Props> = ({ episode_id }) => {
  const { data, time, isPending, isSelfScroll } = useChatsEpisode(episode_id);

  return (
    <Chats
      chats={data}
      isPending={isPending}
      isSelfScroll={isSelfScroll}
      time={time}
    />
  );
};
