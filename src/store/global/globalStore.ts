/* eslint-disable @typescript-eslint/no-empty-function */
import { GraphQLClient } from "graphql-request";
import create from "zustand";
import { AutoCompleteData } from "src/types/dataType";

type GlobalState = {
  isOpenLoginModal: boolean;
  setIsOpenModal: (flag: boolean) => void;
  client: GraphQLClient;
  setClient: (client: GraphQLClient) => void;
  authLoading: boolean;
  setAuthLoading: (authLoading: boolean) => void;
};

export const useGlobalState = create<GlobalState>((set) => ({
  isOpenLoginModal: false,
  setIsOpenModal: (flag) => set(() => ({ isOpenLoginModal: flag })),
  client: new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT as string),
  setClient: (client) => set(() => ({ client })),
  authLoading: true,
  setAuthLoading: (authLoading) => set(() => ({ authLoading })),
}));
type AutCompleteState = {
  autoCompleteData: AutoCompleteData[];
  setAutoCompleteData: (data: AutoCompleteData[]) => void;
};

export const useAutoCompleteState = create<AutCompleteState>((set) => ({
  autoCompleteData: [],
  setAutoCompleteData: (data) => set(() => ({ autoCompleteData: data })),
}));
