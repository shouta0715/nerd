import React, { useCallback } from "react";
import { Comments_Insert_Input } from "../../generated/graphql";
import {
  useCommentInputStore,
  useCommentTimeStore,
} from "../../store/comment/commentType";
import { useMutateComment } from "../comments/useMutateComment";
import { timeProcessing } from "../utils/timeProcessing";

export const useCommentHandler = (post_id: string) => {
  const mutateComment = useMutateComment();
  const resetComment = useCommentInputStore((state) => state.resetComment);
  const getTime = useCommentTimeStore((state) => state.getTime);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>, object: Comments_Insert_Input) => {
      e.preventDefault();

      if (!object.content?.trim()) return;
      const { timeToSecond } = timeProcessing();
      mutateComment.mutateAsync({
        object: {
          ...object,
          post_id,
          time: timeToSecond(getTime()),
        },
      });
      resetComment();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [post_id]
  );

  return handleSubmit;
};
