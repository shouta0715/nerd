import React, { useState } from "react";
import { useTimerState } from "src/features/timer/store/timerStore";

export const usePlayTimeInput = () => {
  const [inputTime, setInputTime] = useState<string | null>(null);
  const {
    time,
    padTime,
    mode,
    interval,
    changeTenTime,
    setTime,
    timeToPadTime,
  } = useTimerState((state) => ({
    time: state.time,
    padTime: state.getPadStartTime(),
    interval: state.interval,
    changeTenTime: state.changeTenTime,
    setTime: state.setTime,
    mode: state.mode,
    timeToPadTime: state.timeToPadTime,
  }));

  const onSubmitChangeTime = () => {
    if (!inputTime?.trim()) return;
    const digits = inputTime.match(/.{1,2}/g);
    if (!digits) return;
    const [hours, minutes, seconds] = digits;
    setTime({
      hours: +hours,
      minutes: +minutes,
      seconds: +seconds,
    });
    setInputTime(null);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputNumber = event.target.value;

    const regex = /^[0-9]*$/;

    if (!regex.test(inputNumber)) return;

    const nextChar =
      inputNumber.length > 1
        ? inputNumber.split("")[inputNumber.length - 1]
        : inputNumber;

    const nextTime = inputTime?.split("") ?? padTime.split("");
    nextTime[index] = nextChar;
    const digits = nextTime?.join("").match(/.{1,2}/g);
    if (!digits) return;
    const [hours, minutes, seconds] = digits;
    const newPadTime = timeToPadTime({
      hours: +hours,
      minutes: +minutes,
      seconds: +seconds,
    });

    if (newPadTime === "000000" && padTime === "000000") return;

    setInputTime(newPadTime);
  };

  const isChangeTime =
    (inputTime !== null && inputTime !== padTime) || inputTime === "000000";

  return {
    inputTime,
    onSubmitChangeTime,
    handleChange,
    isChangeTime,
    time,
    mode,
    interval,
    changeTenTime,
    padTime,
  };
};
