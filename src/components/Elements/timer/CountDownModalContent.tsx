import React, { useState } from "react";
import { Button } from "src/components/Elements/Button";
import { PinInput } from "src/components/Elements/PinInput";
import { useTimerState } from "src/features/timer/store/timerStore";

export const CountDownModalContent = () => {
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
  };

  return (
    <div className="w-full">
      <PinInput
        handleChange={handleChange}
        inputTime={inputTime}
        padTime={padTime}
      />
      <Button onClick={onSubmitHandler} type="submit">
        設定
      </Button>
    </div>
  );
};
