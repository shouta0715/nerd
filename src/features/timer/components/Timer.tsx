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
    <CountUpTimer episodeId={episodeId} />
  ) : (
    <CountDownTimer start_time={start_time} id={episodeId} />
  )
);

export default Timer;
