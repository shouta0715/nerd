/* eslint-disable consistent-return */
import { useEffect, useRef, useState } from "react";
import {
  CountDownProps,
  CountUpProps,
  LiveTimer,
  LiveTimerProps,
  Time,
} from "src/features/live/types";
import { getInitialTime } from "src/features/live/utils/getInitialTime";
import { getIsStarted } from "src/features/live/utils/getIsStarted";
import { getMaxCountUpTime } from "src/features/live/utils/getMaxCountUpTime";

const countDown = ({ prevTime, setMode, intervalId }: CountDownProps): Time => {
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

export const useLiveTimer = ({
  start_time,
  end_time,
}: LiveTimerProps): LiveTimer => {
  const [mode, setMode] = useState<LiveTimer["mode"]>(
    getIsStarted(start_time) ? "up" : "down"
  );

  const [time, setTime] = useState<Time>(getInitialTime(start_time));
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!start_time || !end_time) return;

    setTime(getInitialTime(start_time));
  }, [end_time, start_time]);

  useEffect(() => {
    if (!start_time || !end_time) return;
    if (mode === "down") {
      intervalId.current = setInterval(() => {
        setTime((prevTime) => countDown({ prevTime, setMode, intervalId }));
      }, 1000);

      return () => {
        if (intervalId.current) clearInterval(intervalId.current);
      };
    }

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
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [end_time, mode, start_time, time.hours, time.minutes, time.seconds]);

  return {
    mode,
    time: {
      hours: time.hours.toString().padStart(2, "0"),
      minutes: time.minutes.toString().padStart(2, "0"),
      seconds: time.seconds.toString().padStart(2, "0"),
    },
  };
};
