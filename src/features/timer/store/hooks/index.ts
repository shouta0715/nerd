/* eslint-disable no-shadow */
import {
  InitialTimerCount,
  MaxTime,
} from "src/features/timer/store/initialState";
import { Get, Set, TimerCount } from "src/features/timer/store/types";
import {
  secondToTime,
  timeToSecond,
} from "src/features/timer/utils/timeProcessing";

export const intervalTime = (set: Set, get: Get) => {
  return () => {
    const { getTime, interval, downInitialTime, mode } = get();
    const time = getTime();

    if (time >= timeToSecond(mode === "up" ? MaxTime : downInitialTime)) {
      interval.stop();

      return;
    }

    const newTime =
      mode === "up" ? time + 1 : timeToSecond(downInitialTime) - time - 1;

    const { hours, minutes, seconds } = secondToTime(newTime);

    set({ time: { hours, minutes, seconds } });
  };
};

export const setDownInitialTime = (set: Set) => {
  return (time: TimerCount) => {
    if (timeToSecond(time) > timeToSecond(MaxTime)) {
      set({
        downInitialTime: MaxTime,
      });

      return;
    }

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

export const resetTime = (set: Set, get: Get) => {
  return () =>
    set({ time: InitialTimerCount, downInitialTime: get().downInitialTime });
};

export const getTime = (get: Get) => {
  return () => {
    const { mode, time, downInitialTime } = get();
    if (mode === "down") {
      const { hours, minutes, seconds } = time;

      return (
        timeToSecond(downInitialTime) -
        timeToSecond({ hours, minutes, seconds })
      );
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

    if (newTime < 0) {
      set({ time: InitialTimerCount });

      return;
    }

    const { hours, minutes, seconds } = secondToTime(newTime);

    if (mode === "down" && newTime > timeToSecond(get().downInitialTime)) {
      set({ time: get().downInitialTime });

      return;
    }

    if (hours >= 4) {
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
