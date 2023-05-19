/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from "react";
import { useOpenState } from "src/features/episodes/store";
import { CountDownModal } from "src/features/timer/components/CountDownModal";

type Props = {
  children: React.ReactNode;
};

export const MenuWrapper: FC<Props> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useOpenState((state) => [
    state.isMenuOpen,
    state.setIsMenuOpen,
  ]);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 place-items-center bg-black/40 lg:contents ${
          isMenuOpen ? "flex" : "hidden"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsMenuOpen(false);
        }}
      >
        <div
          className={`mx-6 h-max max-h-[90vh] w-full max-w-full animate-modal overflow-y-auto  rounded-xl bg-white shadow lg:static lg:mx-0 lg:h-auto lg:max-h-fit lg:w-full  lg:max-w-none lg:translate-x-0 lg:translate-y-0 lg:animate-none lg:rounded-none lg:border-0 lg:shadow-none lg:transition-none ${
            isMenuOpen ? "block" : "  hidden lg:block"
          }`}
        >
          {children}
        </div>
      </div>
      <CountDownModal />
    </>
  );
};