import {
  ReactionData,
  ReactionType,
  reactionsData,
} from "src/features/reactions/common/types";
import { Emoji_Types_Enum, Reactions_Insert_Input } from "src/gql/graphql";

export const parseReactionsData = (
  value: ReactionType[Emoji_Types_Enum] & { type: Emoji_Types_Enum },
  reactions: ReactionType,
  id: string | number
): Reactions_Insert_Input | Reactions_Insert_Input[] => {
  const { values: _, ...actions } = reactions;

  const data = Object.keys(actions)
    .map((key) => {
      return {
        episode_id: typeof id === "number" ? null : id,
        emoji_type: key as Emoji_Types_Enum,
        reactions_time: actions[key as Emoji_Types_Enum].reactions_time,
        push_count: actions[key as Emoji_Types_Enum].count,
        work_id: typeof id === "number" ? id : null,
      };
    })
    .filter((item) => item.push_count !== 0);

  if (data.length === 0) {
    return {
      episode_id: typeof id === "number" ? null : id,
      emoji_type: value.type,
      reactions_time: value.reactions_time,
      push_count: value.count,
      work_id: typeof id === "number" ? id : null,
    };
  }

  const mergeData = data.map((item) => {
    if (item.emoji_type === value.type) {
      return {
        ...item,
        push_count: item.push_count + 1,
      };
    }

    return item;
  });

  return mergeData;
};

export const getReactionsData = ({
  count,
  type,
  id,
}: Omit<ReactionType[Emoji_Types_Enum], "reactions_time"> & {
  type: Emoji_Types_Enum;
  id: number;
}): (ReactionData & { id: string; delay: number })[] => {
  const result = Array.from(
    {
      length: count > 3 ? 3 : count,
    },
    (_, index) => {
      return {
        id: `${id}-${type}-${index}`,
        delay: index * 0.5,
        ...reactionsData[type],
      };
    }
  );

  return result;
};
