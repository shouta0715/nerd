import { create } from "zustand";

type RecentLoginState = {
  isRequired: boolean;
  setIsRequired: (flag: boolean) => void;
};

export const useRecentLoginState = create<RecentLoginState>((set) => ({
  isRequired: false,
  setIsRequired: (flag) => set(() => ({ isRequired: flag })),
}));
