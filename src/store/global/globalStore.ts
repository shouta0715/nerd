import create from "zustand";

type GlobalState = {
  isOpenBurger: boolean;
  changeIsOpenBurger: () => void;
};

export const useGlobalStore = create<GlobalState>((set) => ({
  isOpenBurger: false,
  changeIsOpenBurger: () =>
    set((state) => ({ isOpenBurger: !state.isOpenBurger })),
}));
