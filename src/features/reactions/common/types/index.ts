import { HandThumbDownIcon, HeartIcon } from "@heroicons/react/24/solid";
import { Emoji_Types_Enum } from "src/gql/graphql";

export type ReactionData = {
  value: Emoji_Types_Enum;
  icon: string | typeof HandThumbDownIcon | typeof HeartIcon;
  color?: string;
  label: string;
};

export type ReactionType = {
  [k in Emoji_Types_Enum]: {
    count: number;
    reactions_time: number | null;
  };
} & { values: (ReactionData & { id: string })[] };

export type ViewReactionsData = (ReactionData & {
  id: string | number;
  delay?: number;
})[];

export const reactionsData: {
  [k in Emoji_Types_Enum]: ReactionData;
} = {
  [Emoji_Types_Enum.Heart]: {
    value: Emoji_Types_Enum.Heart,
    icon: HeartIcon,
    color: "text-pink-600",
    label: "いいね！",
  },
  [Emoji_Types_Enum.Bad]: {
    value: Emoji_Types_Enum.Bad,
    icon: HandThumbDownIcon,
    color: "text-gray-600",
    label: "バッド！",
  },
  [Emoji_Types_Enum.Laugh]: {
    value: Emoji_Types_Enum.Laugh,
    icon: "😂",
    label: "おもしろい！",
  },
  [Emoji_Types_Enum.Surprise]: {
    value: Emoji_Types_Enum.Surprise,
    icon: "😮",
    label: "びっくり！",
  },
  [Emoji_Types_Enum.Tear]: {
    value: Emoji_Types_Enum.Tear,
    icon: "😭",
    label: "かなしい",
  },
};

const initialData = {
  count: 0,
  reactions_time: null,
};

export const defaultReaction: ReactionType = {
  [Emoji_Types_Enum.Heart]: initialData,
  [Emoji_Types_Enum.Bad]: initialData,
  [Emoji_Types_Enum.Laugh]: initialData,
  [Emoji_Types_Enum.Surprise]: initialData,
  [Emoji_Types_Enum.Tear]: initialData,
  values: [],
};
