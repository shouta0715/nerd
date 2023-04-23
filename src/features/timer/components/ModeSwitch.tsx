import { Switch } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

import React, { FC } from "react";
import { useTimerState } from "src/features/timer/store/timerStore";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModeSwitch: FC<Props> = ({ isOpen, setIsOpen }) => {
  const { mode, changeMode, interval } = useTimerState((state) => ({
    mode: state.mode,
    changeMode: state.changeMode,
    downInitialTime: state.downInitialTime,
    interval: state.interval,
  }));

  const isUp = mode === "up";

  const toggleMode = () => {
    interval.stop();
    if (mode === "up" && !isOpen) {
      setIsOpen(true);
    }
    changeMode();
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Switch
        as="button"
        checked={isUp}
        className="relative inline-flex items-center rounded-full bg-indigo-500 px-1.5 py-1 duration-300 ui-checked:bg-pink-500 lg:px-2 lg:py-1.5"
        onChange={toggleMode}
      >
        <span className="sr-only">
          {isUp ? "カウントアップモード" : "カウントダウンモード"}
        </span>
        <PlusIcon className="mr-3 h-4 w-4 stroke-[3] duration-300 ui-checked:scale-0 ui-not-checked:stroke-indigo-300 lg:h-5 lg:w-5" />
        <MinusIcon className="h-4 w-4 transform stroke-[3] duration-300 ui-checked:stroke-pink-300 ui-not-checked:scale-0 lg:h-5 lg:w-5" />
        <span className="absolute  left-0.5 flex h-5 w-5 transform items-center justify-center rounded-full bg-white transition duration-500 ui-not-checked:translate-x-[2rem] lg:top-0.5 lg:h-7 lg:w-7 lg:ui-not-checked:translate-x-[2.25rem]">
          <PlusIcon className="h-4 w-4 flex-none stroke-[3] transition-all ui-checked:scale-100 ui-checked:stroke-pink-500 ui-checked:opacity-100 ui-not-checked:scale-0 ui-not-checked:opacity-0 lg:h-5 lg:w-5" />
          <MinusIcon className=" h-4 w-4 flex-none stroke-[3] transition-all duration-300 ui-checked:-mr-4 ui-checked:scale-0 ui-checked:opacity-0 ui-not-checked:mr-4 ui-not-checked:scale-100 ui-not-checked:stroke-indigo-500 ui-not-checked:opacity-100 lg:h-5 lg:w-5 lg:ui-checked:-mr-5 lg:ui-not-checked:mr-5" />
        </span>
      </Switch>
      <p
        className={`ml-2 mt-1.5 font-hiragino-sans text-xs font-medium lg:text-sm ${
          isUp ? "text-pink-500" : "text-indigo-500"
        }`}
      >
        カウント{isUp ? "アップ" : "ダウン"}モード
      </p>
    </div>
  );
};
