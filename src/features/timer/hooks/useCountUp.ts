import { useEffect } from "react";
import { useTimerState } from "src/features/timer/store/timerStore";

export const useCountUp = (initialStart = false) => {
  const { time, interval } = useTimerState((state) => ({
    time: state.time,
    interval: state.interval,
  }));

  useEffect(() => {
    if (!interval.active && initialStart) {
      interval.start();
    }

    return () => {
      interval.reset();
    };
    //! eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialStart]);

  return {
    minutes: time.minutes.toString().padStart(2, "0"),
    seconds: time.seconds.toString().padStart(2, "0"),
    hours: time.hours.toString().padStart(2, "0"),
  };
};
