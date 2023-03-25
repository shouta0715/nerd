import { FC, memo } from "react";
import { CountDownTimer } from "src/features/timer/components/CountDownTimer";
import { CountUpTimer } from "src/features/timer/components/CountUpTImer";

type Props = {
  start_time: string;
  episodeId: string;
  isCountUp: boolean;
};

const Timer: FC<Props> = memo(({ start_time, episodeId, isCountUp }) =>
  isCountUp ? (
    <CountUpTimer id={episodeId} />
  ) : (
    <CountDownTimer id={episodeId} start_time={start_time} />
  )
);

export default Timer;
