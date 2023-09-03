import { ReactionType } from "src/features/reactions/common/types";
import { parseReactionsData } from "src/features/reactions/common/utils";
import { Emoji_Types_Enum } from "src/gql/graphql";

const disableMocksReactions: ReactionType = {
  [Emoji_Types_Enum.Heart]: {
    count: 0,
    reactions_time: null,
  },
  [Emoji_Types_Enum.Bad]: {
    count: 0,
    reactions_time: null,
  },
  [Emoji_Types_Enum.Laugh]: {
    count: 0,
    reactions_time: null,
  },
  [Emoji_Types_Enum.Surprise]: {
    count: 0,
    reactions_time: null,
  },
  [Emoji_Types_Enum.Tear]: {
    count: 0,
    reactions_time: null,
  },
  values: [],
};

const mocksReactions: ReactionType = {
  [Emoji_Types_Enum.Heart]: {
    count: 10,
    reactions_time: 10,
  },
  [Emoji_Types_Enum.Bad]: {
    count: 1,
    reactions_time: 1,
  },
  [Emoji_Types_Enum.Laugh]: {
    count: 0,
    reactions_time: null,
  },
  [Emoji_Types_Enum.Surprise]: {
    count: 0,
    reactions_time: null,
  },
  [Emoji_Types_Enum.Tear]: {
    count: 0,
    reactions_time: null,
  },
  values: [],
};

const mocksReactionValue: ReactionType[Emoji_Types_Enum] & {
  type: Emoji_Types_Enum;
} = {
  type: Emoji_Types_Enum.Heart,
  count: 1,
  reactions_time: 1,
};

describe("parseReactionsData", () => {
  test("reactionsの値が全て0の場合、valueの値を返す", () => {
    const result = parseReactionsData(
      mocksReactionValue,
      disableMocksReactions,
      "1"
    );

    expect(result).toStrictEqual({
      episode_id: "1",
      emoji_type: mocksReactionValue.type,
      reactions_time: mocksReactionValue.reactions_time,
      push_count: mocksReactionValue.count,
      work_id: null,
    });
  });

  test("reactions.countの値が0のものは取り除かれて、ReactionValueとmergeされた値を返す", () => {
    const result = parseReactionsData(mocksReactionValue, mocksReactions, "1");

    expect(result).toStrictEqual([
      {
        episode_id: "1",
        emoji_type: Emoji_Types_Enum.Heart,
        reactions_time: 10,
        push_count: 11,
        work_id: null,
      },
      {
        episode_id: "1",
        emoji_type: Emoji_Types_Enum.Bad,
        reactions_time: 1,
        push_count: 1,
        work_id: null,
      },
    ]);
  });

  test("idがnumberの場合、episode_idはnullになる", () => {
    const result = parseReactionsData(mocksReactionValue, mocksReactions, 1);

    expect(result).toStrictEqual([
      {
        episode_id: null,
        emoji_type: Emoji_Types_Enum.Heart,
        reactions_time: 10,
        push_count: 11,
        work_id: 1,
      },
      {
        episode_id: null,
        emoji_type: Emoji_Types_Enum.Bad,
        reactions_time: 1,
        push_count: 1,
        work_id: 1,
      },
    ]);
  });
});
