import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
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
    <div className="mt-2 flex flex-col items-center">
      <div className="relative mb-1.5 flex items-center space-x-4">
        <div className="relative">
          <QuestionMarkCircleIcon className="peer ml-2 h-6 w-6" />
          <div className="question -left-11 w-32">
            スイッチを押すとカウントアップ・ダウンを切り替えることができます。
            <br />
            動画配信サービスの表示に合わせて切り替えてください。
          </div>
        </div>
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
        {isUp
          ? "カウントアップでコメントを表示中"
          : "カウントダウンでコメントを表示中"}
      </p>
    </div>
  );
};
