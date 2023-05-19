import React, { FC } from "react";
import { Button } from "src/components/Elements/Button";
import { Switch } from "src/components/Elements/Switch";

import { useTimerState } from "src/features/timer/store/timerStore";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";
import { useCountDownModal } from "src/store/global/globalStore";

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
    if (mode === "up" && !isOpen && !isSettingDown) setIsOpen(true);

    changeMode();
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex items-center">
        <Switch
          checked={isUp}
          defaultChecked={isUp}
          disabledSrOnlyChar="カウントダウンモード"
          enabledSrOnlyChar="カウントアップモード"
          onChange={toggleMode}
          size="sm"
          theme="timer"
        />
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
          isUp ? "text-orange-500" : "text-indigo-500"
        }`}
      >
        カウント{isUp ? "アップ" : "ダウン"}モード
      </p>
    </div>
  );
};
