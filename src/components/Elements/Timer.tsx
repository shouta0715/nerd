/* eslint-disable react/no-array-index-key */
import { Text } from "@mantine/core";
import React, { FC } from "react";
import { useTimer } from "../../hooks/time/useTimer";
import { Panel } from "./Panel";

type Props = {
  start_time: string;
  id: string;
  text: string;
};

export const Timer: FC<Props> = ({ start_time, id, text }) => {
  const { time } = useTimer(start_time ?? "2000-01-01T00:00:00+00:00");
  const hours = time.hours.toString().padStart(2, "0");
  const minutes = time.minutes.toString().padStart(2, "0");
  const seconds = time.seconds.toString().padStart(2, "0");

  return (
    <div className="flex flex-col">
      <Text
        color="indigo"
        className="m-0 mx-auto mb-2.5  px-10 text-lg font-bold"
      >
        {text}
      </Text>
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
          <span className="text-sm font-bold ">時間</span>
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
          <span className="text-sm font-bold ">分</span>
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
          <span className="text-sm font-bold ">秒</span>
        </div>
      </div>
    </div>
  );
};
