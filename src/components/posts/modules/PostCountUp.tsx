/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";
import { useCountUp } from "../../../hooks/time/useCountUp";
import { Panel } from "./Panel";

export const PostCountUp: FC = () => {
  const { seconds, minutes, hours } = useCountUp();

  return (
    <div className="my-4">
      <div className="flex w-full justify-center space-x-4 md:space-x-6">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-2 flex space-x-2">
            {hours.split("").map((character, index) => (
              <Panel
                character={character}
                key={`hours-${character}-${index}`}
              />
            ))}
          </div>
          <span className="text-sm font-bold md:text-sm ">時間</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-2 flex space-x-2">
            {minutes.split("").map((character, index) => (
              <Panel
                character={character}
                key={`minutes-${character}-${index}`}
              />
            ))}
          </div>
          <span className="text-sm font-bold md:text-sm ">分</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-2 flex space-x-2">
            {seconds.split("").map((character, index) => (
              <Panel
                character={character}
                key={`seconds-${character}-${index}`}
              />
            ))}
          </div>
          <span className="text-sm font-bold md:text-sm ">秒</span>
        </div>
      </div>
    </div>
  );
};
