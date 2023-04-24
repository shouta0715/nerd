import create from "zustand";

type CountDownModal = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useCountDownModal = create<CountDownModal>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
