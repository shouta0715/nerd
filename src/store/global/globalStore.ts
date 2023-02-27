/* eslint-disable @typescript-eslint/no-empty-function */
import { GraphQLClient } from "graphql-request";
import { Client } from "graphql-ws";
import create from "zustand";
import { AutoCompleteData } from "src/types/dataType";

type GlobalState = {
  isOpenLoginModal: boolean;
  setIsOpenModal: (flag: boolean) => void;
  client: GraphQLClient;
  isClient: boolean;
  wsClient: Client | null;
  isWsClient: boolean;
  authLoading: boolean;
  setAuthLoading: (authLoading: boolean) => void;
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
  isClient: false,
  wsClient: null,
  isWsClient: false,
  authLoading: true,
  setAuthLoading: (authLoading) => set(() => ({ authLoading })),
  setAllClient: ({ client, isClient, wsClient, isWsClient }) =>
    set(() => ({
      client,
      isClient,
      wsClient,
      isWsClient,
    })),
}));
type AutCompleteState = {
  autoCompleteData: AutoCompleteData[];
  setAutoCompleteData: (data: AutoCompleteData[]) => void;
};

export const useAutoCompleteState = create<AutCompleteState>((set) => ({
  autoCompleteData: [],
  setAutoCompleteData: (data) => set(() => ({ autoCompleteData: data })),
}));
