/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";
import { Panel } from "./Panel";
import { useCountDown } from "src/features/timer/hooks/useCountDown";

type Props = {
  start_time: string;
  id: string;
};

export const CountDownTimer: FC<Props> = ({ start_time, id }) => {
  const { time } = useCountDown(start_time ?? "2000-01-01T00:00:00+00:00");
  const hours = time.hours.toString().padStart(2, "0");
  const minutes = time.minutes.toString().padStart(2, "0");
  const seconds = time.seconds.toString().padStart(2, "0");

  return (
    <div className="flex space-x-4 md:space-x-6">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 flex space-x-2">
          {hours.split("").map((character, index) => (
            <Panel
              character={character}
              key={`hours-${character}-${index}-${id}`}
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
              key={`minutes-${character}-${index}-${id}`}
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
              key={`seconds-${character}-${index}-${id}`}
            />
          ))}
        </div>
        <span className="text-xs font-bold">秒</span>
      </div>
    </div>
  );
};
