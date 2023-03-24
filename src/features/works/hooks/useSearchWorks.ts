import { useQuerySearchWorks } from "src/features/works/api/useQuerySearchWorks";
import {
  useSearchWorksInput,
  useSearchWorksState,
} from "src/features/works/store";

export const useSearchWorks = () => {
  const { search, setSearch } = useSearchWorksInput();
  const { data, mutateAsync } = useQuerySearchWorks();
  const setData = useSearchWorksState((state) => state.setData);
  const setIsLoading = useSearchWorksState((state) => state.setIsLoading);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await mutateAsync(search);
    setData(result.search_works);
    setIsLoading(false);
  };

  return { submitHandler, search, setSearch, data };
};
