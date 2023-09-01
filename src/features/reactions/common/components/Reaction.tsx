import clsx from "clsx";
import React, { FC, memo } from "react";
import { ReactionData } from "src/features/reactions/common/types";

type Props = {
  reaction: ReactionData & { id: string };
};

export const Reaction: FC<Props> = memo(({ reaction }) => {
  return (
    <div
      className={clsx(
        "absolute flex h-6 w-6 animate-bubble flex-col gap-y-2 overflow-hidden"
      )}
      style={
        {
          "--random-translate-x-25": `${Math.random() * 20}px`,
          "--random-translate-x-50": `${Math.random() * -15}px`,
          "--random-translate-x-75": `${Math.random() * 20}px`,
        } as React.CSSProperties
      }
    >
      {typeof reaction.icon === "string" ? (
        <span className="block text-xl lg:text-2xl">{reaction.icon}</span>
      ) : (
        <reaction.icon className={clsx("h-6 w-6", reaction.color)} />
      )}
    </div>
  );
});
