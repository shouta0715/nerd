import React, { FC } from "react";
import { CommentInput } from "src/features/comments/components/CommentInput";
import { useWorkCommentInput } from "src/features/comments/hooks/useWorkCommentInput";
import { CommentsFilter } from "src/features/comments/types";

type Props = {
  work_id: number;
  filter: CommentsFilter;
};

export const WorkCommentInput: FC<Props> = ({ work_id, filter }) => {
  const { onSubmitHandler, isLoading } = useWorkCommentInput(work_id, filter);

  return (
    <CommentInput isLoading={isLoading} onSubmitHandler={onSubmitHandler} />
  );
};
