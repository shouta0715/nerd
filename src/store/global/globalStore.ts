import { GraphQLClient } from "graphql-request";
import create from "zustand";

type GlobalState = {
  isOpenBurger: boolean;
  changeIsOpenBurger: () => void;
  client: GraphQLClient;
  setClient: (client: GraphQLClient) => void;
};

export const useGlobalStore = create<GlobalState>((set) => ({
  isOpenBurger: false,
  changeIsOpenBurger: () =>
    set((state) => ({ isOpenBurger: !state.isOpenBurger })),
  client: new GraphQLClient(""),
  setClient: (client) => set(() => ({ client })),
}));
