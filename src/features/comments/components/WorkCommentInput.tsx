import React, { FC } from "react";
import { CommentInput } from "src/features/comments/components/CommentInput";
import { useWorkCommentInput } from "src/features/comments/hooks/useWorkCommentInput";

type Props = {
  work_id: number;
};

export const WorkCommentInput: FC<Props> = ({ work_id }) => {
  const { onSubmitHandler, isLoading } = useWorkCommentInput(work_id);

  return (
    <CommentInput isLoading={isLoading} onSubmitHandler={onSubmitHandler} />
  );
};
