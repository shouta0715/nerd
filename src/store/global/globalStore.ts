/* eslint-disable @typescript-eslint/no-empty-function */
import { GraphQLClient } from "graphql-request";
import { Client } from "graphql-ws";
import create from "zustand";

type GlobalState = {
  isOpenLoginModal: boolean;
  setIsOpenModal: (flag: boolean) => void;
  client: GraphQLClient;
  setClient: (client: GraphQLClient) => void;
  isClient: boolean;
  setIsClient: (isClient: boolean) => void;
  wsClient: Client | null;
  setWsClient: (wsClient: Client) => void;
  isWsClient: boolean;
  setIsWsClient: (isWsClient: boolean) => void;
  authLoading: boolean;
  setAllClient: ({
    client,
    isClient,
    wsClient,
    isWsClient,
  }: {
    client: GraphQLClient;
    isClient: boolean;
    wsClient: Client;
    isWsClient: boolean;
  }) => void;
};

export const useGlobalState = create<GlobalState>((set) => ({
  isOpenLoginModal: false,
  setIsOpenModal: (flag) => set(() => ({ isOpenLoginModal: flag })),
  client: new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT as string),
  setClient: (client) => set(() => ({ client })),
  isClient: false,
  setIsClient: (isClient) => set(() => ({ isClient })),
  wsClient: null,
  setWsClient: (wsClient) => set(() => ({ wsClient })),
  isWsClient: false,
  setIsWsClient: (isWsClient) => set(() => ({ isWsClient })),
  authLoading: true,
  setAllClient: ({ client, isClient, wsClient, isWsClient }) =>
    set(() => ({
      client,
      isClient,
      wsClient,
      isWsClient,
    })),
}));
