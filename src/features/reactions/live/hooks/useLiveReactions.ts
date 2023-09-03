import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { useMutateReactions } from "src/features/reactions/common/api/useMutateReactions";
import {
  ReactionType,
  ViewReactionsData,
} from "src/features/reactions/common/types";
import { parseReactionsData } from "src/features/reactions/common/utils";
import { Emoji_Types_Enum } from "src/gql/graphql";

export const useLiveReactions = (episode_id: string) => {
  const { mutateAsync } = useMutateReactions();
  const queryClient = useQueryClient();

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

  const reactions = queryClient.getQueryData<ViewReactionsData>([
    "reactions",
    { episode_id },
  ]);

  return {
    onSubmitHandler,
    reactions: reactions ?? [],
  };
};
