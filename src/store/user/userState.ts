import { User } from "firebase/auth";
import create from "zustand";
import { AuthInputState } from "../../types/inputType";

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

type AuthInputStore = {
  emailWithPassword: AuthInputState;

  resetEmailWithPassword: () => void;
  setEmailWithPassword: ({ email, password }: AuthInputState) => void;
};

export const useUserAuthInputStore = create<AuthInputStore>((set) => ({
  emailWithPassword: {
    email: "",
    password: "",
  },
  resetEmailWithPassword: () =>
    set({
      emailWithPassword: {
        email: "",
        password: "",
      },
    }),
  setEmailWithPassword: ({ email, password }) =>
    set({
      emailWithPassword: {
        email,
        password,
      },
    }),
}));
