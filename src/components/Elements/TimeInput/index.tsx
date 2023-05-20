import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import RotateArrowRightIcon from "public/icons/RotateArrowRightIcon.svg";
import { Button } from "src/components/Elements/Button";
import { PinInput } from "src/components/Elements/PinInput/PinInput";
import { Text } from "src/components/Elements/Text";
import { useTimeInput } from "src/components/Elements/TimeInput/useTimeInput";
import { getTimeButton } from "src/features/timer/utils/getTimeButton";

export const TimeInput: FC = () => {
  const {
    changeHandler,
    inputTime,
    isChangeTime,
    onSubmitChangeTime,
    mode,
    interval,
    changeTenTime,
    time,
    padTime,
    downInitialTime,
  } = useTimeInput();

  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="flex items-center">
        <Text className="text-sm" ff="Hiragino Sans">
          {mode === "up" ? "開始から" : "終了まで"}
        </Text>
        <div className="relative">
          <QuestionMarkCircleIcon className="peer -mr-8 ml-2 h-6 w-6" />
          <div className="question">
            下の数字をタップすると時間を変更できます。
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <div className=" w-full">
          <PinInput
            changeHandler={changeHandler}
            input={inputTime}
            submitHandler={isChangeTime ? onSubmitChangeTime : undefined}
            time={padTime}
          />
        </div>
        <div className="flex w-full">
          <Text className="w-1/3 pr-4 text-center text-dimmed" size="xs">
            時間
          </Text>
          <Text className="w-1/3 pr-1 text-center text-dimmed" size="xs">
            分
          </Text>
          <Text className="w-1/3 text-center text-dimmed" size="xs">
            秒
          </Text>
        </div>
      </div>
      <div className="grid w-full grid-cols-3 items-center justify-between">
        <Button
          className="relative mx-auto h-12 w-12 border-none"
          onClick={() => changeTenTime("minus")}
        >
          <RotateArrowRightIcon className="h-8 w-8 fill-none stroke-black  transition-colors  duration-300 [transform:rotateY(180deg)_rotateZ(-45deg)]" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
            10
          </span>
        </Button>
        <Button
          className={`relative w-full text-sm font-bold text-white ${
            getTimeButton({
              isChangeTime,
              mode,
              downInitialTime,
              time,
              active: interval.active,
            }).color
          }`}
          onClick={onSubmitChangeTime}
          size="sm"
        >
          {
            getTimeButton({
              isChangeTime,
              mode,
              downInitialTime,
              time,
              active: interval.active,
            }).text
          }
        </Button>
        <Button
          className="relative mx-auto h-12 w-12 border-none"
          onClick={() => changeTenTime("add")}
        >
          <RotateArrowRightIcon className="h-8 w-8 -rotate-45 fill-none stroke-black   transition-colors duration-300" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
            10
          </span>
        </Button>
      </div>
    </div>
  );
};
