import { MouseEvent, useState } from "react";
import { useNotificationState } from "src/components/Notification/store";
import {
  ReactionData,
  ReactionType,
  defaultReaction,
} from "src/features/reactions/common/types";
import { useTimerState } from "src/features/timer/store";
import { Emoji_Types_Enum } from "src/gql/graphql";
import { useDebounce } from "src/hooks/useDebounce";

type HandleClick = (
  event: MouseEvent<HTMLButtonElement>,
  reaction: ReactionData
) => void;

type Props = {
  onSubmitHandler: (
    value: ReactionType[Emoji_Types_Enum] & { type: Emoji_Types_Enum },
    reactions: ReactionType
  ) => Promise<void>;
};

export const useReactionButton = ({ onSubmitHandler }: Props) => {
  const [reactions, setReactions] = useState<ReactionType>(defaultReaction);
  const [isShow, setIsShow] = useState(false);
  const showToast = useNotificationState((state) => state.onShow);
  const getTime = useTimerState((state) => state.getTime);
  const debounce = useDebounce(1000 * 5);

  const submitHandlers = async (
    value: ReactionType[Emoji_Types_Enum] & { type: Emoji_Types_Enum }
  ) => {
    try {
      await onSubmitHandler(value, reactions);
    } catch (error) {
      showToast({
        title: "リアクションできませんでした。",
        message: "通信環境の良いところで再度お試しください。",
        type: "error",
      });
    }
  };

  const handleClick: HandleClick = (e, reaction) => {
    e.preventDefault();

    setReactions((prev) => {
      const values = [
        ...prev.values,
        { ...reaction, id: new Date().getTime().toString() },
      ];

      return {
        ...prev,
        [reaction.value]: {
          count: prev[reaction.value].count + 1,
          reactions_time: prev[reaction.value].reactions_time ?? getTime(),
        },
        values,
      };
    });

    debounce(() => {
      submitHandlers({
        type: reaction.value,
        count: reactions[reaction.value].count + 1,
        reactions_time: reactions[reaction.value].reactions_time ?? getTime(),
      });
      setReactions(defaultReaction);
    });
  };

  return {
    reactions: reactions.values,
    isShow,
    handleClick,
    setIsShow,
  };
};
