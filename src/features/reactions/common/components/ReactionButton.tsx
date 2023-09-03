import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React, { FC } from "react";
import { Button } from "src/components/Elements/Button";
import { Loader } from "src/components/Elements/Loader";
import { useReactionButton } from "src/features/reactions/common/hooks/useReactionButton";
import {
  ReactionType,
  reactionsData,
} from "src/features/reactions/common/types";
import { useTimerState } from "src/features/timer/store";
import { Emoji_Types_Enum } from "src/gql/graphql";
import { useUserState } from "src/store/user/userState";

type Props = {
  setReactions: React.Dispatch<React.SetStateAction<ReactionType>>;
  reactions: ReactionType;
  onSubmitHandler: (
    value: ReactionType[Emoji_Types_Enum] & { type: Emoji_Types_Enum },
    reactions: ReactionType
  ) => Promise<void>;
  disabledAction?: boolean;
};

export const ReactionButton: FC<Props> = ({
  reactions,
  onSubmitHandler,
  setReactions,
  disabledAction,
}) => {
  const { isShow, handleClick, setIsShow } = useReactionButton({
    onSubmitHandler,
    reactions,
    setReactions,
  });
  const isActive = useTimerState((state) => state.interval.active);
  const time = useTimerState((state) => state.getTime);
  const user = useUserState((state) => state.user);
  const disabled =
    typeof disabledAction === "boolean"
      ? disabledAction
      : !isActive || time() === 0;

  return (
    <>
      <div
        className={clsx(
          "pointer-events-auto absolute bottom-14 grid origin-top gap-y-4 rounded-full  transition-[grid-template-rows] duration-300 ease-in-out lg:bottom-16",
          isShow
            ? "grid-rows-[1fr] bg-white py-2 shadow-lg ring-1 ring-gray-900/5"
            : "grid-rows-[0fr]"
        )}
      >
        <div className="flex flex-col gap-y-0.5 overflow-hidden lg:gap-y-1">
          {Object.values(reactionsData).map((reaction) => (
            <Button
              key={reaction.value}
              aria-label={`${reaction.label}ボタン`}
              className="h-10 w-10 rounded-full border-none py-0 lg:h-12 lg:w-12"
              disabled={disabled || !user}
              onClick={(e) => handleClick(e, reaction)}
            >
              {typeof reaction.icon === "string" ? (
                <span className="block text-2xl lg:text-3xl">
                  {reaction.icon}
                </span>
              ) : (
                <reaction.icon
                  className={clsx("h-6 w-6 lg:h-8 lg:w-8", reaction.color)}
                />
              )}
            </Button>
          ))}
        </div>
      </div>
      <Button
        aria-label={isShow ? "リアクションを閉じる" : "リアクションを開く"}
        className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-white shadow-lg ring-1 ring-gray-900/5 lg:h-12 lg:w-12"
        disabled={disabled || !user}
        onClick={() => setIsShow((prev) => !prev)}
      >
        {user ? (
          isShow ? (
            <ChevronDoubleDownIcon className="h-6 w-6 text-indigo-600" />
          ) : (
            <HeartIcon className="h-6 w-6 text-pink-600 lg:h-8 lg:w-8" />
          )
        ) : (
          <Loader size="xl" />
        )}
      </Button>
    </>
  );
};
