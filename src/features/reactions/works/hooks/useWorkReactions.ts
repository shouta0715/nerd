import { useMutateReactions } from "src/features/reactions/common/api/useMutateReactions";
import { ReactionType } from "src/features/reactions/common/types";
import { parseReactionsData } from "src/features/reactions/common/utils";
import { Emoji_Types_Enum } from "src/gql/graphql";

export const useWorkReactions = (work_id: number) => {
  const { mutateAsync } = useMutateReactions();

  const onSubmitHandler = async (
    value: ReactionType[Emoji_Types_Enum] & { type: Emoji_Types_Enum },
    reactions: ReactionType
  ) => {
    const objects = parseReactionsData(value, reactions, work_id);

    mutateAsync({
      objects,
    });
  };

  return {
    onSubmitHandler,
  };
};
