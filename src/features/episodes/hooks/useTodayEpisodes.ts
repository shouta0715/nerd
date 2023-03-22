/* eslint-disable no-unused-expressions */
import { useRouter } from "next/router";
import { useDeferredValue, useEffect, useMemo } from "react";
import { Episode } from "src/features/episodes/types";
import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";

import { useSearchInputState } from "src/store/input/searchInput";

const sortFn = (next: Episode, target: Episode) => {
  const now = new Date();
  const nextEndDate = new Date(next.end_time);
  const targetEndDate = new Date(target.end_time);
  const nextStartDate = new Date(next.start_time);
  const targetStartDate = new Date(target.start_time);

  if (nextEndDate < now && targetEndDate < now) {
    return nextEndDate.getTime() - targetEndDate.getTime();
  }

  if (nextEndDate < now) {
    return 1;
  }

  if (targetEndDate < now) {
    return -1;
  }

  return nextStartDate.getTime() - targetStartDate.getTime();
};

type Props = {
  data: GetTodayEpisodesQuery;
};

export const useTodayEpisodes = ({ data }: Props) => {
  const { pathname } = useRouter();
  const indexPage = pathname === "/";
  const limit = indexPage ? 8 : data?.episodes?.length;
  const searchInput = useSearchInputState((state) => state.searchInput);
  const setSearchInput = useSearchInputState((state) => state.setSearchInput);

  const filterEpisodes = useMemo(
    () =>
      data?.episodes
        ?.sort(sortFn)
        .slice(0, limit)
        .filter(
          (episode) =>
            episode.title
              .toLowerCase()
              .includes(searchInput.toLowerCase().trim()) ||
            episode.work.series_title
              .toLowerCase()
              .includes(searchInput.toLowerCase().trim())
        ),
    [data?.episodes, limit, searchInput]
  );

  const deferredFilterEpisodes = useDeferredValue(filterEpisodes);

  useEffect(() => () => setSearchInput(""), [setSearchInput]);

  return { deferredFilterEpisodes, indexPage };
};
