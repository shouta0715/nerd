import create from "zustand";

export type CommentInputStore = {
  message: string;
  setMessage: (message: string) => void;
  resetCommentInput: () => void;
};

export const useCommentInputStore = create<CommentInputStore>((set) => ({
  message: "",
  setMessage: (message) => set({ message }),
  resetCommentInput: () => set({ message: "" }),
}));
