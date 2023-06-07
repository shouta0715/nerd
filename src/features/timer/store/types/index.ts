import { StoreApi } from "zustand";

export type TimerCount = {
  seconds: number;
  minutes: number;
  hours: number;
};

export type Interval = {
  active: boolean;
  intervalId?: NodeJS.Timer;
  start: () => void;
  stop: () => void;
  toggle: () => void;
  reset: () => void;
};

export type TimerStateActions = {
  setDownInitialTime: (time: TimerCount) => void;
  intervalTime: () => void;
  resetTime: () => void;
  setTime: (time: TimerCount) => void;
  getTime: () => number;
  changeTenTime: (formula: "add" | "minus") => void;
  changeMode: () => void;
  padTime: () => string;
};

export type TimerStateValues = {
  mode: "up" | "down";
  time: TimerCount;
  downInitialTime: TimerCount;
  interval: Interval;
};

export type TimerState = TimerStateValues & TimerStateActions;

export type Set = StoreApi<TimerState>["setState"];
export type Get = StoreApi<TimerState>["getState"];
