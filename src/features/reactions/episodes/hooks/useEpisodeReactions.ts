import { useCallback, useEffect, useMemo } from "react";
import { fetchInfiniteNextPage } from "src/features/chats/common/utils/infinite";
import { useMutateReactions } from "src/features/reactions/common/api/useMutateReactions";
import { ReactionType } from "src/features/reactions/common/types";
import {
  getReactionsData,
  parseReactionsData,
} from "src/features/reactions/common/utils";
import { useInfiniteEpisodeReactions } from "src/features/reactions/episodes/api/useInfiniteEpisodeReactions";
import { useTimerState } from "src/features/timer/store";
import { Emoji_Types_Enum } from "src/gql/graphql";

export const useEpisodeReactions = (episode_id: string) => {
  const { mutateAsync } = useMutateReactions();
  const time = useTimerState((state) => state.getTime());

  const { data, fetchNextPage, isPending, isFetchingNextPage } =
    useInfiniteEpisodeReactions({
      enabled: !!episode_id,
      episode_id,
    });
  const onSubmitHandler = useCallback(
    async (
      value: ReactionType[Emoji_Types_Enum] & { type: Emoji_Types_Enum },
      reactions: ReactionType
    ) => {
      const objects = parseReactionsData(value, reactions, episode_id);

      mutateAsync({
        objects,
      });
    },
    [episode_id, mutateAsync]
  );

  useEffect(() => {
    fetchInfiniteNextPage({
      pageParams: data?.pageParams,
      isFetchingNextPage,
      time,
      fetchNextPage,
    });
  }, [data?.pageParams, episode_id, fetchNextPage, isFetchingNextPage, time]);

  const reactions = useMemo(() => {
    if (!data?.pages || time === 0) return [];
    const flatData = data.pages.flatMap((page) => page.reactions_by_episode_id);

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
