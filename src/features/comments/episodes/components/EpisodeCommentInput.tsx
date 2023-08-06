import React, { FC } from "react";
import { CommentInput } from "src/features/comments/common/components/CommentInput";
import { useEpisodeCommentInput } from "src/features/comments/episodes/hooks/useEpisodeCommentInput";

type Props = {
  episode_id: string;
};

export const EpisodeCommentInput: FC<Props> = ({ episode_id }) => {
  const { onSubmitHandler, isLoading } = useEpisodeCommentInput(episode_id);

  return (
    <CommentInput isLoading={isLoading} onSubmitHandler={onSubmitHandler} />
  );
};
