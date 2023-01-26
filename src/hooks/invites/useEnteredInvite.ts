import { useEffect } from "react";
import { useCommentTimeStore } from "../../store/comment/commentType";
import { useSubscriptionComment } from "../comments/useSubscriptionComment";
import { changeTimeToJa } from "../utils/changeTimeToJa";

export const useEnteredInvite = (postId: string, start_time: string) => {
  const statePostId = useCommentTimeStore((state) => state.postId);
  const setPostId = useCommentTimeStore((state) => state.setPostId);
  const resetTime = useCommentTimeStore((state) => state.resetTime);
  const isStart =
    new Date().getTime() - changeTimeToJa(start_time).getTime() > 0;
  useSubscriptionComment(postId);

  useEffect(() => {
    if (!postId) return;
    if (statePostId !== postId) {
      setPostId(postId);
      resetTime();
    }
  }, [postId, resetTime, setPostId, statePostId]);

  return { isStart };
};
