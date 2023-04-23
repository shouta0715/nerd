import { Transition } from "@headlessui/react";
import React, { FC } from "react";
import { CountDownModalContent } from "src/features/timer/components/CountDownModalContent";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CountDownModal: FC<Props> = ({ isOpen, setIsOpen }) => (
  <Transition
    className="fixed inset-0 z-50  flex place-items-center bg-black/70"
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
    onClick={(e) => {
      if (e.target === e.currentTarget) setIsOpen(false);
    }}
    show={isOpen}
  >
    <Transition.Child
      className="mx-auto w-4/5 max-w-md rounded-md bg-white"
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <CountDownModalContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </Transition.Child>
  </Transition>
);
