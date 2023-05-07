import create from "zustand";

/* eslint-disable @typescript-eslint/no-empty-function */

type TextProps = {
  title: string;
  message?: string;
};

export type NotificationType = "success" | "error" | "info";

type ClassNames = {
  title?: string;
  message?: string;
};

export type NotificationState = {
  duration: number;
  className: string;
  classNames: ClassNames;
  type: NotificationType;
  isShown: boolean;
  isPersistent: boolean;
} & TextProps;

type NotificationActions = {
  onShow: (state: Partial<NotificationState>) => void;
  onHide: () => void;
};

export type Notification = NotificationState & NotificationActions;

const defaultState: NotificationState = {
  title: "",
  message: "",
  duration: 5000,
  className: "",
  isShown: false,
  classNames: {
    title: "",
    message: "",
  },
  type: "info",
  isPersistent: false,
};

export const useNotificationState = create<Notification>((set, get) => ({
  ...defaultState,
  onShow: (state) => set(() => ({ ...defaultState, ...state, isShown: true })),
  onHide: () => set(() => ({ ...get(), isShown: false })),
}));
