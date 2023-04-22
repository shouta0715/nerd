/* eslint-disable no-nested-ternary */

import create from "zustand";
import {
  secondToTime,
  timeToSecond,
} from "src/features/timer/utils/timeProcessing";

const InitialTimerCount = {
  seconds: 0,
  minutes: 0,
  hours: 0,
};

const MaxTime = {
  seconds: 0,
  minutes: 0,
  hours: 10,
};
type TimerCount = {
  seconds: number;
  minutes: number;
  hours: number;
};

type Interval = {
  active: boolean;
  intervalId?: NodeJS.Timer;
  start: () => void;
  stop: () => void;
  toggle: () => void;
  reset: () => void;
};

type TimerState = {
  time: TimerCount;
  downInitialTime: TimerCount;
  setDownInitialTime: (time: TimerCount) => void;
  intervalTime: () => void;
  resetTime: () => void;
  setTime: (time: TimerCount) => void;
  getTime: () => number;
  interval: Interval;
  changeTenTime: (formula: "add" | "minus") => void;
  getPadStartTime: () => string;
  timeToPadTime: (time: TimerCount) => string;
  mode: "up" | "down";
  changeMode: () => void;
};

export const useTimerState = create<TimerState>((set, get) => ({
  mode: "up",
  time: InitialTimerCount,
  downInitialTime: InitialTimerCount,
  setDownInitialTime: (time) => {
    set({ time });
  },
  intervalTime: () => {
    const { hours, minutes, seconds } = get().time;
    if (hours === 10 && minutes === 0 && seconds === 0) {
      get().interval.stop();

      return;
    }
    set(() => {
      const {
        hours: downHours,
        minutes: downMinutes,
        seconds: downSeconds,
      } = get().downInitialTime;

      if (
        downHours === 0 &&
        downMinutes === 0 &&
        downSeconds === 0 &&
        get().mode === "down"
      ) {
        return {
          InitialTimerCount,
        };
      }

      if (get().mode === "down") {
        return {
          time: {
            seconds: seconds === 0 ? 59 : seconds - 1,
            minutes: seconds === 0 ? minutes - 1 : minutes,
            hours: minutes === 0 ? hours - 1 : hours,
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
  },
  setTime: (time: TimerCount) => {
    if (time.hours >= 10) {
      set({
        time: MaxTime,
      });

      return;
    }
    set({ time });
  },
  resetTime: () => {
    set({ time: InitialTimerCount });
  },
  getTime: () => timeToSecond(get().time),
  interval: {
    intervalId: undefined,
    active: false,
    start: () => {
      if (!get().interval.active) {
        set({ interval: { ...get().interval, active: true } });
        const intervalId = setInterval(() => {
          get().intervalTime();
        }, 1000);
        set({ interval: { ...get().interval, intervalId } });
      }
    },
    stop: () => {
      if (get().interval.active && get().interval.intervalId) {
        clearInterval(get().interval.intervalId);
        set({ interval: { ...get().interval, active: false } });
      }
    },
    toggle: () => {
      if (get().interval.active) {
        get().interval.stop();
      } else {
        get().interval.start();
      }
    },
    reset: () => {
      get().interval.stop();
      get().resetTime();
    },
  },
  changeTenTime: (formula: "add" | "minus") => {
    const time = get().getTime();
    const { mode } = get();
    const newTime =
      mode === "down"
        ? formula === "add"
          ? time - 10
          : time + 10
        : formula === "add"
        ? time + 10
        : time - 10;
    const { hours, minutes, seconds } = secondToTime(newTime);

    if (newTime < 0) {
      set({ time: InitialTimerCount });

      return;
    }

    if (hours >= 10) {
      set({ time: MaxTime });

      return;
    }
    set({ time: { hours, minutes, seconds } });
  },

  getPadStartTime: () => {
    const { hours, minutes, seconds } = get().time;

    return `${hours.toString().padStart(2, "0")}${minutes
      .toString()
      .padStart(2, "0")}${seconds.toString().padStart(2, "0")}`;
  },
  timeToPadTime: (time: TimerCount) => {
    const { hours, minutes, seconds } = time;

    return `${hours.toString().padStart(2, "0")}${minutes
      .toString()
      .padStart(2, "0")}${seconds.toString().padStart(2, "0")}`;
  },

  changeMode: () => {
    set({
      mode: get().mode === "up" ? "down" : "up",
    });
  },
}));
