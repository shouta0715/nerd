import { FC } from "react";
import { CountDownTimer } from "src/features/timer/components/CountDownTimer";
import { CountUpTimer } from "src/features/timer/components/CountUpTImer";
import { useTimerState } from "src/features/timer/store/timerStore";

type Props = {
  start_time: string;
  episodeId?: string;
};

const Timer: FC<Props> = ({ start_time, episodeId }) => {
  const isCountDown = useTimerState((state) => state.isCountDown);

  return isCountDown ? (
    <CountDownTimer id={episodeId} start_time={start_time} />
  ) : (
    <CountUpTimer id={episodeId} />
  );
};

export default Timer;
