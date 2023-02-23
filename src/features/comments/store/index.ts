import create from "zustand";

const InitialState = {
  content: "",
};

type InputState = {
  content: string;
};

type InputCommentState = {
  inputComment: InputState;
  setInputComment: (input: InputState) => void;
  resetInputComment: () => void;
};

export const useInputCommentState = create<InputCommentState>((set) => ({
  inputComment: InitialState,
  setInputComment: (input) => set({ inputComment: input }),
  resetInputComment: () => set({ inputComment: InitialState }),
}));
