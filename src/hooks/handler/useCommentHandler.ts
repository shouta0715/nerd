import React, { useCallback } from "react";
import { Comments_Insert_Input } from "../../generated/graphql";
import { useCommentInputStore } from "../../store/comment/commentType";
import { useMutateComment } from "../comments/useMutateComment";

export const useCommentHandler = (post_id: string) => {
  const mutateComment = useMutateComment();
  const resetComment = useCommentInputStore((state) => state.resetComment);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>, object: Comments_Insert_Input) => {
      e.preventDefault();
      if (!object.content) return;
      mutateComment.mutate({
        object: { ...object, post_id },
      });
      resetComment();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [post_id]
  );

  return handleSubmit;
};
