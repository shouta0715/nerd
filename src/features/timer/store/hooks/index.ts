/* eslint-disable no-shadow */
import { Get, Set, TimerCount } from "src/features/timer/store/types";
import { InitialTimerCount, MaxTime } from "src/features/timer/store/values";
import {
  secondToTime,
  timeToSecond,
} from "src/features/timer/utils/timeProcessing";

export const intervalTime = (set: Set, get: Get) => {
  return () => {
    const { time, interval, downInitialTime, mode } = get();
    const { hours, minutes, seconds } = time;

    if (hours === 10 && minutes === 0 && seconds === 0) {
      interval.stop();

      return;
    }

    set(() => {
      const {
        hours: downHours,
        minutes: downMinutes,
        seconds: downSeconds,
      } = downInitialTime;

      const isFinished =
        downHours === 0 && downMinutes === 0 && downSeconds === 0;

      if (isFinished && mode === "down") {
        get().interval.stop();

        return {
          time: InitialTimerCount,
        };
      }

      if (mode === "down") {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          interval.stop();

          return {
            time: InitialTimerCount,
          };
        }

        const newSeconds = seconds === 0 ? 59 : seconds - 1;
        const newMinutes =
          seconds === 0 ? (minutes === 0 ? 59 : minutes - 1) : minutes;
        const newHours =
          seconds === 0 && minutes === 0
            ? hours === 0
              ? 23
              : hours - 1
            : hours;

        return {
          time: {
            seconds: newSeconds,
            minutes: newMinutes,
            hours: newHours,
          },
        };
      }

      return {
        time: {
          seconds: seconds === 59 ? 0 : seconds + 1,
          minutes: seconds === 59 ? minutes + 1 : minutes,
          hours: minutes === 59 ? hours + 1 : hours,
        },
      };
    });
  };
};

export const setDownInitialTime = (set: Set) => {
  return (time: TimerCount) => {
    set({ downInitialTime: time });
  };
};

export const setTime = (set: Set, get: Get) => (time: TimerCount) => {
  if (timeToSecond(time) < 0) {
    set({
      time: InitialTimerCount,
    });

    return;
  }

  if (timeToSecond(time) > timeToSecond(MaxTime)) {
    set({
      time: MaxTime,
    });

    return;
  }

  const { mode, downInitialTime } = get();

  if (mode === "down" && timeToSecond(time) > timeToSecond(downInitialTime)) {
    set({
      time: downInitialTime,
    });

    return;
  }

  set({ time });
};

export const resetTime = (set: Set) => {
  return () =>
    set({ time: InitialTimerCount, downInitialTime: InitialTimerCount });
};

export const getTime = (get: Get) => {
  return () => {
    const { mode, time, downInitialTime } = get();
    if (mode === "down") {
      const maxTime = downInitialTime;
      const { hours, minutes, seconds } = time;

      return timeToSecond(maxTime) - timeToSecond({ hours, minutes, seconds });
    }

    return timeToSecond(time);
  };
};

export const changeTenTime = (set: Set, get: Get) => {
  return (formula: "add" | "minus") => {
    const { mode, time } = get();

    const newTime =
      mode === "down"
        ? formula === "add"
          ? timeToSecond(time) - 10
          : timeToSecond(time) + 10
        : formula === "add"
        ? timeToSecond(time) + 10
        : timeToSecond(time) - 10;

    const { hours, minutes, seconds } = secondToTime(newTime);

    if (newTime < 0) {
      set({ time: InitialTimerCount });

      return;
    }

    if (mode === "down" && newTime > timeToSecond(get().downInitialTime)) {
      set({ time: get().downInitialTime });

      return;
    }

    if (hours >= 10) {
      set({ time: MaxTime });

      return;
    }
    set({ time: { hours, minutes, seconds } });
  };
};

export const changeMode = (set: Set, get: Get) => {
  return () => {
    const { mode, downInitialTime, interval } = get();
    interval.stop();
    set({
      mode: mode === "up" ? "down" : "up",
      time: mode === "up" ? downInitialTime : InitialTimerCount,
    });
  };
};

export const padTime = (get: Get) => {
  return () => {
    const { hours, minutes, seconds } = get().time ?? InitialTimerCount;

    return `${hours.toString().padStart(2, "0")}${minutes
      .toString()
      .padStart(2, "0")}${seconds.toString().padStart(2, "0")}`;
  };
};
