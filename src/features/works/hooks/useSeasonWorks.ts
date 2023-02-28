import { useDeferredValue, useEffect, useMemo } from "react";
import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";
import { useAutoCompleteState } from "src/store/global/globalStore";
import { useSearchInputState } from "src/store/input/serchInput";

type Props = {
  data: GetSeasonWorksQuery;
};

export const useSeasonWorks = ({ data }: Props) => {
  const searchInput = useSearchInputState((state) => state.searchInput);
  const setAutoCompleteData = useAutoCompleteState(
    (state) => state.setAutoCompleteData
  );

  const setSearchInput = useSearchInputState((state) => state.setSearchInput);
  const filterWorks = useMemo(
    () =>
      data?.works.filter((works) =>
        works.series_title
          .toLowerCase()
          .includes(searchInput.toLowerCase().trim())
      ),
    [data?.works, searchInput]
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

  return { deferredFilterWorks };
};
