/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";
import { useTimer } from "../../../hooks/time/useTimer";
import { Panel } from "./Panel";

type Props = {
  start_time: string;
  invite_id: string;
  parent: "post" | "comment";
};

export const InviteTimer: FC<Props> = ({ start_time, invite_id, parent }) => {
  const { time } = useTimer(start_time);
  const hours = time.hours.toString().padStart(2, "0");
  const minutes = time.minutes.toString().padStart(2, "0");
  const seconds = time.seconds.toString().padStart(2, "0");

  return (
    <div className="my-4 flex w-full flex-col items-center justify-center">
      <p className="m-0 mb-2.5  px-10 text-lg font-bold text-indigo-500">
        開始まで
      </p>
      <div className="flex w-full justify-center space-x-4 md:space-x-6">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-2 flex space-x-2">
            {hours.split("").map((character, index) => (
              <Panel
                character={character}
                key={`${parent}-hours-${character}-${index}-${invite_id}`}
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
                key={`${parent}-minutes-${character}-${index}-${invite_id}`}
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
                key={`${parent}-seconds-${character}-${index}-${invite_id}`}
              />
            ))}
          </div>
          <span className="text-sm font-bold md:text-sm ">秒</span>
        </div>
      </div>
    </div>
  );
};
