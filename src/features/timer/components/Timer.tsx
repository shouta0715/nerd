import { useRouter } from "next/router";
import { FC, memo } from "react";
import { CountDownTimer } from "src/features/timer/components/CountDownTimer";
import { CountUpTimer } from "src/features/timer/components/CountUpTImer";
import { useTimerStatus } from "src/features/timer/hooks/useTimerStatus";

type Props = {
  start_time: string;
  end_time: string;
  episodeId: string;
};

const Timer: FC<Props> = memo(({ start_time, end_time, episodeId }) => {
  const { getIsFinished } = useTimerStatus();
  const router = useRouter();
  const { category } = router.query;

  return category === "archive" ||
    getIsFinished({
      end_time,
    }) ? (
    <CountUpTimer episodeId={episodeId} />
  ) : (
    <CountDownTimer start_time={start_time} id={episodeId} />
  );
});

export default Timer;
