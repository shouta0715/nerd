import create from "zustand";
import { SearchWorksQuery } from "src/graphql/work/workQuery.generated";

type SearchWorksState = {
  data: SearchWorksQuery["search_works"];
  isLoading: boolean;
  setData: (data: SearchWorksQuery["search_works"]) => void;

  setIsLoading: (isLoading: boolean) => void;
};

export const useSearchWorksState = create<SearchWorksState>((set) => ({
  data: [],
  isLoading: false,
  setData: (data) => set({ data }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));
