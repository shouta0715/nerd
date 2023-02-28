import { useEffect, useMemo } from "react";
import { useInfiniteQueryChatComments } from "src/features/comments/api/useInfiniteQueryChatComments";
import { useTimerState } from "src/features/timer/store/timerStore";

type Args = {
  episode_id: string;
};

export const useChatComments = ({ episode_id }: Args) => {
  const { data, fetchNextPage } = useInfiniteQueryChatComments({
    episode_id,
    enabled: true,
  });
  const time = useTimerState((state) => state.getTime());

  const chatCommentData = useMemo(() => {
    if (!data?.pages) return [];

    const flatData = data.pages.map((page) => page.chat_comments).flat();

    return flatData;
  }, [data?.pages]);

  const timeFilterData = useMemo(() => {
    if (!chatCommentData) return [];

    let sameTimeCount = 0;

    const filteredData = chatCommentData.filter((comment, index) => {
      if (comment.time > time) return false;
      if (comment.time === chatCommentData[index - 1]?.time) sameTimeCount += 1;
      else sameTimeCount = 0;
      if (sameTimeCount > 50) return false;

      return comment.time <= time;
    });

    return filteredData;
  }, [chatCommentData, time]);

  useEffect(() => {
    // eslint-disable-next-line no-useless-return
    if (time % 30 !== 0 || time === 0) return;

    fetchNextPage({
      pageParam: {
        _gte: time,
        _lt: time + 30,
      },
    });
  }, [fetchNextPage, time]);

  return { data: timeFilterData };
};
