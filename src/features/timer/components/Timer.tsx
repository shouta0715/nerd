/* eslint-disable react/no-array-index-key */
import { FC } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";

import { Panel } from "src/features/timer/components/Panel";

type Props = {
  hours: string;
  minutes: string;
  seconds: string;
  id: string;
  big?: boolean;
};
export const Timer: FC<Props> = ({
  hours,
  minutes,
  seconds,
  id,
  big = false,
}) => {
  if (!id) return <Skeleton theme="timer" />;

  return (
    <div className="flex space-x-4 md:space-x-6">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 flex space-x-2">
          {hours.split("").map((character, index) => (
            <Panel
              key={`hours-${index}-${id}`}
              big={big}
              character={character}
            />
          ))}
        </div>
        <span className="text-xs font-semibold">時間</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 flex space-x-2">
          {minutes.split("").map((character, index) => (
            <Panel
              key={`minutes-${index}-${id}`}
              big={big}
              character={character}
            />
          ))}
        </div>
        <span className="text-xs font-semibold">分</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 flex space-x-2">
          {seconds.split("").map((character, index) => (
            <Panel
              key={`seconds-${index}-${id}`}
              big={big}
              character={character}
            />
          ))}
        </div>
        <span className="text-xs font-semibold">秒</span>
      </div>
    </div>
  );
};
