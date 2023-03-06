/* eslint-disable @typescript-eslint/no-empty-function */
import create from "zustand";
import { AutoCompleteData } from "src/types/dataType";

type GlobalState = {
  isOpenLoginModal: boolean;
  setIsOpenModal: (flag: boolean) => void;
  authLoading: boolean;
  setAuthLoading: (authLoading: boolean) => void;
};

export const useGlobalState = create<GlobalState>((set) => ({
  isOpenLoginModal: false,
  setIsOpenModal: (flag) => set(() => ({ isOpenLoginModal: flag })),
  authLoading: true,
  setAuthLoading: (authLoading) => set(() => ({ authLoading })),
}));
type AutCompleteState = {
  autoCompleteData: AutoCompleteData[];
  setAutoCompleteData: (data: AutoCompleteData[]) => void;
};

export const useAutoCompleteState = create<AutCompleteState>((set) => ({
  autoCompleteData: [],
  setAutoCompleteData: (data) => set(() => ({ autoCompleteData: data })),
}));
