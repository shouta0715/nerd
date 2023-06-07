/* eslint-disable no-shadow */

import { Get, Interval, Set } from "src/features/timer/store/types";

export const InitialTimerCount = {
  seconds: 0,
  minutes: 0,
  hours: 0,
};

export const MaxTime = {
  seconds: 0,
  minutes: 0,
  hours: 10,
};

const start = (get: Get, set: Set) => {
  return () => {
    if (!get().interval.active) {
      set({ interval: { ...get().interval, active: true } });
      const intervalId = setInterval(() => {
        get().intervalTime();
      }, 1000);
      set({ interval: { ...get().interval, intervalId } });
    }
  };
};

const stop = (get: Get, set: Set) => {
  return () => {
    if (get().interval.active) {
      set({ interval: { ...get().interval, active: false } });
      clearInterval(get().interval.intervalId);
    }
  };
};

const toggle = (get: Get) => {
  return () => {
    const { active, stop, start } = get().interval;
    if (active) {
      stop();
    } else {
      start();
    }
  };
};

const reset = (get: Get, set: Set) => {
  return () => {
    const { interval, resetTime, mode } = get();
    interval.stop();
    if (mode === "down") {
      set({ mode: "up" });
    }
    resetTime();
  };
};

export const interval = (set: Set, get: Get): Interval => ({
  intervalId: undefined,
  active: false,
  start: start(get, set),
  stop: stop(get, set),
  toggle: toggle(get),
  reset: reset(get, set),
});
