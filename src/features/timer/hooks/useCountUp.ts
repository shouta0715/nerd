import { useInterval } from "@mantine/hooks";
import { useEffect } from "react";
import { useTimerState } from "src/features/timer/store/timerStore";

export const useCountUp = () => {
  const setTimer = useTimerState((state) => state.setTime);
  const time = useTimerState((state) => state.time);
  const interval = useInterval(setTimer, 1000);
  const setInterval = useTimerState((state) => state.setInterval);

  useEffect(() => {
    setInterval(interval);
  }, [interval, setInterval, interval.active]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => interval.stop(), []);

  return {
    minutes: time.minutes.toString().padStart(2, "0"),
    seconds: time.seconds.toString().padStart(2, "0"),
    hours: time.hours.toString().padStart(2, "0"),
    interval,
  };
};
