/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";
import { Panel } from "src/features/timer/components/Panel";
import { useCountUp } from "src/features/timer/hooks/useCountUp";

type Props = {
  episodeId: string;
};

export const CountUpTimer: FC<Props> = ({ episodeId }) => {
  const { minutes, hours, seconds } = useCountUp();

  return (
    <div className="flex space-x-4 md:space-x-6">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 flex space-x-2">
          {hours.split("").map((character, index) => (
            <Panel
              character={character}
              key={`hours-${character}-${index}-${episodeId}`}
            />
          ))}
        </div>
        <span className="text-xs font-bold ">時間</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 flex space-x-2">
          {minutes.split("").map((character, index) => (
            <Panel
              character={character}
              key={`minutes-${character}-${index}-${episodeId}`}
            />
          ))}
        </div>
        <span className="text-xs font-bold ">分</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 flex space-x-2">
          {seconds.split("").map((character, index) => (
            <Panel
              character={character}
              key={`seconds-${character}-${index}-${episodeId}`}
            />
          ))}
        </div>
        <span className="text-xs font-bold">秒</span>
      </div>
    </div>
  );
};
