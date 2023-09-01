import React, { FC, useState } from "react";
import { Reaction } from "src/features/reactions/common/components/Reaction";
import { ReactionButton } from "src/features/reactions/common/components/ReactionButton";
import {
  ReactionType,
  ViewReactionsData,
  defaultReaction,
} from "src/features/reactions/common/types";
import { Emoji_Types_Enum } from "src/gql/graphql";

type Props = {
  onSubmitHandler: (
    value: ReactionType[Emoji_Types_Enum] & { type: Emoji_Types_Enum },
    reactions: ReactionType
  ) => Promise<void>;
  data: ViewReactionsData;
  disabledAction?: boolean;
};

export const Reactions: FC<Props> = ({
  onSubmitHandler,
  data,
  disabledAction,
}) => {
  const [reactions, setReactions] = useState<ReactionType>(defaultReaction);

  return (
    <div className="pointer-events-none absolute inset-0 px-2 lg:px-3">
      <div className="pointer-events-none flex h-full w-full items-end">
        <div className="sticky bottom-20 flex w-full justify-end">
          <div className="absolute left-1/2 -translate-x-1/2  ">
            {reactions.values.map((reaction) => (
              <Reaction key={reaction.id} reaction={reaction} />
            ))}
            {data.map((reaction) => (
              <Reaction key={reaction.id} reaction={reaction} />
            ))}
          </div>
          <ReactionButton
            disabledAction={disabledAction}
            onSubmitHandler={onSubmitHandler}
            reactions={reactions}
            setReactions={setReactions}
          />
        </div>
      </div>
    </div>
  );
};
