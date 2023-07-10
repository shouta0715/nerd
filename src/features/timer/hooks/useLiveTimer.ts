/* eslint-disable consistent-return */
import { useEffect, useRef, useState } from "react";
import {
  CountDownProps,
  CountUpProps,
  LiveTimer,
  LiveTimerProps,
  Time,
} from "src/features/timer/types";
import { getIsAlreadyFinished } from "src/features/timer/utils/getAlreadyFinished";
import { getInitialTime } from "src/features/timer/utils/getInitialTime";
import { getIsStatus } from "src/features/timer/utils/getIsStatus";
import { getMaxCountUpTime } from "src/features/timer/utils/getMaxCountUpTime";

const clearTimerInterval = (
  intervalId: React.MutableRefObject<NodeJS.Timeout | null>
) => {
  if (intervalId.current) clearInterval(intervalId.current);
};

const countDown = ({ prevTime, setMode, intervalId }: CountDownProps): Time => {
  const { hours, minutes, seconds } = prevTime;

  if (hours === 0 && minutes === 0 && seconds === 0) {
    setMode("up");

    clearTimerInterval(intervalId);

    return prevTime;
  }

  if (seconds === 0 && minutes !== 0) {
    return {
      seconds: 59,
      minutes: minutes - 1,
      hours,
    };
  }

  if (seconds === 0 && minutes === 0) {
    return {
      seconds: 59,
      minutes: 59,
      hours: hours - 1,
    };
  }

  return {
    seconds: seconds - 1,
    minutes,
    hours,
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
    // 0を返す

    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

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
  const [time, setTime] = useState<Time>(
    getInitialTime({
      start_time,
      end_time,
    })
  );

  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const isAlreadyFinished = useRef<boolean>(getIsAlreadyFinished(end_time));

  useEffect(() => {
    if (!start_time || !end_time) return;
    if (mode === "down") {
      intervalId.current = setInterval(() => {
        setTime((prevTime) => countDown({ prevTime, setMode, intervalId }));
      }, 1000);

      return () => clearTimerInterval(intervalId);
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

    return () => clearTimerInterval(intervalId);
  }, [end_time, mode, start_time]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (
        document.hidden ||
        isAlreadyFinished.current ||
        mode === "notRegister" ||
        mode === "finish"
      )
        return;

      const newMode = getIsStatus({ start_time, end_time });
      const newTime = getInitialTime({ start_time, end_time });

      if (mode !== newMode) setMode(newMode);

      setTime(newTime);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // クリーンアップ関数
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [end_time, mode, start_time]);

  if (
    mode === "finish" &&
    !(time.hours === 0 && time.minutes === 0 && time.seconds === 0)
  ) {
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  }

  return {
    mode,
    time: {
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds,
    },
    isFinished: mode === "finish",
    isAlreadyFinished: isAlreadyFinished.current,
  };
};
