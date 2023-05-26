/* eslint-disable @typescript-eslint/no-empty-function */
import { create } from "zustand";

type GlobalState = {
  isOpenLoginModal: boolean;
  setIsOpenModal: (flag: boolean) => void;
  authLoading: boolean;
  setAuthLoading: (authLoading: boolean) => void;
  isDeleteConfirmationOpen: boolean;
  setIsDeleteConfirmationOpen: (flag: boolean) => void;
};

export const useGlobalState = create<GlobalState>((set) => ({
  isOpenLoginModal: false,
  setIsOpenModal: (flag) => set(() => ({ isOpenLoginModal: flag })),
  authLoading: true,
  setAuthLoading: (authLoading) => set(() => ({ authLoading })),
  isDeleteConfirmationOpen: false,
  setIsDeleteConfirmationOpen: (flag) =>
    set(() => ({ isDeleteConfirmationOpen: flag })),
}));

type CountDownModal = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useCountDownModal = create<CountDownModal>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
