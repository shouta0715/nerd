import React, { useState } from "react";
import { useCountDownModal } from "src/features/play/store";
import { useTimerState } from "src/features/timer/store/timerStore";
import { timeToPadTime } from "src/features/timer/utils/timeProcessing";

export const useDownModal = () => {
  const { downInitialTime, setDownInitialTime, setTime, changeMode } =
    useTimerState((state) => ({
      downInitialTime: state.downInitialTime,
      setDownInitialTime: state.setDownInitialTime,
      setTime: state.setTime,
      changeMode: state.changeMode,
    }));

  const setIsOpen = useCountDownModal((state) => state.setIsOpen);

  const padTime = timeToPadTime(downInitialTime);
  const [inputTime, setInputTime] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    event.preventDefault();
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

    if (newPadTime === "000000" && padTime === "000000") {
      setInputTime(null);

      return;
    }

    setInputTime(newPadTime);
  };

  const onSubmitHandler = () => {
    if (!inputTime?.trim()) {
      setIsOpen(false);

      if (padTime === "000000") changeMode();

      return;
    }

    if (padTime === inputTime || inputTime === "000000") {
      changeMode();
      setIsOpen(false);

      return;
    }
    const digits = inputTime.match(/.{1,2}/g);
    if (!digits) return;
    const [hours, minutes, seconds] = digits;

    setDownInitialTime({
      hours: +hours,
      minutes: +minutes,
      seconds: +seconds,
    });
    setTime({
      hours: +hours,
      minutes: +minutes,
      seconds: +seconds,
    });
    setInputTime(null);

    setIsOpen(false);
  };

  return {
    handleChange,
    onSubmitHandler,
    inputTime,
    padTime,
  };
};
