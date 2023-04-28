/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";
import { usePinInput } from "src/components/Elements/PinInput/usePinInput";

type Props = {
  input: string | null;
  time: string;
  changeHandler: (newTime: string) => void;
};

export const PinInput: FC<Props> = ({ input, time, changeHandler }) => {
  const {
    onFocusHandler,
    showComponent,
    onChangeHandler,
    uuid,
    pinInputs,
    onKeyDownHandler,
  } = usePinInput({
    input,
    time,
    changeHandler,
  });

  return (
    <>
      {showComponent.split("").map((digit, index) => (
        <input
          key={`${uuid}-${index}`}
          ref={(node) => {
            if (node) pinInputs.current[index] = node;
          }}
          className="inline-block h-8 w-8 rounded-md border border-slate-200 text-center font-futura text-[16px] outline-indigo-500 selection:bg-transparent first:!ml-0 odd:ml-5 odd:mr-2 focus:outline"
          id={`${uuid}-${index + 1}`}
          inputMode="numeric"
          onChange={(e) => onChangeHandler(e, index)}
          onFocus={onFocusHandler}
          onKeyDown={(e) => onKeyDownHandler(e, index)}
          type="tel"
          value={Number(digit)}
        />
      ))}
    </>
  );
};
