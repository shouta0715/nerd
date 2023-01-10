import create from "zustand";
import { CommentInput } from "../../types/commentType";

export type CommentInputStore = {
  comment: CommentInput;
  setComment: (message: CommentInput) => void;
  resetComment: () => void;
};

export const useCommentInputStore = create<CommentInputStore>((set) => ({
  comment: {
    content: "",
    spoiler: false,
  },

  setComment: (comment: CommentInput) => set({ comment }),

  resetComment: () =>
    set({
      comment: { content: "", spoiler: false },
    }),
}));

type CountTime = {
  seconds: number;
  minutes: number;
  hours: number;
};

type CommentTimeStore = {
  time: CountTime;
  setTime: () => void;
  resetTime: () => void;
  getTime: () => CountTime;
};

export const useCommentTimeStore = create<CommentTimeStore>((set, get) => ({
  time: {
    seconds: 0,
    minutes: 0,
    hours: 0,
  },
  setTime: () =>
    set({
      time: {
        seconds: get().time.seconds === 59 ? 0 : get().time.seconds + 1,
        minutes:
          get().time.seconds === 59
            ? get().time.minutes + 1
            : get().time.minutes,
        hours:
          get().time.minutes === 59 ? get().time.hours + 1 : get().time.hours,
      },
    }),
  resetTime: () => set({ time: { seconds: 0, minutes: 0, hours: 0 } }),
  getTime: () => get().time,
}));
