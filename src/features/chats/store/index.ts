import create from "zustand";

const InitialState = {
  content: "",
};

type InputState = {
  content: string;
};

type InputChatState = {
  inputComment: InputState;
  setInputComment: (input: InputState) => void;
  resetInputComment: () => void;
};

export const useInputChatState = create<InputChatState>((set) => ({
  inputComment: InitialState,
  setInputComment: (input) => set({ inputComment: input }),
  resetInputComment: () => set({ inputComment: InitialState }),
}));
