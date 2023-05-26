import { create } from "zustand";
import { SearchWorksQuery } from "src/graphql/work/workQuery.generated";

type SearchWorksState = {
  data: SearchWorksQuery["search_works"] | null;
  isLoading: boolean;
  setData: (data: SearchWorksQuery["search_works"] | null) => void;

  setIsLoading: (isLoading: boolean) => void;
};

export const useSearchWorksState = create<SearchWorksState>((set) => ({
  data: null,
  isLoading: false,
  setData: (data) => set({ data }),
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
