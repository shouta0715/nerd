import { Modal as MModal } from "@mantine/core";
import React, { FC } from "react";
import { Logo } from "src/components/Icon/Logo";
import { ModalContent } from "src/components/Layout/modules/ModalContent";
import { useGlobalState } from "src/store/global/globalStore";

export const Modal: FC = () => {
  const isOpenLoginModal = useGlobalState((state) => state.isOpenLoginModal);
  const changeIsOpenModal = useGlobalState((state) => state.setIsOpenModal);

  return (
    <MModal
      opened={isOpenLoginModal}
      onClose={() => changeIsOpenModal(false)}
      title={<Logo />}
      classNames={{
        title: "text-2xl font-bold mx-auto",
        overlay: "bg-gray-900 bg-opacity-50",
      }}
      centered
      radius="md"
    >
      <ModalContent />
    </MModal>
  );
};
