import { useRef } from "react";
import { useTimerState } from "src/features/timer/store/timerStore";
import { timeToPadTime } from "src/features/timer/utils/timeProcessing";
import { useId } from "src/hooks/useId";

type Props = {
  changeHandler: (newTime: string) => void;
  input: string | null;
  time: string;
  submitHandler?: () => void;
};

const regex = /^[0-9]*$/;

const testRegex = (value: string) => regex.test(value);

const getNextChar = (value: string) =>
  value.length > 1 ? value.split("").at(-1) : value;

const getDigits = (value: string[]) => value.join("").match(/.{1,2}/g);

const getNewTime = ({
  time,
  nextChar,
  index,
}: {
  time: string;
  nextChar: string;
  index: number;
}): string | undefined => {
  const splittedTime = time.split("");
  splittedTime[index] = nextChar;

  const digits = getDigits(splittedTime);

  if (!digits) return undefined;

  const [hours, minutes, seconds] = digits;

  return timeToPadTime({
    hours: +hours,
    minutes: +minutes,
    seconds: +seconds,
  });
};

export const usePinInput = ({
  changeHandler,
  input,
  time,
  submitHandler,
}: Props) => {
  const interval = useTimerState((state) => state.interval);
  const showComponent = input || time;
  const uuid = useId();
  const pinInputs = useRef<Array<HTMLInputElement>>([]);

  const focusPinInput = (direction: "next" | "prev", index: number) => {
    if (!pinInputs.current) return;

    if (direction === "next") {
      const nextPinInput = pinInputs.current[index + 1 > 5 ? 5 : index + 1];

      nextPinInput.focus();

      return;
    }

    if (direction === "prev") {
      const prevPinInput = pinInputs.current[index - 1 < 0 ? 0 : index - 1];

      prevPinInput.focus();
    }
  };

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    event.preventDefault();
    const { value } = event.target;

    if (!testRegex(value)) return;

    const nextChar = getNextChar(value);

    if (!nextChar) return;

    const newTime = getNewTime({ time: input ?? time, nextChar, index });

    if (!newTime) return;

    changeHandler(newTime);
    focusPinInput("next", index);
  };

  const onFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    interval.stop();

    event.target.select();
  };

  const onKeyDownHandler = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace") {
      event.preventDefault();

      const newTime = getNewTime({ time: input ?? time, nextChar: "0", index });

      if (!newTime) return;

      changeHandler(newTime);
      focusPinInput("prev", index);

      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();

      focusPinInput(event.key === "ArrowLeft" ? "prev" : "next", index);

      return;
    }

    if (event.key === "Enter" && submitHandler) {
      event.preventDefault();

      submitHandler();
    }
  };

  return {
    onChangeHandler,
    showComponent,
    uuid,
    interval,
    onFocusHandler,
    pinInputs,
    onKeyDownHandler,
  };
};
