import { useEffect, useMemo } from "react";
import { fetchInfiniteNextPage } from "src/features/chats/common/utils/infinite";
import { useMutateReactions } from "src/features/reactions/common/api/useMutateReactions";
import { ReactionType } from "src/features/reactions/common/types";
import {
  getReactionsData,
  parseReactionsData,
} from "src/features/reactions/common/utils";
import { useInfiniteWorkReactions } from "src/features/reactions/works/api/useInfiniteWorkReactions";
import { useTimerState } from "src/features/timer/store";
import { Emoji_Types_Enum } from "src/gql/graphql";

export const useWorkReactions = (work_id: number) => {
  const { mutateAsync } = useMutateReactions();
  const time = useTimerState((state) => state.getTime());
  const { data, fetchNextPage, isPending, isFetchingNextPage } =
    useInfiniteWorkReactions({
      enabled: !!work_id,
      work_id,
    });

  const onSubmitHandler = async (
    value: ReactionType[Emoji_Types_Enum] & { type: Emoji_Types_Enum },
    reactions: ReactionType
  ) => {
    const objects = parseReactionsData(value, reactions, work_id);

    try {
      await mutateAsync({
        objects,
      });
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    fetchInfiniteNextPage({
      pageParams: data?.pageParams,
      isFetchingNextPage,
      time,
      fetchNextPage,
    });
  }, [data?.pageParams, work_id, fetchNextPage, isFetchingNextPage, time]);

  const reactions = useMemo(() => {
    if (!data?.pages || time === 0) return [];
    const flatData = data.pages.flatMap((page) => page.reactions_by_work_id);

    const timerFilteredData = flatData.filter(
      (reaction) =>
        reaction.reactions_time <= time && reaction.reactions_time >= time - 5
    );

    const result = timerFilteredData.flatMap((reaction) =>
      getReactionsData({
        count: reaction.push_count,
        type: reaction.emoji_type,
        id: reaction.id,
        reactions_time: reaction.reactions_time,
      })
    );

    return result;
  }, [data?.pages, time]);

  return {
    onSubmitHandler,
    data: reactions,
    isPending,
  };
};
