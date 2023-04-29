import React, { FC } from "react";
import { CommentInput } from "src/features/comments/components/CommentInput";
import { useEpisodeCommentInput } from "src/features/comments/hooks/useEpisodeCommentInput";
import { CommentsFilter } from "src/features/comments/types";

type Props = {
  episode_id: string;
  filter: CommentsFilter;
};

export const EpisodeCommentInput: FC<Props> = ({ episode_id, filter }) => {
  const { onSubmitHandler, isLoading } = useEpisodeCommentInput(
    episode_id,
    filter
  );

  return (
    <CommentInput isLoading={isLoading} onSubmitHandler={onSubmitHandler} />
  );
};
