import { useEffect } from "react";
import { useInterval } from "src/features/timer/hooks/useInterval";
import { useTimerState } from "src/features/timer/store/timerStore";

export const useCountUp = () => {
  const setTimer = useTimerState((state) => state.intervalTime);
  const time = useTimerState((state) => state.time);
  const interval = useInterval(setTimer, 1000);
  const setInterval = useTimerState((state) => state.setInterval);

  useEffect(() => {
    setInterval(interval);

    return () => {
      if (interval.active) {
        interval.stop();
      }
    };
  }, [interval, setInterval, interval.active]);

  return {
    minutes: time.minutes.toString().padStart(2, "0"),
    seconds: time.seconds.toString().padStart(2, "0"),
    hours: time.hours.toString().padStart(2, "0"),
    interval,
  };
};
