import { create } from "zustand";
import { AutoCompleteData } from "src/features/episodes/types";

type AutCompleteState = {
  autoCompleteData: AutoCompleteData[];
  setAutoCompleteData: (data: AutoCompleteData[]) => void;
};

export const useAutoCompleteState = create<AutCompleteState>((set) => ({
  autoCompleteData: [],
  setAutoCompleteData: (data) => set(() => ({ autoCompleteData: data })),
}));

type OpenState = {
  isMenuOpen: boolean;
  setIsMenuOpen: (flag: boolean) => void;
  isNextOpen: boolean;
  setIsNextOpen: (flag: boolean) => void;
};

export const useOpenState = create<OpenState>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (flag) => set(() => ({ isMenuOpen: flag })),
  isNextOpen: false,
  setIsNextOpen: (flag) => set(() => ({ isNextOpen: flag })),
}));
