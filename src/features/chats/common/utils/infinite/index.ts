import { InfiniteData } from "@tanstack/react-query";
import { isPageParams } from "src/features/chats/common/types";
import { isAvoidFetchNext } from "src/features/chats/common/utils";

type Props = {
  pageParams?: InfiniteData<unknown>["pageParams"];
  isFetchingNextPage: boolean;
  time: number;
  fetchNextPage: () => void;
};

export const fetchInfiniteNextPage = async ({
  pageParams,
  isFetchingNextPage,
  time,
  fetchNextPage,
}: Props) => {
  if (isFetchingNextPage || time < 270 || !pageParams || pageParams.length > 47)
    return;

  const lastPageParam = pageParams.at(-1);

  if (!isPageParams(lastPageParam) || isAvoidFetchNext(time, lastPageParam))
    return;

  fetchNextPage();
};
