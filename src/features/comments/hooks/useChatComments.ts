import { useDeferredValue, useEffect, useMemo } from "react";
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

    const flatData = data.pages
      .map((page) => page.chat_comments_by_episode_id)
      .flat();

    return flatData;
  }, [data?.pages]);

  const timeFilterData = useMemo(() => {
    if (!chatCommentData) return [];

    const filteredData = chatCommentData.filter(
      (comment) => comment.comment_time <= time
    );

    return filteredData;
  }, [chatCommentData, time]);

  const deferredData = useDeferredValue(timeFilterData);

  useEffect(() => {
    // eslint-disable-next-line no-useless-return
    if (time % 30 !== 0 || time === 0) return;

    fetchNextPage({
      pageParam: {
        min_time: time + 1,
        max_time: time + 30,
      },
    });
  }, [fetchNextPage, time]);

  return { data: deferredData };
};
