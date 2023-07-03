/* eslint-disable @typescript-eslint/no-empty-function */
import { Client } from "graphql-ws";
import { create } from "zustand";

type GlobalState = {
  isOpenLoginModal: boolean;
  setIsOpenModal: (flag: boolean) => void;
  authLoading: boolean;
  setAuthLoading: (authLoading: boolean) => void;
  isDeleteConfirmationOpen: boolean;
  setIsDeleteConfirmationOpen: (flag: boolean) => void;
};

export const useGlobalState = create<GlobalState>((set) => ({
  isOpenLoginModal: false,
  setIsOpenModal: (flag) => set(() => ({ isOpenLoginModal: flag })),
  authLoading: true,
  setAuthLoading: (authLoading) => set(() => ({ authLoading })),
  isDeleteConfirmationOpen: false,
  setIsDeleteConfirmationOpen: (flag) =>
    set(() => ({ isDeleteConfirmationOpen: flag })),
}));

export type CountDownModal = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useCountDownModal = create<CountDownModal>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export type WsClientState = {
  wsClient: Client | null;
  setWsClient: (wsClient: Client | null) => void;
};

export const useWsClientState = create<WsClientState>((set) => ({
  wsClient: null,
  setWsClient: (wsClient) => set({ wsClient }),
}));
