/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NextEpisodeMenuWrapper: FC<Props> = ({
  children,
  isOpen,
  setIsOpen,
}) => (
  <div
    className={`fixed inset-0 z-50 place-items-center bg-black/40 lg:contents ${
      isOpen ? "flex" : "hidden"
    }`}
    onClick={(e) => {
      if (e.target === e.currentTarget) setIsOpen(false);
    }}
  >
    <div
      className={`mx-6 h-max max-h-[90vh] w-full max-w-full animate-modal overflow-y-auto  rounded-xl bg-white shadow lg:static lg:mx-0 lg:h-auto lg:max-h-fit lg:w-full  lg:max-w-none lg:translate-x-0 lg:translate-y-0 lg:animate-none lg:rounded-none lg:border-0 lg:shadow-none lg:transition-none ${
        isOpen ? "block" : "  hidden lg:block"
      }`}
    >
      {children}
    </div>
  </div>
);
