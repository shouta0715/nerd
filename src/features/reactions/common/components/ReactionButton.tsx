import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React, { FC } from "react";
import { Button } from "src/components/Elements/Button";
import { Reaction } from "src/features/reactions/common/components/Reaction";
import { useReactionButton } from "src/features/reactions/common/hooks/useReactionButton";
import {
  ReactionType,
  reactionsData,
} from "src/features/reactions/common/types";
import { Emoji_Types_Enum } from "src/gql/graphql";

type Props = {
  onSubmitHandler: (
    value: ReactionType[Emoji_Types_Enum] & { type: Emoji_Types_Enum },
    reactions: ReactionType
  ) => Promise<void>;
};

export const ReactionButton: FC<Props> = ({ onSubmitHandler }) => {
  const { isShow, handleClick, setIsShow, reactions } = useReactionButton({
    onSubmitHandler,
  });

  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2">
        {reactions.map((reaction) => (
          <Reaction key={reaction.id} reaction={reaction} />
        ))}
      </div>
      <div
        className={clsx(
          "absolute bottom-14 grid origin-top gap-y-4 rounded-full  transition-[grid-template-rows] duration-300 ease-in-out lg:bottom-16",
          isShow
            ? "grid-rows-[1fr] bg-white py-2 shadow-lg ring-1 ring-gray-900/5"
            : "grid-rows-[0fr]"
        )}
      >
        <div className="flex flex-col gap-y-2 overflow-hidden">
          {reactionsData.map((reaction) => (
            <Button
              key={reaction.value}
              aria-label={`${reaction.label}ボタン`}
              className="h-10 w-10 rounded-full border-none lg:h-12 lg:w-12"
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
        className="grid h-10  w-10 place-items-center rounded-full bg-white shadow-lg ring-1 ring-gray-900/5 lg:h-12 lg:w-12"
        onClick={() => setIsShow((prev) => !prev)}
      >
        {isShow ? (
          <ChevronDoubleDownIcon className="h-6 w-6 text-indigo-600" />
        ) : (
          <HeartIcon className="h-6 w-6 text-pink-600 lg:h-8 lg:w-8" />
        )}
      </Button>
    </>
  );
};
