/* eslint-disable no-unused-expressions */
import React, { FC } from "react";
import { Button } from "src/components/Elements/Button/Button";
import { PinInput } from "src/components/Elements/PinInput/PinInput";
import { Text } from "src/components/Elements/Text";
import { useDownModal } from "src/features/timer/hooks/useDownModal";

export const CountDownModalContent: FC = () => {
  const { inputTime, padTime, handleChange, onSubmitHandler } = useDownModal();

  return (
    <div className="w-full space-y-4 p-6">
      <p className="grid place-items-center font-bold">
        放送時間を入力してください。
        <span className="mt-2 inline-block text-xs font-normal md:text-sm">
          設定した時間を0秒としてコメントが表示されます。
        </span>
        <span className="mt-0.5 inline-block text-xs text-red-500 underline decoration-dotted md:text-sm">
          ※正しい時間が入力されていない場合異なる時間のコメントが表示されます。
        </span>
      </p>
      <div className="w-full">
        <div className="flex flex-col items-center space-y-1">
          <div className="mx-auto">
            <PinInput
              changeHandler={handleChange}
              input={inputTime}
              submitHandler={onSubmitHandler}
              time={padTime}
            />

            <div className="mt-1.5 flex">
              <Text className="w-1/3 pr-4 text-center text-dimmed" size="xs">
                時間
              </Text>
              <Text className="w-1/3 text-center text-dimmed" size="xs">
                分
              </Text>
              <Text className="w-1/3 pl-3 text-center text-dimmed" size="xs">
                秒
              </Text>
            </div>
          </div>
        </div>
        <Button
          className="mx-auto mt-4 bg-indigo-500 font-bold text-white"
          onClick={onSubmitHandler}
          size="sm"
          type="submit"
        >
          {(inputTime === "000000" || !inputTime) && padTime === "000000"
            ? "キャンセル"
            : "設定"}
        </Button>
      </div>
    </div>
  );
};
