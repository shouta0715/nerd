/* eslint-disable consistent-return */
import { useEffect, useRef, useState } from "react";
import { useTimer } from "src/features/timer/hooks/useTimer";
import { LiveTimer, LiveTimerProps, Time } from "src/features/timer/types";
import { getInitialTime } from "src/features/timer/utils/getInitialTime";
import { getIsStarted } from "src/features/timer/utils/getIsStarted";
import { getMaxCountUpTime } from "src/features/timer/utils/getMaxCountUpTime";

export const useLiveTimer = ({
  start_time,
  end_time,
}: LiveTimerProps): LiveTimer => {
  const { countDown, countUp } = useTimer();
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
  }, [
    countDown,
    countUp,
    end_time,
    mode,
    start_time,
    time.hours,
    time.minutes,
    time.seconds,
  ]);

  return {
    mode,
    time: {
      hours: time.hours.toString().padStart(2, "0"),
      minutes: time.minutes.toString().padStart(2, "0"),
      seconds: time.seconds.toString().padStart(2, "0"),
    },
  };
};
