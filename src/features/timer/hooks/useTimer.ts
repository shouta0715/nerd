import { CountDownProps, CountUpProps, Time } from "src/features/live/types";

export const useTimer = () => {
  const countDown = ({
    prevTime,
    setMode,
    intervalId,
  }: CountDownProps): Time => {
    const { hours, minutes, seconds } = prevTime;

    if (hours === 0 && minutes === 0 && seconds === 0) {
      setMode("up");

      if (intervalId.current) clearInterval(intervalId.current);

      return prevTime;
    }

    return {
      hours: minutes === 0 && hours > 0 ? hours - 1 : hours,
      minutes: seconds === 0 ? minutes - 1 : minutes,
      seconds: seconds === 0 ? 59 : seconds - 1,
    };
  };

  const countUp = ({
    prevTime,
    maxTime,
    setMode,
    intervalId,
  }: CountUpProps): Time => {
    const { hours, minutes, seconds } = prevTime;

    if (
      hours === maxTime.hours &&
      minutes === maxTime.minutes &&
      seconds === maxTime.seconds
    ) {
      setMode("finish");

      if (intervalId.current) clearInterval(intervalId.current);

      return prevTime;
    }

    return {
      seconds: seconds === 59 ? 0 : seconds + 1,
      minutes: seconds === 59 ? minutes + 1 : minutes,
      hours: minutes === 59 ? hours + 1 : hours,
    };
  };

  return {
    countDown,
    countUp,
  };
};
