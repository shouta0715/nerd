import { useInterval } from "@mantine/hooks";
import { useEffect } from "react";
import { useTimerState } from "src/store/timer/timerStore";

export const useCountUp = () => {
  const setTimer = useTimerState((state) => state.setTime);
  const time = useTimerState((state) => state.time);
  const interval = useInterval(setTimer, 1000);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => interval.stop(), []);

  return {
    minutes: time.minutes.toString().padStart(2, "0"),
    seconds: time.seconds.toString().padStart(2, "0"),
    hours: time.hours.toString().padStart(2, "0"),
    interval,
  };
};
