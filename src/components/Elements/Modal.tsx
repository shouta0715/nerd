/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FC } from "react";
import { ModalContent } from "src/components/Layout/modules/ModalContent";
import { useGlobalState } from "src/store/global/globalStore";

export const Modal: FC = () => {
  const isOpenLoginModal = useGlobalState((state) => state.isOpenLoginModal);
  const changeIsOpenModal = useGlobalState((state) => state.setIsOpenModal);

  return (
    <div
      role="button"
      onClick={() => changeIsOpenModal(false)}
      className={`fixed inset-0 z-50 place-items-center bg-black/20 ${
        isOpenLoginModal ? "flex" : "hidden"
      }`}
    >
      <ModalContent />
    </div>
  );
};
