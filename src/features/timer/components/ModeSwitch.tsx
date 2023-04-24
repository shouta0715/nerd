import { Switch } from "@headlessui/react";

import React, { FC } from "react";
import { Button } from "src/components/Elements/Button";
import { useCountDownModal } from "src/features/play/store";
import { useTimerState } from "src/features/timer/store/timerStore";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";

export const ModeSwitch: FC = () => {
  const { mode, changeMode, downInitialTime, interval } = useTimerState(
    (state) => ({
      mode: state.mode,
      changeMode: state.changeMode,
      downInitialTime: state.downInitialTime,
      interval: state.interval,
    })
  );
  const [isOpen, setIsOpen] = useCountDownModal((state) => [
    state.isOpen,
    state.setIsOpen,
  ]);

  const isUp = mode === "up";
  const isSettingDown = timeToSecond(downInitialTime) !== 0;

  const toggleMode = () => {
    if (mode === "up" && !isOpen && !isSettingDown) {
      setIsOpen(true);
    }

    changeMode();
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex items-center">
        <Switch
          as="button"
          checked={isUp}
          className={`${
            isUp ? "bg-pink-500" : "bg-indigo-500"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
          onChange={toggleMode}
        >
          <span className="sr-only">
            {isUp ? "カウントアップモード" : "カウントダウンモード"}
          </span>
          <span
            className={`${
              isUp ? "translate-x-1" : "translate-x-6"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        <Button
          className={`-mr-20 ml-6 bg-teal-500 py-1.5 font-bold text-white transition-opacity duration-300 ${
            mode === "down" ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => {
            setIsOpen(true);
            interval.stop();
          }}
          size="xs"
        >
          設定
        </Button>
      </div>
      <p
        className={`mt-1 font-hiragino-sans text-xs font-medium lg:text-sm ${
          isUp ? "text-pink-500" : "text-indigo-500"
        }`}
      >
        カウント{isUp ? "アップ" : "ダウン"}モード
      </p>
    </div>
  );
};
