import create from "zustand";

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
  getTime: () => TimerCount;
  setEpisodeId: (episodeId: string) => void;
  restEpisodeId: () => void;
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
  getTime: () => get().time,
  setEpisodeId: (episodeId: string) => set({ episodeId }),
  restEpisodeId: () => set({ episodeId: "" }),
}));
