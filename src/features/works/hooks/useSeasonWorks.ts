import { useDeferredValue, useEffect, useMemo } from "react";
import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";

import { useSearchInputState } from "src/store/input/searchInput";

type Props = {
  data: GetSeasonWorksQuery;
};

export const useSeasonWorks = ({ data }: Props) => {
  const searchInput = useSearchInputState((state) => state.searchInput);
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

  useEffect(() => () => setSearchInput(""), [setSearchInput]);

  const deferredFilterWorks = useDeferredValue(filterWorks);

  return { deferredFilterWorks };
};
