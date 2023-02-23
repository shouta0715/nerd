import { useInterval } from "@mantine/hooks";
import create from "zustand";
import { timeProcessing } from "src/utils/timeProcessing";

const { timeToSecond } = timeProcessing();

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

type TimerState = {
  time: TimerCount;
  episodeId: string;
  setTime: () => void;
  resetTime: () => void;
  getTime: () => number;
  setEpisodeId: (episodeId: string) => void;
  restEpisodeId: () => void;
  interval: null | ReturnType<typeof useInterval>;
  setInterval: (interval: ReturnType<typeof useInterval>) => void;
};

export const useTimerState = create<TimerState>((set, get) => ({
  time: InitialTimerCount,
  episodeId: "",
  setTime: () =>
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

  resetTime: () => {
    set({ time: InitialTimerCount });
  },
  getTime: () => timeToSecond(get().time),
  setEpisodeId: (episodeId: string) => set({ episodeId }),
  restEpisodeId: () => set({ episodeId: "" }),
  interval: null,
  setInterval: (interval: ReturnType<typeof useInterval>) => set({ interval }),
}));
