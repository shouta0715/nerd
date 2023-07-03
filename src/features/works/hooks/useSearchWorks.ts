import { useQueryClient } from "@tanstack/react-query";
import { useNotificationState } from "src/components/Elements/Notification/store";
import { SearchWorks } from "src/features/works/api/useQuerySearchWorks";

import {
  useSearchWorksInput,
  useSearchWorksState,
} from "src/features/works/store";
import { SearchWorksQuery } from "src/graphql/work/workQuery.generated";

export const useSearchWorks = () => {
  const { search, setSearch } = useSearchWorksInput();

  const setIsLoading = useSearchWorksState((state) => state.setIsLoading);
  const onShow = useNotificationState((state) => state.onShow);
  const queryClient = useQueryClient();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search.trim().length === 0) return;

    setIsLoading(true);

    try {
      await queryClient.fetchQuery<SearchWorksQuery>({
        queryKey: ["SearchWorks", { search }],
        queryFn: () => SearchWorks(search),
        staleTime: 1000 * 60 * 5,
      });
    } catch (error) {
      onShow({
        title: "検索に失敗しました",
        type: "error",
        message: "再度お試しください",
      });
    }

    setIsLoading(false);
  };

  return { submitHandler, search, setSearch };
};
