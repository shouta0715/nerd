import React, { FC } from "react";
import { Button } from "src/components/Elements/Button";
import { Switch } from "src/components/Elements/Switch";

import { useTimerState } from "src/features/timer/store";
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
    <div className="flex flex-col items-center">
      <div className="mb-1.5 flex items-center space-x-4">
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
          className="bg-teal-500 font-bold text-white transition-opacity duration-300 disabled:bg-gray-300"
          disabled={isUp}
          onClick={() => {
            setIsOpen(true);
            interval.stop();
          }}
          size="xs"
        >
          設定
        </Button>
      </div>
      <p className="text-sm">
        {isUp ? "経過時間に合わせて表示中" : "残り時間に合わせて表示中"}
      </p>
    </div>
  );
};
