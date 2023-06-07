import { act } from "react-dom/test-utils";
import { StateCreator } from "zustand";

const { create: actualCreate } =
  jest.requireActual<typeof import("zustand")>("zustand");

const storeResetFns = new Set<() => void>();

const create = <S>(createState: StateCreator<S>) => {
  const store = actualCreate(createState);
  const initialState = store.getState();
  storeResetFns.add(() => store.setState(initialState, true));

  return store;
};

// Reset all stores after each test run
beforeEach(() => {
  act(() => storeResetFns.forEach((resetFn) => resetFn()));
});

export { create };
