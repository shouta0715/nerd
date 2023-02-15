import create from "zustand";

type SearchInputState = {
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
};

export const useSearchInputState = create<SearchInputState>((set) => ({
  searchInput: "",
  setSearchInput: (searchInput: string) => set({ searchInput }),
}));
