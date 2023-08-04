import React, { FC } from "react";
import { Comments } from "src/features/comments/components/Comments";
import { useCommentsEpisode } from "src/features/comments/hooks/useCommentsEpisode";

type Props = {
  episode_id: string;
};

export const EpisodeComments: FC<Props> = ({ episode_id }) => {
  const { data, ref, hasNextPage, isLoading, refetchHandler, order } =
    useCommentsEpisode(episode_id);

  return (
    <Comments
      ref={ref}
      data={data}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
      mutateKey={[
        "comments",
        {
          episode_id,
          order,
        },
      ]}
      refetchHandler={refetchHandler}
    />
  );
};
