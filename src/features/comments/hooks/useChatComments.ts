import { useMemo } from "react";
import { useQueryComments } from "src/features/comments/api/useQueryComments";
import { useTimerState } from "src/features/timer/store/timerStore";
import { timeProcessing } from "src/features/timer/utils/timeProcessing";

type Args = {
  episode_id: string;
};

export const useChatComments = ({ episode_id }: Args) => {
  const { data } = useQueryComments(episode_id);
  const time = useTimerState((state) => state.time);
  const { timeToSecond } = timeProcessing();
  const timeFilterData = useMemo(
    () =>
      data?.chat_comments.filter(
        (comment) => comment.time <= timeToSecond(time)
      ),
    [data, time, timeToSecond]
  );

  return { data: timeFilterData };
};
