/* eslint-disable no-shadow */
import { create } from "zustand";
/* eslint-disable no-nested-ternary */

import {
  changeMode,
  changeTenTime,
  getTime,
  intervalTime,
  padTime,
  resetTime,
  setDownInitialTime,
  setTime,
} from "src/features/timer/store/hooks";

import {
  Get,
  Set,
  TimerState,
  TimerStateActions,
  TimerStateValues,
} from "src/features/timer/store/types";
import { InitialTimerCount, interval } from "src/features/timer/store/values";

export const timerValue = (set: Set, get: Get): TimerStateValues => ({
  mode: "up",
  time: InitialTimerCount,
  downInitialTime: InitialTimerCount,
  interval: interval(set, get),
});

export const timerActions = (set: Set, get: Get): TimerStateActions => ({
  intervalTime: intervalTime(set, get),
  setDownInitialTime: setDownInitialTime(set),
  setTime: setTime(set, get),
  resetTime: resetTime(set),
  getTime: getTime(get),
  changeTenTime: changeTenTime(set, get),
  changeMode: changeMode(set, get),
  padTime: padTime(get),
});

export const useTimerState = create<TimerState>((set, get) => ({
  ...timerValue(set, get),
  ...timerActions(set, get),
}));
