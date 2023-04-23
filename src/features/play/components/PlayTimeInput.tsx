/* eslint-disable no-unused-expressions */
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import RotateArrowRightIcon from "public/icons/RotateArrowRightIcon.svg";
import { Button } from "src/components/Elements/Button";
import { PinInput } from "src/components/Elements/PinInput";
import { Text } from "src/components/Elements/Text";
import { usePlayTimeInput } from "src/features/play/hooks/usePlayTimeInput";
import { getTimeButton } from "src/features/play/utils/getTimeButton";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";

export const PlayTimeInput = () => {
  const {
    handleChange,
    inputTime,
    isChangeTime,
    onSubmitChangeTime,
    mode,
    interval,
    changeTenTime,
    time,
    padTime,
    downInitialTime,
  } = usePlayTimeInput();

  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="flex">
        <Text
          className={` text-sm transition-colors duration-300 ${
            mode === "up" ? "text-pink-500" : "text-indigo-500"
          }`}
          ff="Hiragino Sans"
        >
          開始から
        </Text>
        <div className="relative bg-red-500">
          <QuestionMarkCircleIcon className="peer -mr-8 ml-2 h-6 w-6 text-gray-500" />
          <div className="absolute -left-7 bottom-8 w-24  rounded bg-black p-1 text-xs text-white opacity-0  shadow transition-opacity  before:absolute  before:left-1/2 before:top-full before:h-0   before:w-0  before:-translate-x-1/2 before:border-b-0 before:border-l-[6px] before:border-r-[6px] before:border-t-[6px] before:border-solid before:border-black before:border-x-transparent before:content-[''] peer-hover:opacity-100">
            下の数字をタップすると時間を変更できます。
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <div className=" w-full">
          <PinInput
            handleChange={handleChange}
            inputTime={inputTime}
            padTime={padTime}
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
          <RotateArrowRightIcon
            className={`h-8 w-8 fill-none stroke-[2] transition-colors duration-300  [transform:rotateY(180deg)_rotateZ(-45deg)] ${
              mode === "up" ? "stroke-pink-500" : "stroke-indigo-500"
            }`}
          />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
            10
          </span>
        </Button>
        <Button
          className={`relative w-full text-xs font-bold text-white ${
            getTimeButton({
              isChangeTime,
              mode,
              downInitialTime,
              time,
              active: interval.active,
            }).color
          }`}
          onClick={() => {
            if (timeToSecond(time) === 0 && mode === "down") return;
            isChangeTime ? onSubmitChangeTime() : interval?.toggle();
          }}
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
          <RotateArrowRightIcon
            className={`h-8 w-8 -rotate-45 fill-none stroke-[2] transition-colors  duration-300 ${
              mode === "up" ? "stroke-pink-500" : "stroke-indigo-500"
            }`}
          />

          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
            10
          </span>
        </Button>
      </div>
    </div>
  );
};
