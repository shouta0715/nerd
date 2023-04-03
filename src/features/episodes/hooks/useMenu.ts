import { useId, useState } from "react";
import { useOpenState } from "src/features/episodes/store";
import { useTimerState } from "src/features/timer/store/timerStore";
import { useUserState } from "src/store/user/userState";

const InitialUserName = localStorage.getItem("user_name");

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useOpenState((state) => [
    state.isMenuOpen,
    state.setIsMenuOpen,
  ]);
  const [user, setUser] = useUserState((state) => [state.user, state.setUser]);
  const { time, padTime, setTime, interval, changeTenTime, timeToPadTime } =
    useTimerState((state) => ({
      time: state.time,
      padTime: state.getPadStartTime(),
      setTime: state.setTime,
      interval: state.interval,
      changeTenTime: state.changeTenTime,
      timeToPadTime: state.timeToPadTime,
    }));
  const uuid = useId();
  const [inputValue, setInputValue] = useState<string>(InitialUserName ?? "");
  const [inputTime, setInputTime] = useState<string | null>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim() || !user) return;
    setUser({ ...user, user_name: inputValue });
    setIsMenuOpen(false);
    localStorage.setItem("user_name", inputValue);
  };

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
    isMenuOpen,
    setIsMenuOpen,
    onSubmitHandler,
    inputValue,
    user,
    setInputValue,
    padTime,
    interval,
    handleChange,
    uuid,
    time,
    changeTenTime,
    onSubmitChangeTime,
    inputTime,
    isChangeTime,
  };
};
