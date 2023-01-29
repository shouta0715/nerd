import create from "zustand";
import { User } from "../../types/userType";

type UserStore = {
  user: User;
  setUser: (user: User) => void;
  resetUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (userProp) => set({ user: userProp }),
  resetUser: () => set({ user: null }),
}));
