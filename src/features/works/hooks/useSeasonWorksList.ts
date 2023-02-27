import { useRouter } from "next/router";
import { useDeferredValue, useEffect, useMemo } from "react";
import { useQuerySeasonWorks } from "src/features/works/api/useQuerySeasonWorks";
import { useAutoCompleteState } from "src/store/global/globalStore";
import { useSearchInputState } from "src/store/input/serchInput";

export const useSeasonWorksList = () => {
  const { data } = useQuerySeasonWorks();
  const { pathname } = useRouter();
  const indexPage = pathname === "/";
  const searchInput = useSearchInputState((state) => state.searchInput);
  const setAutoCompleteData = useAutoCompleteState(
    (state) => state.setAutoCompleteData
  );
  const limit = indexPage ? 18 : data?.works.length;
  const setSearchInput = useSearchInputState((state) => state.setSearchInput);
  const filterWorks = useMemo(
    () =>
      data?.works
        .slice(0, limit)
        .filter((works) =>
          works.series_title
            .toLowerCase()
            .includes(searchInput.toLowerCase().trim())
        ),
    [data?.works, limit, searchInput]
  );

  useEffect(() => {
    setAutoCompleteData(
      data?.works?.map((e) => ({
        title: e.series_title,
        value: e.series_title,
      })) ?? []
    );

    return () => {
      setSearchInput("");
    };
  }, [data?.works, setAutoCompleteData, setSearchInput]);

  const deferredFilterWorks = useDeferredValue(filterWorks);

  return { deferredFilterWorks, indexPage };
};
