import { create } from "zustand";

type SearchWorksState = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const useSearchWorksState = create<SearchWorksState>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));

type SearchWorksInput = {
  search: string;
  setSearch: (searching: string) => void;
};

export const useSearchWorksInput = create<SearchWorksInput>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
}));
