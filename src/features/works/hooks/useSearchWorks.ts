import { useNotificationState } from "src/components/Elements/Notification/store";
import { useMutateSearchWorks } from "src/features/works/api/useMutateSearchWorks";
import {
  useSearchWorksInput,
  useSearchWorksState,
} from "src/features/works/store";

export const useSearchWorks = () => {
  const { search, setSearch } = useSearchWorksInput();
  const { data, mutateAsync } = useMutateSearchWorks();
  const setData = useSearchWorksState((state) => state.setData);
  const setIsLoading = useSearchWorksState((state) => state.setIsLoading);
  const onShow = useNotificationState((state) => state.onShow);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (search.trim().length === 0) {
      setData(null);
      setIsLoading(false);

      return;
    }
    try {
      const result = await mutateAsync(search.trim());
      setData(result.search_works);
      setIsLoading(false);
    } catch (error) {
      onShow({
        title: "検索に失敗しました",
        type: "error",
        message: "再度お試しください",
      });
      setIsLoading(false);
    }
  };

  return { submitHandler, search, setSearch, data };
};
