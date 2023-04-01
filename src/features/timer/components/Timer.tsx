import { FC } from "react";
import { CountDownTimer } from "src/features/timer/components/CountDownTimer";
import { CountUpTimer } from "src/features/timer/components/CountUpTImer";

type Props = {
  start_time: string;
  episodeId?: string;
  isCountDown: boolean;
  setIsCountDown: React.Dispatch<React.SetStateAction<boolean>>;
};

const Timer: FC<Props> = ({
  start_time,
  episodeId,
  isCountDown,
  setIsCountDown,
}) =>
  isCountDown ? (
    <CountDownTimer
      id={episodeId}
      setIsCountDown={setIsCountDown}
      start_time={start_time}
    />
  ) : (
    <CountUpTimer id={episodeId} />
  );

export default Timer;
