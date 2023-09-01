import React, { FC } from "react";
import { Reactions } from "src/features/reactions/common/components/Reactions";

import { useEpisodeReactions } from "src/features/reactions/episodes/hooks/useEpisodeReactions";

type Props = {
  episode_id: string;
};

export const EpisodeReactions: FC<Props> = ({ episode_id }) => {
  const { onSubmitHandler, data } = useEpisodeReactions(episode_id);

  return <Reactions data={data} onSubmitHandler={onSubmitHandler} />;
};
