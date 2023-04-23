import React, { useState } from "react";
import { useTimerState } from "src/features/timer/store/timerStore";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useDownModal = ({ setIsOpen, isOpen }: Props) => {
  const { downInitialTime, setDownInitialTime, timeToPadTime, setTime } =
    useTimerState((state) => ({
      downInitialTime: state.downInitialTime,
      setDownInitialTime: state.setDownInitialTime,
      timeToPadTime: state.timeToPadTime,
      setTime: state.setTime,
    }));

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

    if (newPadTime === "000000" && padTime === "000000") return;

    setInputTime(newPadTime);
  };

  const onSubmitHandler = () => {
    if (!inputTime?.trim()) return;
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
    if (isOpen) setIsOpen(false);
  };

  return {
    handleChange,
    onSubmitHandler,
    inputTime,
    padTime,
  };
};
