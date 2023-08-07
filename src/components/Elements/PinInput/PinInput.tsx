/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";
import { usePinInput } from "src/components/Elements/PinInput/usePinInput";

type Props = {
  input: string | null;
  time: string;
  changeHandler: (newTime: string) => void;
  submitHandler?: () => void;
};

export const PinInput: FC<Props> = ({
  input,
  time,
  changeHandler,
  submitHandler,
}) => {
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
    submitHandler,
  });

  return (
    <>
      {showComponent.split("").map((digit, index) => (
        <input
          key={`${uuid}-${index}`}
          ref={(node) => {
            if (node) pinInputs.current[index] = node;
          }}
          aria-label={`${index + 1}桁目の数字`}
          className="inline-block h-8 w-8 rounded-md border border-gray-300 p-0 text-center font-futura text-[16px] selection:bg-transparent first:!ml-0 odd:ml-5 odd:mr-2"
          id={`${uuid}-${index + 1}`}
          inputMode="numeric"
          onChange={(e) => onChangeHandler(e, index)}
          onFocus={onFocusHandler}
          onKeyDown={(e) => onKeyDownHandler(e, index)}
          pattern="[0-9]*"
          value={Number(digit)}
        />
      ))}
    </>
  );
};
