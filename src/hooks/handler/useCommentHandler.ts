import React, { useCallback } from "react";
import { Comments_Insert_Input } from "../../generated/graphql";
import { useCommentInputStore } from "../../store/comment/commentType";

export const useCommentHandler = (invite_id: string) => {
  const resetComment = useCommentInputStore((state) => state.resetComment);
  // const getTime = useCommentTimeStore((state) => state.getTime);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>, object: Comments_Insert_Input) => {
      e.preventDefault();

      if (!object.content?.trim()) return;
      // const { timeToSecond } = timeProcessing();
      // mutateComment.mutateAsync({
      //   object: {
      //     ...object,
      //     invite_id,
      //     time: timeToSecond(getTime()),
      //   },
      // });
      resetComment();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [invite_id]
  );

  return handleSubmit;
};
