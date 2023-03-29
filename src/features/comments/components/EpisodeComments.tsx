import React, { FC } from "react";
import { Comments } from "src/features/comments/components/Comments";
import { useCommentsEpisode } from "src/features/comments/hooks/useCommentsEpisode";

type Props = {
  episode_id: string;
};

export const EpisodeComments: FC<Props> = ({ episode_id }) => {
  const { data, ref, hasNextPage } = useCommentsEpisode(episode_id);

  return <Comments ref={ref} data={data} hasNextPage={hasNextPage} />;
};
