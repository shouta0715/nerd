import { GraphQLClient } from "graphql-request";
import { Client } from "graphql-ws";
import create from "zustand";

type GlobalState = {
  isOpenBurger: boolean;
  changeIsOpenBurger: () => void;
  client: GraphQLClient;
  setClient: (client: GraphQLClient) => void;
  isClient: boolean;
  setIsClient: (isClient: boolean) => void;
  wsClient: Client | null;
  setWsClient: (wsClient: Client) => void;
  isWsClient: boolean;
  setIsWsClient: (isWsClient: boolean) => void;
};

export const useGlobalStore = create<GlobalState>((set) => ({
  isOpenBurger: false,
  changeIsOpenBurger: () =>
    set((state) => ({ isOpenBurger: !state.isOpenBurger })),
  client: new GraphQLClient(""),
  setClient: (client) => set(() => ({ client })),
  isClient: false,
  setIsClient: (isClient) => set(() => ({ isClient })),
  wsClient: null,
  setWsClient: (wsClient) => set(() => ({ wsClient })),
  isWsClient: false,
  setIsWsClient: (isWsClient) => set(() => ({ isWsClient })),
}));
