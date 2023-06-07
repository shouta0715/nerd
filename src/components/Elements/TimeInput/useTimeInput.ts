import { useState } from "react";
import { useTimerState } from "src/features/timer/store";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";
import { useCountDownModal } from "src/store/global/globalStore";

export const useTimeInput = () => {
  const [inputTime, setInputTime] = useState<string | null>(null);
  const {
    time,
    padTime,
    mode,
    interval,
    changeTenTime,
    setTime,
    downInitialTime,
  } = useTimerState((state) => ({
    time: state.time,
    padTime: state.padTime(),
    interval: state.interval,
    changeTenTime: state.changeTenTime,
    setTime: state.setTime,
    mode: state.mode,
    downInitialTime: state.downInitialTime,
  }));

  const setIsOpen = useCountDownModal((state) => state.setIsOpen);

  const setChangeTime = () => {
    const digits = inputTime?.match(/.{1,2}/g);
    if (!digits) return;

    const [hours, minutes, seconds] = digits;

    setTime({
      hours: +hours,
      minutes: +minutes,
      seconds: +seconds,
    });
  };

  const changeHandler = (newTime: string) => setInputTime(newTime);

  const isChangeTime = inputTime !== null && inputTime !== padTime;

  const onSubmitChangeTime = () => {
    if (mode === "down" && timeToSecond(downInitialTime) === 0) setIsOpen(true);

    if (timeToSecond(time) === 0 && mode === "down") return;

    if (isChangeTime) {
      setChangeTime();
    } else {
      interval.toggle();
    }

    setInputTime(null);
  };

  return {
    inputTime,
    onSubmitChangeTime,
    changeHandler,
    isChangeTime,
    time,
    mode,
    interval,
    changeTenTime,
    padTime,
    downInitialTime,
  };
};
