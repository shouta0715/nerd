import { useTimerState } from "src/features/timer/store/timerStore";

export const useCountUp = () => {
  const time = useTimerState((state) => state.time);

  return {
    minutes: time.minutes.toString().padStart(2, "0"),
    seconds: time.seconds.toString().padStart(2, "0"),
    hours: time.hours.toString().padStart(2, "0"),
  };
};
