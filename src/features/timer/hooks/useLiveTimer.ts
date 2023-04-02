/* eslint-disable consistent-return */
import { useEffect, useRef, useState } from "react";
import {
  CountDownProps,
  CountUpProps,
  LiveTimer,
  LiveTimerProps,
  Time,
} from "src/features/timer/types";
import { getInitialTime } from "src/features/timer/utils/getInitialTime";
import { getIsStatus } from "src/features/timer/utils/getIsStatus";
import { getMaxCountUpTime } from "src/features/timer/utils/getMaxCountUpTime";

const clearTimerInterval = (
  intervalId: React.MutableRefObject<NodeJS.Timeout | null>
) => {
  if (intervalId.current) {
    clearInterval(intervalId.current);
  }
};

const countDown = ({ prevTime, setMode, intervalId }: CountDownProps): Time => {
  const { hours, minutes, seconds } = prevTime;

  if (hours === 0 && minutes === 0 && seconds === 0) {
    setMode("up");

    clearTimerInterval(intervalId);

    return prevTime;
  }

  // 一秒ずつ減らしていく
  return {
    seconds: seconds === 0 ? 59 : seconds - 1,
    minutes: seconds === 0 ? (minutes - 1 > 0 ? minutes - 1 : 59) : minutes,
    hours:
      seconds === 0 && minutes === 0 ? (hours - 1 > 0 ? hours - 1 : 0) : hours,
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

    clearTimerInterval(intervalId);

    return prevTime;
  }

  // 一秒ずつ増やしていく
  return {
    seconds: seconds === 59 ? 0 : seconds + 1,
    minutes: seconds === 59 ? minutes + 1 : minutes,
    hours: seconds === 59 && minutes === 59 ? hours + 1 : hours,
  };
};

export const useLiveTimer = ({
  start_time,
  end_time,
}: LiveTimerProps): LiveTimer => {
  const [mode, setMode] = useState<LiveTimer["mode"]>(
    getIsStatus({ start_time, end_time })
  );
  const [time, setTime] = useState<Time>(getInitialTime(start_time));
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!start_time || !end_time) return;

    setTime(getInitialTime(start_time));
    setMode(getIsStatus({ start_time, end_time }));
  }, [end_time, start_time]);

  useEffect(() => {
    if (!start_time || !end_time) return;
    if (mode === "down") {
      intervalId.current = setInterval(() => {
        setTime((prevTime) => countDown({ prevTime, setMode, intervalId }));
      }, 1000);

      return () => {
        clearTimerInterval(intervalId);
      };
    }

    if (mode === "up")
      intervalId.current = setInterval(() => {
        setTime((prevTime) =>
          countUp({
            prevTime,
            setMode,
            intervalId,
            maxTime: getMaxCountUpTime({ start_time, end_time }),
          })
        );
      }, 1000);

    return () => {
      clearTimerInterval(intervalId);
    };
  }, [end_time, mode, start_time]);

  return {
    mode,
    time: {
      hours: time.hours.toString().padStart(2, "0"),
      minutes: time.minutes.toString().padStart(2, "0"),
      seconds: time.seconds.toString().padStart(2, "0"),
    },
  };
};
