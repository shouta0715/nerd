import React, { FC } from "react";
import { Chats } from "src/features/chats/common/components/Chats";
import { useChatsEpisode } from "src/features/chats/episodes/hooks/useChatsEpisode";
import { useEpisodeReactions } from "src/features/reactions/episodes/hooks/useEpisodeReactions";

type Props = {
  episode_id: string;
};

export const EpisodeChats: FC<Props> = ({ episode_id }) => {
  const { data, time, isPending, isSelfScroll } = useChatsEpisode(episode_id);
  const { onSubmitHandler } = useEpisodeReactions(episode_id);

  return (
    <Chats
      chats={data}
      isPending={isPending}
      isSelfScroll={isSelfScroll}
      onSubmitHandler={onSubmitHandler}
      time={time}
    />
  );
};
