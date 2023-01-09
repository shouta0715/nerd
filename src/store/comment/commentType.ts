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
