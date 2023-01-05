import { User } from "firebase/auth";
import create from "zustand";

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
  resetUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (userProp) => set({ user: userProp }),
  resetUser: () => set({ user: null }),
}));
