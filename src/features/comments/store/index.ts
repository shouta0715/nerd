import create from "zustand";

type RefState = {
  inputRef: React.RefObject<HTMLTextAreaElement> | null;
  setInputRef: (ref: React.RefObject<HTMLTextAreaElement>) => void;
  focusRef: () => void;
};

export const useRefState = create<RefState>((set, get) => ({
  inputRef: null,
  setInputRef: (ref) => set({ inputRef: ref }),
  focusRef: () => {
    const { inputRef } = get();
    inputRef?.current?.focus();
  },
}));

type InputState = {
  content: string;
  reply_to: string | null;
  replied_to_commenter_name: string | null;
};

type InputCommentState = {
  inputComment: InputState;
  setInputComment: (input: InputState) => void;
  resetInputComment: () => void;
};

const InitialState: InputState = {
  content: "",
  reply_to: null,
  replied_to_commenter_name: null,
};

export const useInputCommentState = create<InputCommentState>((set) => ({
  inputComment: InitialState,
  setInputComment: (input) => set({ inputComment: input }),
  resetInputComment: () => set({ inputComment: InitialState }),
}));
