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
  mode: "up" | "down";
  changeMode: () => void;
};

export const useTimerState = create<TimerState>((set, get) => ({
  mode: "up",
  time: InitialTimerCount,
  downInitialTime: InitialTimerCount,
  setDownInitialTime: (time) => {
    set({ downInitialTime: time });
  },
  intervalTime: () => {
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
  },

  setTime: (time: TimerCount) => {
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
  },
  resetTime: () => {
    set({ time: InitialTimerCount, downInitialTime: InitialTimerCount });
  },
  getTime: () => {
    const { mode, time, downInitialTime } = get();
    if (mode === "down") {
      const maxTime = downInitialTime;
      const { hours, minutes, seconds } = time;

      return timeToSecond(maxTime) - timeToSecond({ hours, minutes, seconds });
    }

    return timeToSecond(time);
  },
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
      const { active, intervalId } = get().interval;
      if (active && intervalId) {
        clearInterval(intervalId);
        set({ interval: { ...get().interval, active: false } });
      }
    },
    toggle: () => {
      const { active, stop, start } = get().interval;
      if (active) {
        stop();
      } else {
        start();
      }
    },
    reset: () => {
      const { interval, resetTime, mode } = get();
      interval.stop();
      if (mode === "down") {
        set({ mode: "up" });
      }
      resetTime();
    },
  },
  changeTenTime: (formula: "add" | "minus") => {
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
  },

  getPadStartTime: () => {
    const { hours, minutes, seconds } = get().time;

    return `${hours.toString().padStart(2, "0")}${minutes
      .toString()
      .padStart(2, "0")}${seconds.toString().padStart(2, "0")}`;
  },
  changeMode: () => {
    const { mode, downInitialTime, interval } = get();
    interval.stop();
    set({
      mode: mode === "up" ? "down" : "up",
      time: mode === "up" ? downInitialTime : InitialTimerCount,
    });
  },
}));
