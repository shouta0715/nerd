import { useQueryClient } from "@tanstack/react-query";
import { useNotificationState } from "src/components/Elements/Notification/store";
import { useMutateSearchWorks } from "src/features/works/api/useMutateSearchWorks";
import {
  useSearchWorksInput,
  useSearchWorksState,
} from "src/features/works/store";
import { SearchWorksQuery } from "src/graphql/work/workQuery.generated";

export const useSearchWorks = () => {
  const { search, setSearch } = useSearchWorksInput();
  const { data, mutateAsync } = useMutateSearchWorks();
  const setIsLoading = useSearchWorksState((state) => state.setIsLoading);
  const onShow = useNotificationState((state) => state.onShow);
  const queryClient = useQueryClient();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const prevData = queryClient.getQueryData<SearchWorksQuery["search_works"]>(
      ["SearchWorks", { search }],
      {
        exact: true,
      }
    );

    if (prevData) return;

    if (search.trim().length === 0) return;

    setIsLoading(true);

    try {
      const result = await mutateAsync(search.trim());

      queryClient.setQueryData<SearchWorksQuery["search_works"]>(
        ["SearchWorks", { search }],
        result.search_works
      );
    } catch (error) {
      onShow({
        title: "検索に失敗しました",
        type: "error",
        message: "再度お試しください",
      });
    }

    setIsLoading(false);
  };

  return { submitHandler, search, setSearch, data };
};
