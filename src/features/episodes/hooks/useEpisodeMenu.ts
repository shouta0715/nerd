import { useEffect, useId, useState } from "react";
import { useOpenState } from "src/features/episodes/store";
import { useTimerState } from "src/features/timer/store/timerStore";
import { useUserState } from "src/store/user/userState";

const InitialUserName = localStorage.getItem("user_name");

export const useEpisodeMenu = () => {
  const isMenuOpen = useOpenState((state) => state.isMenuOpen);
  const setIsMenuOpen = useOpenState((state) => state.setIsMenuOpen);
  const user = useUserState((state) => state.user);
  const setUser = useUserState((state) => state.setUser);
  const time = useTimerState((state) => state.time);
  const padTime = useTimerState((state) => state.getPadStartTime());
  const setTime = useTimerState((state) => state.setTime);
  const interval = useTimerState((state) => state.interval);
  const uuid = useId();
  const changeTenTime = useTimerState((state) => state.changeTenTime);
  const [inputValue, setInputValue] = useState<string>(InitialUserName ?? "");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim() || !user) return;
    setUser({ ...user, user_name: inputValue });
    setIsMenuOpen(false);
    localStorage.setItem("user_name", inputValue);
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

    const nextTime = padTime.split("");
    nextTime[index] = nextChar;
    const digits = nextTime.join("").match(/.{1,2}/g);
    if (!digits) return;
    const [hours, minutes, seconds] = digits;
    setTime({
      hours: +hours,
      minutes: +minutes,
      seconds: +seconds,
    });
  };

  useEffect(() => interval.stop, [interval.stop]);

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
  };
};
