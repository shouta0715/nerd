/* eslint-disable no-nested-ternary */

import create from "zustand";
import { timeProcessing } from "src/features/timer/utils/timeProcessing";

const { timeToSecond, secondToTime } = timeProcessing();

const InitialTimerCount = {
  seconds: 0,
  minutes: 0,
  hours: 0,
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
  episodeId: string;
  intervalTime: () => void;
  resetTime: () => void;
  setTime: (time: TimerCount) => void;
  getTime: () => number;
  setEpisodeId: (episodeId: string) => void;
  restEpisodeId: () => void;
  interval: Interval;
  changeTenTime: (formula: "add" | "minus") => void;
  changeTime: (time: number) => void;
  getPadStartTime: () => string;
};

export const useTimerState = create<TimerState>((set, get) => ({
  time: InitialTimerCount,
  episodeId: "",
  intervalTime: () =>
    set({
      time: {
        seconds: get().time.seconds === 59 ? 0 : get().time.seconds + 1,
        minutes:
          get().time.seconds === 59
            ? get().time.minutes + 1
            : get().time.minutes,
        hours:
          get().time.minutes === 59 ? get().time.hours + 1 : get().time.hours,
      },
    }),
  setTime: (time: TimerCount) => set({ time }),
  resetTime: () => {
    set({ time: InitialTimerCount });
  },
  getTime: () => timeToSecond(get().time),
  setEpisodeId: (episodeId: string) => set({ episodeId }),
  restEpisodeId: () => set({ episodeId: "" }),
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
    const newTime =
      formula === "add" ? time + 10 : time - 10 > 0 ? time - 10 : 0;
    const { hours, minutes, seconds } = secondToTime(newTime);
    set({ time: { hours, minutes, seconds } });
  },
  changeTime: (time: number) => {
    const { hours, minutes, seconds } = secondToTime(time);
    set({ time: { hours, minutes, seconds } });
  },
  getPadStartTime: () => {
    const { hours, minutes, seconds } = get().time;

    return `${hours.toString().padStart(2, "0")}${minutes
      .toString()
      .padStart(2, "0")}${seconds.toString().padStart(2, "0")}`;
  },
}));
