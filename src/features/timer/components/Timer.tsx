/* eslint-disable react/no-array-index-key */
import { FC } from "react";
import { TimerSkelton } from "src/components/Elements/Loader/loaders/TimerSkelton";
import { Panel } from "src/features/timer/components/Panel";

type Props = {
  hours: string;
  minutes: string;
  seconds: string;
  id: string;
  isTimeLoading: boolean;
};
export const Timer: FC<Props> = ({
  hours,
  minutes,
  seconds,
  id,
  isTimeLoading,
}) => {
  if (isTimeLoading) {
    return <TimerSkelton />;
  }

  return (
    <div className="flex space-x-4 md:space-x-6">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 flex space-x-2">
          {hours.split("").map((character, index) => (
            <Panel
              key={`hours-${character}-${index}-${id}`}
              character={character}
            />
          ))}
        </div>
        <span className="text-xs font-bold ">時間</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 flex space-x-2">
          {minutes.split("").map((character, index) => (
            <Panel
              key={`minutes-${character}-${index}-${id}`}
              character={character}
            />
          ))}
        </div>
        <span className="text-xs font-bold ">分</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 flex space-x-2">
          {seconds.split("").map((character, index) => (
            <Panel
              key={`seconds-${character}-${index}-${id}`}
              character={character}
            />
          ))}
        </div>
        <span className="text-xs font-bold">秒</span>
      </div>
    </div>
  );
};
