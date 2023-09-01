import clsx from "clsx";
import React, { FC, memo, useRef } from "react";
import { ViewReactionsData } from "src/features/reactions/common/types";

type Props = {
  reaction: ViewReactionsData[number];
};

export const Reaction: FC<Props> = memo(({ reaction }) => {
  const randomTranslateXRefs = useRef<number[]>([
    Math.floor(Math.random() * 100) - 50,
    Math.floor(Math.random() * 100) - 50,
  ]);

  return (
    <div
      className={clsx(
        "absolute flex h-6 w-6 animate-bubble flex-col gap-y-2 overflow-hidden opacity-0"
      )}
      style={
        {
          "--random-translate-x-0": `${randomTranslateXRefs.current[0]}px`,
          "--random-translate-x-1": `${randomTranslateXRefs.current[1]}px`,
          animationDelay: `${reaction.delay || 0}s`,
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
