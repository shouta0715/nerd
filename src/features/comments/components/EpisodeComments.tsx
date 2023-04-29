import React, { FC } from "react";
import { Comments } from "src/features/comments/components/Comments";
import { useCommentsEpisode } from "src/features/comments/hooks/useCommentsEpisode";
import { CommentsFilter } from "src/features/comments/types";

type Props = {
  episode_id: string;
  filter: CommentsFilter;
  setFilter: React.Dispatch<React.SetStateAction<CommentsFilter>>;
};

export const EpisodeComments: FC<Props> = ({
  episode_id,
  filter,
  setFilter,
}) => {
  const { data, ref, hasNextPage, isLoading } = useCommentsEpisode(
    episode_id,
    filter
  );

  return (
    <Comments
      ref={ref}
      data={data}
      filter={filter}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
      setFilter={setFilter}
    />
  );
};
