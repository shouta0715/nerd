import create from "zustand";
import { User } from "../../types/userType";
import { GetEpisodeLikesQuery } from "src/generated/graphql";

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

type UserLikesStore = {
  data: GetEpisodeLikesQuery | undefined;
  setData: (data: GetEpisodeLikesQuery) => void;
};

export const useUserLikesStore = create<UserLikesStore>((set) => ({
  data: undefined,
  setData: (dataProp) => set({ data: dataProp }),
}));
