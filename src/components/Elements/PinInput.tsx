/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */
import React, { FC, useId } from "react";
import { useTimerState } from "src/features/timer/store/timerStore";

type Props = {
  inputTime: string | null;
  padTime: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
};

export const PinInput: FC<Props> = ({ inputTime, padTime, handleChange }) => {
  const uuid = useId();
  const interval = useTimerState((state) => state.interval);

  return (
    <>
      {inputTime
        ? inputTime.split("").map((digit, index) => (
            <input
              key={`${uuid}-${index}`}
              className="inline-block h-8 w-8 rounded-md border border-slate-200 text-center font-futura text-[16px] outline-indigo-500 first:!ml-0 odd:ml-5 odd:mr-2 focus:outline "
              id={`${uuid}-${index + 1}`}
              onChange={(e) => {
                handleChange(e, index);
              }}
              onFocus={() => {
                interval?.stop();
              }}
              value={digit}
            />
          ))
        : padTime.split("").map((digit, index) => (
            <input
              key={`${uuid}-${index}`}
              className="inline-block h-8 w-8 rounded-md border border-slate-200  text-center font-futura text-[16px] outline-indigo-500 first:!ml-0 odd:ml-5 odd:mr-2 "
              id={`${uuid}-${index + 1}`}
              inputMode="numeric"
              max={9}
              min={0}
              onChange={(e) => {
                handleChange(e, index);
              }}
              onFocus={() => {
                interval?.stop();
              }}
              pattern="[0-9]"
              type="number"
              value={digit}
            />
          ))}
    </>
  );
};
