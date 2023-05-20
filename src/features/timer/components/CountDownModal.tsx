import { Transition } from "@headlessui/react";
import React, { FC } from "react";

import { CountDownModalContent } from "src/features/timer/components/CountDownModalContent";
import { useTimerState } from "src/features/timer/store/timerStore";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";
import { useCountDownModal } from "src/store/global/globalStore";

export const CountDownModal: FC = () => {
  const { mode, downInitialTime, changeMode } = useTimerState((state) => ({
    mode: state.mode,
    downInitialTime: state.downInitialTime,
    changeMode: state.changeMode,
  }));

  const [isOpen, setIsOpen] = useCountDownModal((state) => [
    state.isOpen,
    state.setIsOpen,
  ]);

  return (
    <Transition
      className="fixed inset-0 z-[200]  flex place-items-center bg-black/70"
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          if (timeToSecond(downInitialTime) === 0 && mode === "down")
            changeMode();

          setIsOpen(false);
        }
      }}
      show={isOpen}
    >
      <Transition.Child
        className="mx-4 max-w-md rounded-md bg-white"
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <CountDownModalContent />
      </Transition.Child>
    </Transition>
  );
};
