import { useEffect } from "react";
import { useCommentTimeStore } from "../../store/comment/commentType";
import { useSubscriptionComment } from "../comments/useSubscriptionComment";
import { changeTimeToJa } from "../utils/changeTimeToJa";

type Props = {
  invite_id: string;
  start_time: string;
};

export const useEnteredInvite = ({ invite_id, start_time }: Props) => {
  const startInviteId = useCommentTimeStore((state) => state.inviteId);
  const setInviteId = useCommentTimeStore((state) => state.setInviteId);
  const resetTime = useCommentTimeStore((state) => state.resetTime);
  const isStart =
    new Date().getTime() - changeTimeToJa(start_time).getTime() > 0;
  useSubscriptionComment(invite_id);

  useEffect(() => {
    if (!invite_id) return;
    if (startInviteId !== invite_id) {
      setInviteId(invite_id);
      resetTime();
    }
  }, [invite_id, resetTime, setInviteId, startInviteId]);

  return { isStart };
};
